# Menggunakan Node.js Alpine untuk ukuran image yang sangat ringan
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ---------------------------------------------------------
# Tahap 1: Install Dependencies
# ---------------------------------------------------------
FROM base AS deps
# libc6-compat dan openssl dibutuhkan oleh Prisma di env Alpine
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Copy file package manager & Prisma schema
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
COPY prisma ./prisma

# Install semua dependencies (termasuk devDependencies untuk build)
RUN pnpm install --frozen-lockfile

# ---------------------------------------------------------
# Tahap 2: Build Aplikasi
# ---------------------------------------------------------
FROM base AS builder
RUN apk add --no-cache openssl
WORKDIR /app

# Copy node_modules dari tahap deps dan source code Anda
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client (Wajib agar bisa query ke PostgreSQL)
RUN pnpm prisma generate

# Matikan telemetry Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Lakukan proses Build (ini akan membaca next.config.ts dan membuat folder standalone)
RUN pnpm build

# ---------------------------------------------------------
# Tahap 3: Production Runner (Image Akhir yang akan di-deploy)
# ---------------------------------------------------------
FROM base AS runner
RUN apk add --no-cache openssl
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Buat non-root user demi keamanan container
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy folder public untuk aset statis (seperti gambar maskot)
COPY --from=builder /app/public ./public

# Copy hasil build standalone dan folder static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Gunakan user non-root
USER nextjs

# Cloud Run by default mendengarkan port 8080
EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Perintah utama untuk menjalankan server Next.js standalone
CMD ["node", "server.js"]