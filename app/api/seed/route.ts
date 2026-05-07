import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { kanjiData } from '@/data/kanji';
import { bunpouData } from '@/data/bunpou';

export async function GET() {
  try {
    // 1. Memasukkan data Kanji dari file hardcode ke Database
    const kanjiInsert = await prisma.kanji.createMany({
      data: kanjiData.map(k => ({
        id: k.id,
        kanji: k.kanji,
        hiragana: k.hiragana,
        romaji: k.romaji,
        arti: k.arti,
        category: k.category,
      })),
      skipDuplicates: true, // Jika data dengan ID yang sama sudah ada, akan dilewati agar tidak error
    });

    // 2. Memasukkan data Bunpou dari file hardcode ke Database
    const bunpouInsert = await prisma.bunpou.createMany({
      data: bunpouData.map(b => ({
        id: b.id,
        sentence: b.sentence,
        translation: b.translation,
        options: b.options, // Array langsung didukung oleh PostgreSQL
        correctOption: b.correctOption,
      })),
      skipDuplicates: true,
    });

    return NextResponse.json({
      success: true,
      message: "Data hardcode berhasil dipindahkan ke Database Neon! 🎉",
      kanjiTersimpan: kanjiInsert.count,
      bunpouTersimpan: bunpouInsert.count
    });

  } catch (error) {
    console.error("Seeding Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memindahkan data ke database." },
      { status: 500 }
    );
  }
}