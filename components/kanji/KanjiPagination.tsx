"use client";

import clsx from "clsx";

interface KanjiPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (size: number) => void;
}

export function KanjiPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: KanjiPaginationProps) {
  if (totalItems === 0 || totalPages <= 1) {
    if (totalItems > 0) {
      return (
        <div className="mt-8 flex items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/60 text-xs font-bold text-slate-500">
          <span>Menampilkan <strong>{totalItems}</strong> dari {totalItems} Kanji</span>
          <div className="flex items-center gap-2">
            <span>Per Halaman:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="bg-slate-100 border border-slate-200 rounded-xl px-2 py-1 font-black text-slate-700 outline-none cursor-pointer"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
          </div>
        </div>
      );
    }
    return null;
  }

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="mt-8 bg-white/85 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-lg border-2 border-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Range Info */}
      <div className="text-xs font-bold text-slate-500 text-center sm:text-left">
        Menampilkan <strong className="text-blue-600 font-black">{startItem} - {endItem}</strong> dari <strong className="text-slate-800 font-black">{totalItems}</strong> Kanji
      </div>

      {/* Page Navigation Controls */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={clsx(
            "px-3 py-2 rounded-xl text-xs font-black transition-all border flex items-center gap-1 cursor-pointer",
            currentPage === 1
              ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
              : "bg-white hover:bg-blue-50 text-blue-600 border-blue-200 shadow-xs active:scale-95"
          )}
        >
          ◀️ Prev
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, idx) => {
          if (typeof page === "string") {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-400 text-xs font-bold">
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={clsx(
                "w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer border flex items-center justify-center",
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105"
                  : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={clsx(
            "px-3 py-2 rounded-xl text-xs font-black transition-all border flex items-center gap-1 cursor-pointer",
            currentPage === totalPages
              ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
              : "bg-white hover:bg-blue-50 text-blue-600 border-blue-200 shadow-xs active:scale-95"
          )}
        >
          Next ▶️
        </button>
      </div>

      {/* Items Per Page Selector */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
        <span>Tampilkan:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="bg-slate-100 border border-slate-200 rounded-xl px-2.5 py-1.5 font-black text-slate-700 outline-none cursor-pointer hover:bg-slate-200 transition-all"
        >
          <option value={12}>12 / hal</option>
          <option value={24}>24 / hal</option>
          <option value={36}>36 / hal</option>
        </select>
      </div>

    </div>
  );
}
