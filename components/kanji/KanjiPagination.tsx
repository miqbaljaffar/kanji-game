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
  currentPage, totalPages, totalItems, itemsPerPage,
  onPageChange, onItemsPerPageChange,
}: KanjiPaginationProps) {
  if (totalItems === 0) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem   = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end   = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) { if (i > 1 && i < totalPages) pages.push(i); }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div
      className="relative mt-6 p-3.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3"
      style={{
        background: "#ffffff",
        border: "2px solid #e5e7eb",
        borderBottom: "4px solid #d1d5db",
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Range info */}
      <div className="text-[9px] sm:text-[10px] font-black text-slate-500 text-center sm:text-left uppercase tracking-widest">
        {startItem}–{endItem} / {totalItems} Kanji
      </div>

      {/* Page nav */}
      {totalPages > 1 && (
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={clsx(
              "rpg-btn px-3.5 py-2.5 text-[9px] touch-manipulation min-h-[40px] font-black",
              currentPage === 1 && "opacity-40 cursor-not-allowed"
            )}
          >◀ Prev</button>

          {getPageNumbers().map((page, idx) =>
            typeof page === "string" ? (
              <span key={`e${idx}`} className="text-slate-400 text-xs font-bold px-1">···</span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className="w-10 h-10 text-[9px] font-black transition-all cursor-pointer touch-manipulation flex items-center justify-center"
                style={currentPage === page ? {
                  background: "#58cc02",
                  border: "2px solid #58cc02",
                  borderBottom: "3px solid #46a302",
                  borderRadius: 8,
                  color: "#ffffff",
                  transform: "scale(1.05)",
                } : {
                  background: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  borderBottom: "3px solid #d1d5db",
                  borderRadius: 8,
                  color: "#6b7280",
                }}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={clsx(
              "rpg-btn px-3.5 py-2.5 text-[9px] touch-manipulation min-h-[40px] font-black",
              currentPage === totalPages && "opacity-40 cursor-not-allowed"
            )}
          >Next ▶</button>
        </div>
      )}

      {/* Per-page selector */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-black text-slate-400 uppercase">Show:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-3 py-2 text-[9px] font-black text-slate-600 outline-none cursor-pointer min-h-[36px]"
          style={{
            background: "#f9fafb",
            border: "2px solid #e5e7eb",
            borderBottom: "3px solid #d1d5db",
            borderRadius: 8,
          }}
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={36}>36</option>
        </select>
      </div>
    </div>
  );
}
