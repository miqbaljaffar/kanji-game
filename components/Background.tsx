"use client";
import { useEffect, useRef } from "react";

export function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Membuat elemen sakura secara dinamis
    const petalsCount = 20;
    for (let i = 0; i < petalsCount; i++) {
      const el = document.createElement("div");
      el.className = "sakura";
      el.style.left = `${Math.random() * 100}%`;
      el.style.fontSize = `${Math.random() * 14 + 12}px`; // Ukuran bervariasi
      el.style.animationDuration = `${Math.random() * 8 + 8}s`; // 8-16 detik
      el.style.animationDelay = `-${Math.random() * 15}s`; // Agar sudah ada yang jatuh di awal
      container.appendChild(el);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="sakura-container" />;
}

export function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Membuat elemen bintang secara dinamis (menghindari penggunaan setState dalam useEffect)
    const starsCount = 5;
    for (let i = 0; i < starsCount; i++) {
      const el = document.createElement("div");
      el.className = "shooting-star";
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 50}%`;
      el.style.animationDuration = `${Math.random() * 4 + 4}s`;
      el.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(el);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
}

export function GridOverlay() {
  return <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />;
}