import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const apiKey = process.env.GEMINI_API_KEY || "";

type GeminiPayload = {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
  generationConfig: {
    responseMimeType: string;
  };
};

type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: {
        text?: string;
      }[];
    };
  }[];
};

async function fetchGemini(
  payload: GeminiPayload,
  retries = 3
): Promise<GeminiResponse> {
  let lastErrorMessage = "Fetch Gemini gagal";

  for (let i = 0; i < retries; i++) {
    try {
      // Ubah ke model gemini-1.5-flash yang merupakan model stabil dan publik
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) return await response.json();

      // Log error jika status bukan 200 OK
      const errorText = await response.text();
      console.error(`[Attempt ${i+1}] Gemini API Error:`, errorText);

      // ✅ FIX: Jika kena limit (Error 429: Too Many Requests / Quota Exceeded)
      if (response.status === 429) {
        lastErrorMessage = "Limit API Google Gemini tercapai (Terlalu banyak request). Silakan tunggu sekitar 1 menit sebelum mencoba lagi.";
        // Berhenti mengulang karena percuma (limit berbasis menit)
        break; 
      }

      lastErrorMessage = `API Error: ${response.status}`;

      // Jeda sebelum retry (hanya untuk error selain 429)
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (e) {
      console.error(`[Attempt ${i+1}] Network/Fetch Error:`, e);
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // Melemparkan error dengan pesan spesifik yang akan ditangkap oleh blok catch di bawah
  throw new Error(lastErrorMessage);
}

export async function POST(request: Request) {
  try {
    // Validasi apakah API key sudah terbaca
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY belum disetting di Vercel!");
    }

    const { type, count, category } = await request.json();

    const prompt =
      type === 'kanji'
        ? `Buat ${count} soal kanji JFT level ${category}. Format JSON array: [{kanji, hiragana, romaji, arti, category: "${category}"}]`
        : `Buat ${count} soal bunpou level ${category}. Ada rumpang "___". Format JSON array: [{sentence, translation, options: [4], correctOption}]`;

    const payload: GeminiPayload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    };

    const result = await fetchGemini(payload);

    let rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
    
    // Bersihkan markdown backticks jika AI tak sengaja menyertakannya
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    const data = JSON.parse(rawText);

    if (type === 'kanji') {
      await prisma.kanji.createMany({ data });
    } else {
      await prisma.bunpou.createMany({ data });
    }

    return NextResponse.json({
      success: true,
      count: data.length,
      message: "Soal berhasil dibuat!"
    });

  } catch (error) {
    console.error("API Generate Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Gagal generate soal' },
      { status: 500 }
    );
  }
}