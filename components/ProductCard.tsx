"use client";

import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";
import Toast from "./Toast";

interface ProductCardProps {
  product: Product;
  applyShopNowStyle?: boolean;
}

export default function ProductCard({ product, applyShopNowStyle = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [wished, setWished] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setToastVisible(true);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-50 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span
                className={
                  product.badge === "Sale"
                    ? "px-2 py-0.5 text-xs font-bold rounded-full bg-red-500 text-white"
                    : "px-2 py-0.5 text-xs font-bold rounded-full bg-indigo-600 text-white"
                }
              >
                {product.badge === "Sale" ? "-" + discount + "%" : product.badge}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setWished(!wished)}
            aria-label="Add to wishlist"
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
          >
            <Heart
              size={15}
              className={wished ? "text-red-500 fill-red-500" : "text-slate-400"}
            />
          </button>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-slate-900/90 backdrop-blur-sm text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
            >
              <ShoppingCart size={16} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-slate-900">
                {"$" + product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {"$" + product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              aria-label={"Add " + product.name + " to cart"}
              className="flex items-center justify-center w-9 h-9 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors shadow-sm"
              style={applyShopNowStyle ? { backgroundColor: "#ef4444" } : undefined}
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>

      <Toast
        message={product.name + " added to cart!"}
        visible={toastVisible}
        onHide={() => setToastVisible(false)}
      />
    </>
  );
}