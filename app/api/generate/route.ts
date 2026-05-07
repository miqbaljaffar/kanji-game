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
  retries = 5
): Promise<GeminiResponse> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) return await response.json();

      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch {
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error("Fetch Gemini gagal");
}

export async function POST(request: Request) {
  try {
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

    const data = JSON.parse(
      result.candidates?.[0]?.content?.parts?.[0]?.text || "[]"
    );

    if (type === 'kanji') {
      await prisma.kanji.createMany({ data });
    } else {
      await prisma.bunpou.createMany({ data });
    }

    return NextResponse.json({
      success: true,
      count: data.length
    });

  } catch {
    return NextResponse.json(
      { error: 'Gagal generate soal' },
      { status: 500 }
    );
  }
}