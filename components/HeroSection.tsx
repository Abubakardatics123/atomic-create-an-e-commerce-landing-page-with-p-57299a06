// HeroSection component for the landing page
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-6">
              New Season Arrivals
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Style That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
                Speaks for You
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Discover curated collections of premium fashion, electronics, and accessories — all at prices that make sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20"
              >
                View Collections
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center md:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-slate-400 text-xs mt-0.5">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-slate-400 text-xs mt-0.5">Products</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-slate-400 text-xs mt-0.5">Avg Rating</p>
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48 bg-slate-800">
                <img
                  src="https://static01.nyt.com/images/2026/03/05/multimedia/04STYLEOUTSIDE-MILAN-01-wgzk/04STYLEOUTSIDE-MILAN-01-wgzk-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                  alt="Featured fashion"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 bg-slate-800">
                <img
                  src="https://static01.nyt.com/images/2026/03/05/multimedia/04STYLEOUTSIDE-MILAN-01-wgzk/04STYLEOUTSIDE-MILAN-01-wgzk-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                  alt="Electronics"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden h-32 bg-slate-800">
                <img
                  src="http://dressbarn.com/cdn/shop/articles/learning-the-different-types-of-accessories-dressbarn-105638.jpg?v=1711148381"
                  alt="Accessories"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 bg-slate-800">
                <img
                  src="http://dressbarn.com/cdn/shop/articles/learning-the-different-types-of-accessories-dressbarn-105638.jpg?v=1711148381"
                  alt="Footwear"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
