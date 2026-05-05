import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Ambil semua data Bunpou
export async function GET() {
  try {
    const bunpous = await prisma.bunpou.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(bunpous);
  } catch (error) {
    console.error("GET Bunpou Error:", error);
    return NextResponse.json({ error: 'Gagal mengambil data bunpou' }, { status: 500 });
  }
}

// POST: Tambah Bunpou baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newBunpou = await prisma.bunpou.create({
      data: {
        sentence: body.sentence,
        translation: body.translation,
        options: body.options,
        correctOption: body.correctOption,
      }
    });
    return NextResponse.json(newBunpou, { status: 201 });
  } catch (error) {
    console.error("POST Bunpou Error:", error);
    return NextResponse.json({ error: 'Gagal membuat data bunpou' }, { status: 500 });
  }
}