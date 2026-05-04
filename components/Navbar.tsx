"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", href: "/" },
  { label: "Collections", href: "/" },
  { label: "Sale", href: "/" },
  { label: "About", href: "/" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
              <Sparkles size={16} className="text-white" />
            </span>
            <span>Lumière</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
            >
              <ShoppingCart size={22} className="text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
