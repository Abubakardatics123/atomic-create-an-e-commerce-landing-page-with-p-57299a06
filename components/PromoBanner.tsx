import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <p className="text-slate-900 font-semibold text-sm">
            🎉 <span className="font-extrabold">SUMMER SALE</span> — Up to 40% off on selected items. Limited time only!
          </p>
          <Link
            href="#products"
            className="inline-flex items-center gap-1 text-slate-900 font-bold text-sm underline underline-offset-2 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Shop the Sale <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
