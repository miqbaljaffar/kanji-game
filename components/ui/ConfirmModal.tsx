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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div
        className="rpg-box-gold relative w-full p-4 sm:p-6 text-center animate-bounce-pop"
        style={{
          boxShadow: "0 0 0 1px #0f0a1e, 0 0 40px rgba(251,191,36,0.3)",
          maxWidth: "min(384px, calc(100vw - 32px))",
        }}
      >
        <span className="rpg-corner rpg-corner-tl" />
        <span className="rpg-corner rpg-corner-tr" />
        <span className="rpg-corner rpg-corner-bl" />
        <span className="rpg-corner rpg-corner-br" />

        {/* Icon */}
        <div
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl"
          style={{ background: "#0f0a1e", border: "3px solid #fbbf24" }}
        >
          ⚠️
        </div>

        <h3
          className="text-sm font-black text-yellow-300 mb-2"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          {title}
        </h3>

        <div className="rpg-divider my-3" />

        <p className="text-xs font-bold text-purple-200 mb-6 leading-relaxed">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="rpg-btn flex-1 py-3.5 text-[9px] touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="rpg-btn-red flex-1 py-3.5 text-[9px] touch-manipulation"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
