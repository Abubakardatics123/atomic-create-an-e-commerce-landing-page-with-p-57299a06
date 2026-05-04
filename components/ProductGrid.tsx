"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">Featured Products</h2>
          <p className="text-slate-500 mt-1">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            applySpecialStyle={index === 0}
          />
        ))}
      </div>
    </section>
  );
}