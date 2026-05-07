"use client";

import React, { useState } from "react";
import { Plus, Edit2, X } from "lucide-react";
import { KanjiEntry } from "@/types";

interface KanjiFormProps {
  initialData: KanjiEntry | null;
  onSave: (data: KanjiEntry) => void;
  onClose: () => void;
}

export function KanjiForm({ initialData, onSave, onClose }: KanjiFormProps) {

  const [formData, setFormData] = useState<KanjiEntry>(
    initialData || {
      id: "",
      kanji: "",
      hiragana: "",
      romaji: "",
      arti: "",
      category: "A" // ✅ FIX: Diubah menjadi string sesuai dengan interface KanjiEntry
    }
  );

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
      
      <div className="bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden">
        
        <div className="p-8 border-b flex justify-between items-center bg-blue-50/50">
          <h2 className="text-2xl font-black flex items-center gap-3">
            <span className="p-2 bg-white rounded-xl text-blue-500">
              {initialData ? <Edit2 size={24} /> : <Plus size={24} />}
            </span>
            {initialData ? "Edit Kanji" : "Kanji Baru"}
          </h2>

          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-2">
            <X />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
          className="p-8 space-y-5"
        >
          <div className="grid gap-5">

            {/* Kanji */}
            <input
              required
              value={formData.kanji}
              onChange={(e) =>
                setFormData({ ...formData, kanji: e.target.value })
              }
              placeholder="例: 水"
              className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            />

            {/* Hiragana + Romaji */}
            <div className="grid grid-cols-2 gap-4">
              <input
                value={formData.hiragana || ""}
                onChange={(e) =>
                  setFormData({ ...formData, hiragana: e.target.value })
                }
                placeholder="みず"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                value={formData.romaji || ""}
                onChange={(e) =>
                  setFormData({ ...formData, romaji: e.target.value })
                }
                placeholder="mizu"
                className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Arti */}
            <input
              required
              value={formData.arti}
              onChange={(e) =>
                setFormData({ ...formData, arti: e.target.value })
              }
              placeholder="Air"
              className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* CATEGORY INPUT */}
            <input
              type="text" // ✅ FIX: Diubah menjadi text karena category bertipe string
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value, // ✅ FIX: Hapus Number()
                })
              }
              placeholder="Kategori (Misal: A, B, N4, dst)"
              className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 py-4 rounded-2xl font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Batal
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}