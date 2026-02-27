"use client";
import { useEffect, useRef } from "react";

interface SakuraPetal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals: SakuraPetal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 10,
    }));

    petals.forEach((petal) => {
      const el = document.createElement("div");
      el.className = "sakura";
      el.style.left = `${petal.left}%`;
      el.style.fontSize = `${petal.size}px`;
      el.style.animationDuration = `${petal.duration}s`;
      el.style.animationDelay = `${petal.delay}s`;
      container.appendChild(el);
    });

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="sakura-container" />;
}

export function ShootingStars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDuration: `${3 + i * 2}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function GridOverlay() {
  return (
    <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-50" />
  );
}
