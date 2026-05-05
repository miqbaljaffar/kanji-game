import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PUT: Update Bunpou berdasarkan ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await request.json();
    
    const updatedBunpou = await prisma.bunpou.update({
      where: { id },
      data: {
        sentence: body.sentence,
        translation: body.translation,
        options: body.options,
        correctOption: body.correctOption,
      }
    });
    return NextResponse.json(updatedBunpou);
  } catch (error) {
    console.error("PUT Bunpou Error:", error);
    return NextResponse.json({ error: 'Gagal memperbarui data bunpou' }, { status: 500 });
  }
}

// DELETE: Hapus Bunpou berdasarkan ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    await prisma.bunpou.delete({
      where: { id }
    });
    return NextResponse.json({ message: 'Bunpou berhasil dihapus' });
  } catch (error) {
    console.error("DELETE Bunpou Error:", error);
    return NextResponse.json({ error: 'Gagal menghapus data bunpou' }, { status: 500 });
  }
}