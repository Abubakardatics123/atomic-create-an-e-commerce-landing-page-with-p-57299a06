import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 2341,
    image: "https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UF894,1000_QL80_.jpg",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Accessories",
    price: 149.00,
    rating: 4.6,
    reviewCount: 876,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbGdITCpn4S05ssZrcFdez4zb7sVKuGK3rw&s",
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Running Sneakers",
    category: "Footwear",
    price: 94.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 1543,
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ecc442cb-17bc-45f5-b566-ae79ab4a2f32/NIKE+PEGASUS+PREMIUM.png",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    rating: 4.5,
    reviewCount: 3210,
    image: "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
    inStock: true,
  },
  {
    id: 5,
    name: "Organic Cotton Tote Bag",
    category: "Accessories",
    price: 24.99,
    rating: 4.9,
    reviewCount: 654,
    image: "https://www.publicgoods.com/cdn/shop/products/cotton_tote_bag_packshot_800x.jpg?v=1752261701",
    badge: "New",
    inStock: true,
  },
  {
    id: 6,
    name: "Slim Fit Chino Trousers",
    category: "Clothing",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviewCount: 987,
    image: "https://m.media-amazon.com/images/I/61ELTn+o-SL._AC_UY1000_.jpg",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    category: "Accessories",
    price: 34.99,
    rating: 4.8,
    reviewCount: 4521,
    image: "https://m.media-amazon.com/images/I/517NxAIGK9L.jpg",
    inStock: true,
  },
  {
    id: 8,
    name: "Smart Fitness Tracker Band",
    category: "Electronics",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.3,
    reviewCount: 1876,
    image: "https://m.media-amazon.com/images/I/71yuLu8Ou9L.jpg",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 9,
    name: "Merino Wool Crew Neck Sweater",
    category: "Clothing",
    price: 89.00,
    rating: 4.7,
    reviewCount: 432,
    image: "https://brooksbrothers.bynder.com/match/WebName/XS00054_BLACK/",
    badge: "New",
    inStock: true,
  },
  {
    id: 10,
    name: "Leather Chelsea Boots",
    category: "Footwear",
    price: 139.99,
    rating: 4.6,
    reviewCount: 765,
    image: "http://lennertson.com/cdn/shop/files/CLOSE_RIDER_GASTON_01.jpg?v=1759421429",
    inStock: true,
  },
  {
    id: 11,
    name: "Mechanical Keyboard Compact",
    category: "Electronics",
    price: 109.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviewCount: 2109,
    image: "https://cdn.thewirecutter.com/wp-content/media/2025/12/BEST-COMPACT-MECHANICAL-KEYBOARDS-08547-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    badge: "Sale",
    inStock: true,
  },
  {
    id: 12,
    name: "Linen Button-Down Shirt",
    category: "Clothing",
    price: 44.99,
    rating: 4.5,
    reviewCount: 321,
    image: "https://cdn2.propercloth.com/pic_cs/6afa9a81efa66c6bd991f37290900baf_size6.jpg",
    badge: "New",
    inStock: true,
  },
];

export const categories = ["All", "Electronics", "Clothing", "Footwear", "Accessories"];
