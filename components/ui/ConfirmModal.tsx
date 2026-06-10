"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ message, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
      <div className="bg-white rounded-4xl w-full max-w-sm shadow-2xl p-8 text-center animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
          <AlertTriangle size={40} />
        </div>
        <h3 className="text-2xl font-black text-slate-800 mb-3">Hapus Data?</h3>
        <p className="text-slate-500 font-medium mb-8 leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all">Batal</button>
          <button onClick={onConfirm} className="flex-1 bg-red-500 text-white font-bold py-4 rounded-2xl hover:bg-red-600 shadow-lg shadow-red-200 transition-all">Hapus</button>
        </div>
      </div>
    </div>
  );
}