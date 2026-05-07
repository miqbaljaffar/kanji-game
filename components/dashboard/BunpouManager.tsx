"use client";

import React, { useState } from "react";
import { Plus, Search, Trash2, Edit2, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { BunpouEntry } from "../../types";
import { ConfirmModal } from "../ui/ConfirmModal";
import { BunpouForm } from "./BunpouForm";

interface BunpouManagerProps {
  data: BunpouEntry[];
  setData: (d: BunpouEntry[]) => void;
}

const ITEMS_PER_PAGE = 10;

export function BunpouManager({ data, setData }: BunpouManagerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BunpouEntry | null>(null);
  const [search, setSearch] = useState('');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  // State untuk Paginasi
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter Data berdasarkan Search
  const filteredData = data.filter(b => 
    b.sentence.includes(search) || b.translation?.toLowerCase().includes(search.toLowerCase())
  );

  // 2. Logika Paginasi
  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));
  
  // Pastikan currentPage tidak melebihi totalPages (berguna jika data dihapus)
  const validCurrentPage = Math.min(currentPage, totalPages);
  
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSave = async (item: BunpouEntry) => {
    const isEdit = !!editingItem;
    const url = isEdit ? `/api/bunpou/${item.id}` : '/api/bunpou';
    
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
      const res = await fetch(`/api/bunpou/${itemToDelete}`, { method: 'DELETE' });
      if (res.ok) {
        setData(data.filter(d => d.id !== itemToDelete));
        setItemToDelete(null);
      }
    } catch (err) {
      console.error("Gagal hapus dari database:", err);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* Kontrol Header: Pencarian & Tambah */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Cari kalimat atau terjemahan..." 
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset halaman langsung dari event handler
            }}
            className="w-full bg-white border-2 border-slate-100 rounded-3xl py-4 pl-14 pr-6 focus:ring-4 focus:ring-green-100 focus:border-green-200 outline-none transition-all font-bold shadow-sm"
          />
        </div>
        <button 
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-black px-8 py-4 rounded-3xl shadow-[0_6px_0_#059669] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
        >
          <Plus size={20} /> TAMBAH BUNPOU
        </button>
      </div>

      {/* Grid List Bunpou */}
      <div className="grid grid-cols-1 gap-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((item) => (
            <div key={item.id} className="bg-white rounded-4xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between border-2 border-transparent hover:border-green-100 hover:shadow-xl hover:shadow-green-200/10 transition-all group gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-800 mb-2">{item.sentence}</h3>
                <p className="text-slate-500 font-bold italic mb-4">&quot;{item.translation}&quot;</p>
                
                {/* Opsi Jawaban */}
                <div className="flex flex-wrap gap-2">
                  {item.options.map((opt, i) => (
                    <span 
                      key={i} 
                      className={`px-4 py-2 rounded-xl text-xs font-black border-2 transition-colors ${
                        opt === item.correctOption 
                        ? 'bg-green-50 border-green-200 text-green-600' 
                        : 'bg-slate-50 border-slate-100 text-slate-400'
                      }`}
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="flex gap-2 w-full md:w-auto md:ml-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shrink-0 justify-end mt-4 md:mt-0">
                <button 
                  onClick={() => { setEditingItem(item); setIsModalOpen(true); }}
                  className="p-4 bg-blue-50 text-blue-500 rounded-2xl hover:bg-blue-100 transition-colors"
                  title="Edit Bunpou"
                >
                  <Edit2 size={20} />
                </button>
                <button 
                  onClick={() => setItemToDelete(item.id)} 
                  className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-colors"
                  title="Hapus Bunpou"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center bg-white rounded-4xl border-2 border-dashed border-slate-200">
            <FileText size={64} className="mx-auto mb-4 text-slate-200" />
            <p className="text-slate-400 font-black text-xl">Data Bunpou tidak ditemukan.</p>
          </div>
        )}
      </div>

      {/* Kontrol Paginasi */}
      {filteredData.length > 0 && (
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-3xl shadow-sm border border-slate-100 mt-6">
          <p className="text-sm font-bold text-slate-500">
            Menampilkan <span className="text-green-600">{startIndex + 1}</span> - <span className="text-green-600">{Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)}</span> dari <span className="text-slate-800">{filteredData.length}</span> Bunpou
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={validCurrentPage === 1}
              className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-green-100 hover:text-green-600 disabled:opacity-50 disabled:hover:bg-slate-100 disabled:hover:text-slate-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center px-4 font-black text-slate-700 bg-slate-50 rounded-xl">
              {validCurrentPage} / {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={validCurrentPage === totalPages}
              className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-green-100 hover:text-green-600 disabled:opacity-50 disabled:hover:bg-slate-100 disabled:hover:text-slate-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {isModalOpen && (
        <BunpouForm 
          initialData={editingItem} 
          onSave={handleSave} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {itemToDelete && (
        <ConfirmModal 
          message="Soal Bunpou ini akan dihapus permanen dari database." 
          onConfirm={confirmDelete} 
          onCancel={() => setItemToDelete(null)} 
        />
      )}
    </div>
  );
}