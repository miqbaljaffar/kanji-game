"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface AIQuestionGeneratorProps {
  onSuccess: () => void;
  activeTab: 'kanji' | 'bunpou';
}

export function AIQuestionGenerator({ onSuccess, activeTab }: AIQuestionGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    setStatus('idle');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeTab,
          count: 5, // Anda bisa menambah opsi input jumlah soal nantinya
          category: activeTab === 'kanji' ? 'A' : 'N4' // Default category
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        onSuccess(); // Refresh data di parent
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.error);
      }
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("Terjadi kesalahan saat menghubungi AI.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-200 mb-8 relative overflow-hidden group">
      {/* Dekorasi Background */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black mb-2 flex items-center justify-center md:justify-start gap-3">
            <Sparkles className="animate-pulse" />
            AI Question Generator
          </h3>
          <p className="text-indigo-100 font-bold max-w-md">
            Butuh soal cepat? Biarkan Gemini AI membuatkan soal {activeTab} berkualitas untuk Anda secara otomatis.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 shrink-0">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all ${
              isGenerating 
              ? 'bg-white/20 cursor-not-allowed' 
              : 'bg-white text-indigo-600 hover:scale-105 active:scale-95 shadow-lg shadow-black/10'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin" />
                MENGHUBUNGKAN AI...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                GENERATE 5 SOAL
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-xs font-black bg-green-400/30 px-4 py-2 rounded-xl animate-in fade-in slide-in-from-top">
              <CheckCircle size={14} />
              {message}
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs font-black bg-red-400/30 px-4 py-2 rounded-xl animate-in fade-in slide-in-from-top">
              <AlertCircle size={14} />
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}