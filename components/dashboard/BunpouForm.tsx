import React, { useState } from "react";
import { BunpouEntry } from "@/types";

interface BunpouFormProps {
  initialData: BunpouEntry | null;
  onSave: (data: BunpouEntry) => void;
  onClose: () => void;
}

export function BunpouForm({ initialData, onSave, onClose }: BunpouFormProps) {
  const [formData, setFormData] = useState<BunpouEntry>(initialData || { 
    id: '', sentence: '', translation: '', options: ['', '', '', ''], correctOption: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (idx: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[idx] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const isFormValid = formData.sentence.trim() !== '' && formData.correctOption !== '';

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-slide-up border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
             <span>{initialData ? '✏️' : '✨'}</span>
             {initialData ? 'Edit Bunpou' : 'Tambah Bunpou Baru'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl font-black transition-colors">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1">Kalimat Soal * <span className="text-slate-400 font-normal">(Gunakan ___ untuk rumpang)</span></label>
            <input required name="sentence" value={formData.sentence} onChange={handleChange} placeholder="Contoh: 私は 日本語 ___ 少し 話せます。" className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none text-lg" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1">Terjemahan</label>
            <input name="translation" value={formData.translation} onChange={handleChange} placeholder="Contoh: Saya bisa berbicara bahasa Jepang sedikit." className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none" />
          </div>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-sm font-bold text-slate-600 mb-3">4 Pilihan Jawaban</label>
            <div className="grid grid-cols-2 gap-3">
              {formData.options.map((opt, idx) => (
                <input 
                  key={idx} 
                  value={opt} 
                  onChange={(e) => handleOptionChange(idx, e.target.value)} 
                  placeholder={`Pilihan ${idx + 1}`} 
                  className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none font-bold text-slate-700" 
                  required
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1">Jawaban Benar *</label>
            <select required name="correctOption" value={formData.correctOption} onChange={handleChange} className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none bg-white font-bold text-green-700">
              <option value="" disabled>Pilih jawaban yang benar dari opsi di atas...</option>
              {formData.options.filter(o => o.trim() !== '').map((opt, idx) => (
                <option key={idx} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="pt-2 flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-300 transition-colors">Batal</button>
            <button type="submit" disabled={!isFormValid} className="flex-1 bg-green-600 disabled:bg-green-300 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-sm shadow-green-600/30">Simpan Tata Bahasa</button>
          </div>
        </form>
      </div>
    </div>
  );
}