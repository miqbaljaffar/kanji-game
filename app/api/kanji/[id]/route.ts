import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT: Update Kanji berdasarkan ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await request.json();
    
    const updatedKanji = await prisma.kanji.update({
      where: { id },
      data: {
        kanji: body.kanji,
        hiragana: body.hiragana,
        romaji: body.romaji,
        arti: body.arti,
        category: body.category,
      }
    });
    return NextResponse.json(updatedKanji);
  } catch (error) {
    console.error("PUT Kanji Error:", error);
    return NextResponse.json({ error: 'Gagal memperbarui data kanji' }, { status: 500 });
  }
}

// DELETE: Hapus Kanji berdasarkan ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    await prisma.kanji.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Kanji berhasil dihapus' });
  } catch (error) {
    console.error("DELETE Kanji Error:", error);
    return NextResponse.json({ error: 'Gagal menghapus data kanji' }, { status: 500 });
  }
}