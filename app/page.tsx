"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Mail, Check } from "lucide-react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mx-auto mb-6">
          <Mail size={28} className="text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">Get 10% Off Your First Order</h2>
        <p className="text-indigo-200 mb-8 text-lg">
          Subscribe for exclusive deals, new arrivals, and style inspiration delivered to your inbox.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 rounded-2xl px-8 py-5 max-w-md mx-auto">
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <Check size={18} className="text-indigo-600" />
            </span>
            <p className="text-white font-semibold">You&apos;re in! Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm rounded-xl transition-colors whitespace-nowrap shadow-lg">
              Subscribe &amp; Save
            </button>
          </form>
        )}
        <p className="text-indigo-300 text-xs mt-4">No spam, ever. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Navbar />
      <HeroSection />

      {/* Sale / Category Spotlight */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
              <Star size={12} fill="currentColor" /> Hot Deals
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Shop by Category</h2>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">
              Handpicked deals across our most popular categories — updated weekly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Electronics Blowout", subtitle: "Up to 40% off headphones, speakers & more", image: "https://cbs.ucr.edu/sites/default/files/styles/article_header_l/public/2420723_ScotSurplus%20Electronics%20SALE%20CBS%20Header.jpg?h=35d27844&itok=4BMf67TI", cta: "Shop Electronics" },
              { title: "Fashion Forward", subtitle: "New season styles from $24.99", image: "https://cbs.ucr.edu/sites/default/files/styles/article_header_l/public/2420723_ScotSurplus%20Electronics%20SALE%20CBS%20Header.jpg?h=35d27844&itok=4BMf67TI", cta: "Shop Clothing" },
              { title: "Footwear Fest", subtitle: "Premium kicks at unbeatable prices", image: "https://m.media-amazon.com/images/I/91i4I4kD3oL._AC_UF1000,1000_QL80_.jpg", cta: "Shop Footwear" },
            ].map((deal, index) => (
              <div key={deal.title} className="group relative rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3] cursor-pointer">
                <img src={deal.image} alt={deal.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{deal.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{deal.subtitle}</p>
                  <Link href="#products" className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors" style={index === 1 ? { backgroundColor: '#f97316' } : undefined}>
                    {deal.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid />

      <NewsletterSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                  <Sparkles size={16} className="text-white" />
                </span>
                <span className="text-white font-bold text-lg">Lumière</span>
              </div>
              <p className="text-sm leading-relaxed">
                Premium fashion, electronics, and accessories curated for modern living.
              </p>
              <div className="flex gap-3 mt-5">
                {["Twitter", "Instagram", "Facebook"].map((s) => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors text-xs font-bold text-slate-300 hover:text-white">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
            {[
              { heading: "Shop", links: ["New Arrivals", "Electronics", "Clothing", "Footwear", "Accessories", "Sale"] },
              { heading: "Support", links: ["Help Center", "Track Order", "Returns & Exchanges", "Size Guide", "Contact Us"] },
              { heading: "Company", links: ["About Us", "Careers", "Press", "Sustainability", "Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">© 2024 Lumière. All rights reserved.</p>
            <div className="flex items-center gap-2">
              {["Visa", "MC", "PayPal", "Apple Pay"].map((p) => (
                <span key={p} className="px-2 py-1 bg-slate-800 rounded text-xs font-medium text-slate-300">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}