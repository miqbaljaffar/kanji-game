"use client";

import React from "react";

interface ConfirmModalProps {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  title = "Konfirmasi",
  message,
  confirmText = "Ya",
  cancelText  = "Batal",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div
        className="relative w-full p-4 sm:p-6 text-center animate-bounce-pop"
        style={{
          background: "#ffffff",
          border: "2px solid #ffc800",
          borderBottom: "6px solid #c49800",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(255,200,0,0.2)",
          maxWidth: "min(384px, calc(100vw - 32px))",
        }}
      >
        {/* Icon */}
        <div
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl"
          style={{
            background: "#fff8d6",
            border: "2px solid #ffc800",
            borderRadius: 14,
          }}
        >
          ⚠️
        </div>

        <h3 className="text-sm font-black text-slate-800 mb-2">{title}</h3>

        <div className="rpg-divider my-3" />

        <p className="text-xs font-bold text-slate-500 mb-6 leading-relaxed">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            aria-label={cancelText}
            className="rpg-btn flex-1 py-3.5 text-[9px] touch-manipulation font-black"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            aria-label={confirmText}
            className="rpg-btn-red flex-1 py-3.5 text-[9px] touch-manipulation font-black"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
