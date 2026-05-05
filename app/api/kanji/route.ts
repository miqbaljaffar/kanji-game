import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Ambil semua data Kanji
export async function GET() {
  try {
    const kanjis = await prisma.kanji.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(kanjis);
  } catch (error) {
    console.error("GET Kanji Error:", error);
    return NextResponse.json({ error: 'Gagal mengambil data kanji' }, { status: 500 });
  }
}

// POST: Tambah Kanji baru
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newKanji = await prisma.kanji.create({
      data: {
        kanji: body.kanji,
        hiragana: body.hiragana,
        romaji: body.romaji,
        arti: body.arti,
        category: body.category,
      }
    });
    return NextResponse.json(newKanji, { status: 201 });
  } catch (error) {
    console.error("POST Kanji Error:", error);
    return NextResponse.json({ error: 'Gagal membuat data kanji' }, { status: 500 });
  }
}