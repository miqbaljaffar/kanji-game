"use client";

import React, { useState } from "react";
import { Plus, Search, Trash2, Edit2 } from "lucide-react";
import { KanjiEntry } from "@/types";
// Menggunakan path alias @/ agar resolusi modul lebih stabil di Next.js
import { KanjiForm } from "@/components/dashboard/KanjiForm";
import { ConfirmModal } from "@/components/ui/ConfirmModal";

interface KanjiManagerProps {
  data: KanjiEntry[];
  setData: (d: KanjiEntry[]) => void;
}

export function KanjiManager({ data, setData }: KanjiManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<KanjiEntry | null>(null);
  const [search, setSearch] = useState('');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const filteredData = data.filter(k => 
    k.kanji.includes(search) || k.arti.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = async (item: KanjiEntry) => {
    const isEdit = !!editingItem;
    const url = isEdit ? `/api/kanji/${item.id}` : '/api/kanji';
    
    try {
      const res = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      
      const savedItem = await res.json();
      if (isEdit) {
        setData(data.map(d => d.id === savedItem.id ? savedItem : d));
      } else {
        setData([savedItem, ...data]);
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Gagal simpan ke database:", err);
    }
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/kanji/${itemToDelete}`, { method: 'DELETE' });
      if (res.ok) {
        setData(data.filter(d => d.id !== itemToDelete));
        setItemToDelete(null);
      }
    } catch (err) {
      console.error("Gagal hapus dari database:", err);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Kontrol: Pencarian & Tambah */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Cari kanji atau arti..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border-2 border-slate-100 rounded-3xl py-4 pl-14 pr-6 focus:ring-4 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all font-bold shadow-sm"
          />
        </div>
        <button 
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-black px-8 py-4 rounded-3xl shadow-[0_6px_0_#2563eb] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
        >
          <Plus size={20} /> TAMBAH KANJI
        </button>
      </div>

      {/* Grid List Kanji */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="bg-white rounded-4xl p-6 flex items-center gap-6 border-2 border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-200/10 transition-all group overflow-hidden relative">
              {/* Visual Kanji */}
              <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-5xl font-black text-slate-800 shadow-inner group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                {item.kanji}
              </div>
              
              {/* Detail Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-lg uppercase tracking-wider">Level {item.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-bold text-slate-400">{item.romaji}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 truncate">{item.arti}</h3>
                <p className="text-sm font-bold text-slate-500 italic">{item.hiragana}</p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => { setEditingItem(item); setIsModalOpen(true); }} 
                  className="p-3 bg-blue-50 text-blue-500 rounded-2xl hover:bg-blue-100 transition-colors"
                  title="Edit Kanji"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => setItemToDelete(item.id)} 
                  className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-colors"
                  title="Hapus Kanji"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-4xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-black text-xl italic">Data tidak ditemukan...</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {isModalOpen && (
        <KanjiForm 
          initialData={editingItem} 
          onSave={handleSave} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      
      {itemToDelete && (
        <ConfirmModal 
          message="Data Kanji ini akan dihapus permanen dari database dan tidak bisa dikembalikan." 
          onConfirm={confirmDelete} 
          onCancel={() => setItemToDelete(null)} 
        />
      )}
    </div>
  );
}