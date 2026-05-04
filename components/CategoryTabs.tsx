"use client";

import { categories } from "@/lib/data";

interface CategoryTabsProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="Product categories">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={
            active === cat
              ? "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-indigo-600 text-white shadow-sm shadow-indigo-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              : "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
