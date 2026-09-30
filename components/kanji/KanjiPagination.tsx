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
    <div className="rpg-box relative mt-6 p-3.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="rpg-corner rpg-corner-tl" />
      <span className="rpg-corner rpg-corner-br" />

      {/* Range info */}
      <div
        className="text-[8px] sm:text-[9px] font-black text-purple-400 text-center sm:text-left"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        {startItem}–{endItem} / {totalItems} KANJI
      </div>

      {/* Page nav */}
      {totalPages > 1 && (
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={clsx(
              "rpg-btn px-3.5 py-2.5 text-[8px] touch-manipulation min-h-[40px]",
              currentPage === 1 && "opacity-40 cursor-not-allowed"
            )}
            style={{ fontFamily: "var(--font-pixel)" }}
          >◀ PREV</button>

          {getPageNumbers().map((page, idx) =>
            typeof page === "string" ? (
              <span key={`e${idx}`} className="text-purple-500 text-xs font-bold px-1">···</span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={clsx(
                  "w-10 h-10 text-[8px] font-black transition-all cursor-pointer touch-manipulation flex items-center justify-center",
                  currentPage === page ? "rpg-btn-gold scale-105" : "rpg-btn"
                )}
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={clsx(
              "rpg-btn px-3.5 py-2.5 text-[8px] touch-manipulation min-h-[40px]",
              currentPage === totalPages && "opacity-40 cursor-not-allowed"
            )}
            style={{ fontFamily: "var(--font-pixel)" }}
          >NEXT ▶</button>
        </div>
      )}

      {/* Per-page selector */}
      <div className="flex items-center gap-2">
        <span
          className="text-[8px] font-black text-purple-400 uppercase"
          style={{ fontFamily: "var(--font-pixel)" }}
        >SHOW:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="rpg-box-dark px-3 py-2 text-[8px] font-black text-yellow-300 outline-none cursor-pointer min-h-[36px]"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={36}>36</option>
        </select>
      </div>
    </div>
  );
}
