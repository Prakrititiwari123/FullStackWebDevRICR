import React, { useState, useContext, useEffect } from "react";
import { GoArrowUpRight, GoHeart, GoHeartFill } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [wishlist, setWishlist] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  // Product Data
  const products = [
    {
      id: 1,
      name: "Radiant Glow Foundation",
      category: "Foundation",
      price: 45.99,
      rating: 4.8,
      reviews: 230,
      image: "🧴",
      description: "Lightweight, long-lasting foundation with natural finish",
    },
    {
      id: 2,
      name: "Rose Blush Palette",
      category: "Blush",
      price: 38.50,
      rating: 4.9,
      reviews: 185,
      image: "🎨",
      description: "5-shade blush palette with silky texture",
    },
    {
      id: 3,
      name: "Velvet Matte Lipstick",
      category: "Lipstick",
      price: 28.99,
      rating: 4.7,
      reviews: 142,
      image: "💋",
      description: "Creamy matte lipstick with 12-hour wear",
    },
    {
      id: 4,
      name: "Shimmer Eye Shadow",
      category: "Eyeshadow",
      price: 32.00,
      rating: 4.6,
      reviews: 156,
      image: "✨",
      description: "Pigmented eyeshadow with smooth application",
    },
    {
      id: 5,
      name: "Defined Brow Gel",
      category: "Brows",
      price: 19.99,
      rating: 4.8,
      reviews: 98,
      image: "🎯",
      description: "Waterproof brow gel with hold control",
    },
    {
      id: 6,
      name: "Lash Volumizer Mascara",
      category: "Mascara",
      price: 24.50,
      rating: 4.9,
      reviews: 213,
      image: "✨",
      description: "Volumizing mascara for dramatic lashes",
    },
    {
      id: 7,
      name: "Hydrating Lip Gloss",
      category: "Lipstick",
      price: 21.00,
      rating: 4.5,
      reviews: 127,
      image: "💫",
      description: "Glossy finish with moisturizing formula",
    },
    {
      id: 8,
      name: "Bronzer Powder",
      category: "Bronzer",
      price: 35.99,
      rating: 4.7,
      reviews: 164,
      image: "☀️",
      description: "Buildable bronzer for a sun-kissed glow",
    },
    {
      id: 9,
      name: "Primer Setting Spray",
      category: "Primer",
      price: 29.99,
      rating: 4.8,
      reviews: 189,
      image: "🌟",
      description: "Long-wear primer and setting spray combo",
    },
    {
      id: 10,
      name: "Highlighter Stick",
      category: "Highlighter",
      price: 33.50,
      rating: 4.6,
      reviews: 143,
      image: "💎",
      description: "Chic stick highlighter with luminous finish",
    },
    {
      id: 11,
      name: "Contour Palette",
      category: "Contour",
      price: 42.00,
      rating: 4.9,
      reviews: 201,
      image: "🎭",
      description: "6-shade contour palette for sculpting",
    },
    {
      id: 12,
      name: "Lip Liner Set",
      category: "Lipstick",
      price: 26.99,
      rating: 4.7,
      reviews: 115,
      image: "🖊️",
      description: "5-piece lip liner set in essential shades",
    },
  ];

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "popular") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const categories = [
    "All",
    "Foundation",
    "Blush",
    "Lipstick",
    "Eyeshadow",
    "Mascara",
    "Brows",
    "Bronzer",
    "Highlighter",
    "Contour",
    "Primer",
  ];

  return (
    <>
      {/* Header */}
      {/* <div className="bg-linear-to-r from-pink-500 to-rose-500 text-white py-16"> */}
      <div className="bg-pink-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Shop</h1>
          <p className="text-xl">
            Discover our collection of premium, cruelty-free cosmetics
          </p>
        </div>
      </div>

      {/* Main Shop Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-pink-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition ${
                          selectedCategory === category
                            ? "bg-pink-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Filter */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6 text-gray-600">
                Showing {sortedProducts.length} products
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                      {/* Product Image */}
                      <div className="relative bg-linear-to-br from-pink-100 to-rose-100 h-64 flex items-center justify-center text-6xl overflow-hidden group">
                        {product.image}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-pink-500 hover:text-white transition"
                        >
                          {wishlist.includes(product.id) ? (
                            <GoHeartFill size={20} />
                          ) : (
                            <GoHeart size={20} />
                          )}
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {product.description}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex text-yellow-400">
                            {"⭐".repeat(Math.floor(product.rating))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-pink-500">
                            ${product.price.toFixed(2)}
                          </span>
                          <button 
                            onClick={() => {
                              addToCart(product);
                              setAddedToCart(product.id);
                              setTimeout(() => setAddedToCart(null), 2000);
                            }}
                            className={`transition text-white p-3 rounded-full font-semibold text-sm ${
                              addedToCart === product.id
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-pink-500 hover:bg-pink-600"
                            }`}
                          >
                            {addedToCart === product.id ? "✓ Added!" : <AiOutlineShopping size={20} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-2xl text-gray-600 mb-4">
                      No products found
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                      className="text-pink-500 hover:text-pink-600 font-semibold"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Exclusive Member Benefits</h2>
          <p className="text-lg mb-8">
            Join our loyalty program for exclusive discounts and early access to 
            new products.
          </p>
          <button 
            onClick={() => alert("Welcome to the Loyalty Program! 🎉\n\nCheck your email for membership details and exclusive discount codes.")}
            className="flex items-center justify-center gap-2 mx-auto text-pink-500 bg-white hover:bg-gray-100 transition px-8 py-3 rounded-full font-semibold cursor-pointer"
          >
            Join Now
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
