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
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-message"
    >
      <div
        className="dm-panel relative w-full p-4 sm:p-6 text-center animate-bounce-pop"
        style={{
          border: "2px solid",
          borderBottom: "6px solid",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
          maxWidth: "min(384px, calc(100vw - 32px))",
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-3xl"
          style={{
            background: "#fff8d6",
            border: "2px solid #ffc800",
            borderRadius: 14,
          }}
          aria-hidden="true"
        >
          ⚠️
        </div>

        <h3 id="confirm-title" className="text-sm font-black dm-text-primary mb-2">{title}</h3>

        <div className="rpg-divider my-3" aria-hidden="true" />

        <p id="confirm-message" className="text-xs font-bold dm-text-secondary mb-6 leading-relaxed">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            aria-label={cancelText}
            className="rpg-btn flex-1 py-3.5 text-xs touch-manipulation font-black dm-text-secondary"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            aria-label={confirmText}
            className="rpg-btn-red flex-1 py-3.5 text-xs touch-manipulation font-black"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
