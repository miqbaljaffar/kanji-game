"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  ArrowLeft, 
  BarChart3, 
  Database
} from "lucide-react";

import { KanjiManager } from "../../components/dashboard/KanjiManager";
import { BunpouManager } from "../../components/dashboard/BunpouManager";

// ✅ FIX: ambil dari satu sumber
import { KanjiEntry, BunpouEntry } from "@/types";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'kanji' | 'bunpou'>('kanji');
  
  // ✅ FIX: type dari types/index.ts
  const [kanjis, setKanjis] = useState<KanjiEntry[]>([]);
  const [bunpous, setBunpous] = useState<BunpouEntry[]>([]);
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resKanji, resBunpou] = await Promise.all([
          fetch('/api/kanji'),
          fetch('/api/bunpou')
        ]);

        if (resKanji.ok) {
          const data = await resKanji.json();
          setKanjis(data);
        }

        if (resBunpou.ok) {
          const data = await resBunpou.json();
          setBunpous(data);
        }

      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`hidden md:flex flex-col bg-white border-r transition-all ${isSidebarOpen ? 'w-80' : 'w-24'}`}>
        
        <div className="p-8 flex justify-between">
          <div className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
            <h1 className="text-2xl font-black">
              Admin<span className="text-blue-500">Panel</span>
            </h1>
          </div>

          <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <BarChart3 size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-3">
          <button 
            onClick={() => setActiveTab('kanji')}
            className={`w-full flex gap-4 px-5 py-4 rounded-3xl ${
              activeTab === 'kanji' ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <BookOpen size={24} />
            {isSidebarOpen && "Data Kanji"}
          </button>

          <button 
            onClick={() => setActiveTab('bunpou')}
            className={`w-full flex gap-4 px-5 py-4 rounded-3xl ${
              activeTab === 'bunpou' ? 'bg-green-500 text-white' : ''
            }`}
          >
            <FileText size={24} />
            {isSidebarOpen && "Data Bunpou"}
          </button>
        </nav>

        <div className="p-6 mt-auto">
          <Link href="/">
            <div className="bg-slate-800 text-white py-4 rounded-2xl flex justify-center gap-2 cursor-pointer">
              <ArrowLeft size={20} />
              {isSidebarOpen && "KEMBALI"}
            </div>
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col">

        <header className="bg-white px-8 py-10 border-b">
          <h2 className="text-4xl font-black">
            {activeTab === 'kanji' ? 'Katalog Kosakata' : 'Katalog Bunpou'}
          </h2>
        </header>

        <section className="flex-1 p-8">
          {loading ? (
            <div className="text-center text-slate-400">
              <Database size={48} className="mx-auto mb-4" />
              Loading...
            </div>
          ) : (
            activeTab === 'kanji' ? (
              <KanjiManager data={kanjis} setData={setKanjis} />
            ) : (
              <BunpouManager data={bunpous} setData={setBunpous} />
            )
          )}
        </section>

      </main>
    </div>
  );
}