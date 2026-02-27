"use client";
import { useEffect, useRef } from "react";
import { AppTheme } from "@/types";

// Komponen Utama Pembungkus Background
export function GameBackground({ theme }: { theme: AppTheme }) {
  if (theme === "kids") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#87CEEB]">
        {/* Ornamen Awan Cerah */}
        <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full opacity-90 shadow-lg" style={{ animation: 'float-cloud 10s infinite alternate' }} />
        <div className="absolute top-24 right-20 w-48 h-24 bg-white rounded-full opacity-90 shadow-lg" style={{ animation: 'float-cloud 14s infinite alternate-reverse' }} />
        <div className="absolute top-48 left-1/3 w-24 h-12 bg-white rounded-full opacity-80 shadow-lg" style={{ animation: 'float-cloud 8s infinite alternate' }} />
        
        {/* Matahari */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,1)] animate-pulse-slow" />
      </div>
    );
  }

  // Jika Tema Pro, Tampilkan Background Gelap Elegan
  return (
    <>
      <GridOverlay />
      <SakuraBackground />
      <ShootingStars />
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />
    </>
  );
}

export function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petalsCount = 20;
    for (let i = 0; i < petalsCount; i++) {
      const el = document.createElement("div");
      el.className = "sakura";
      el.style.left = `${Math.random() * 100}%`;
      el.style.fontSize = `${Math.random() * 14 + 12}px`; 
      el.style.animationDuration = `${Math.random() * 8 + 8}s`; 
      el.style.animationDelay = `-${Math.random() * 15}s`; 
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