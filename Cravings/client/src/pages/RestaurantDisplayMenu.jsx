


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { isLogin, role } = useAuth();
  const navigate = useNavigate();
  const data = useLocation().state;
  // console.log("Resturant Menu Page", data);

  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [cartFlag, setCartFlag] = useState([]);
  const [showRestaurantInfo, setShowRestaurantInfo] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setMenuItems(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (NewItem) => {
    if (cart) {
      if (cart.resturantID === NewItem.resturantID._id) {
        setCart((prev) => ({
          ...prev,
          cartItem: [...prev.cartItem, { ...NewItem, quantity: 1 }],
          cartValue: Number(prev.cartValue) + Number(NewItem.price),
        }));
        setCartFlag((prev) => [...prev, NewItem._id]);
      } else {
        toast.error("Clear the cart first");
      }
    } else {
      setCart({
        resturantID: NewItem.resturantID._id,
        cartItem: [{ ...NewItem, quantity: 1 }],
        cartValue: Number(NewItem.price),
      });
      setCartFlag((prev) => [...prev, NewItem._id]);
    }
  };

  const handleCheckout = () => {
    isLogin && role === "customer"
      ? (localStorage.setItem("cart", JSON.stringify(cart)),
        navigate("/checkout-page"))
      : (toast.error("Please Login as Customer"), navigate("/login"));
  };

  // Handle Order Now - scroll to menu section
  const handleOrderNow = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
      toast.success("Browse our menu below! 🍽️");
    }
  };

  // Handle Quick View
  const handleQuickView = (item) => {
    setSelectedItem(item);
    setShowQuickView(true);
  };

  // console.log(cart);

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  return (
    <>
      {/* Premium Restaurant Hero Section */}
      <div className="w-7xl mx-auto mt-6 mb-8 px-3">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-linear-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]"></div>
          </div>

          {/* Hero Image Section */}
          <div className="relative h-125 overflow-hidden group">
            {/* Image with enhanced effects */}
            <img
              src={data.photo.url}
              alt={data.restaurantName}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
            />
            
            {/* Multi-layered Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-500  via-purple-500 to-pink-500 animate-[shimmer_3s_linear_infinite]"></div>
            
            {/* Enhanced Floating Offers */}
            <div className="absolute top-6 right-6 space-y-4 animate-[slideInRight_1s_ease-out]">
              {/* Mega Offer */}
              <div className="relative group/offer">
                <div className="absolute inset-0 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-red-500 via-orange-500 to-red-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-2 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-[bounce_1s_ease-in-out_infinite]">🎉</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest opacity-90">MEGA OFFER</p>
                      <p className="text-2xl font-black tracking-tight">50% OFF</p>
                      <p className="text-[10px] opacity-80">On your first order</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Free Delivery */}
              <div className="relative group/offer">
                <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-green-500 via-emerald-500 to-green-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:-rotate-2 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-[wiggle_1s_ease-in-out_infinite]">🚚</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest opacity-90">FREE DELIVERY</p>
                      <p className="text-sm font-black">Above ₹299</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flash Deal */}
              <div className="relative group/offer">
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-purple-500 via-pink-500 to-purple-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-2 transition-all duration-300 border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-[pulse_1s_ease-in-out_infinite]">⚡</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest opacity-90">FLASH DEAL</p>
                      <p className="text-sm font-black">20% Cashback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limited Time Badge */}
              <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/40 text-center animate-[pulse_2s_ease-in-out_infinite]">
                <p className="text-xs font-semibold">⏰ Limited Time Only!</p>
              </div>
            </div>

            {/* Enhanced Rating Badge */}
            <div className="absolute top-6 left-6 animate-[slideInLeft_1s_ease-out]">
              <div className="relative group/rating">
                <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-75 group-hover/rating:opacity-100 transition-opacity"></div>
                <div className="relative bg-linear-to-br from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-300 text-2xl animate-[spin_2s_linear_infinite]">★</span>
                    <div>
                      <span className="text-3xl font-black">4.5</span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold mt-1 opacity-90">200+ Reviews</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-300 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant Info - Enhanced */}
            <div className="absolute bottom-0 left-0 right-0 p-8 animate-[slideInUp_1.2s_ease-out]">
              <div className="space-y-4">
                {/* Restaurant Name with Glow Effect */}
                <div className="relative inline-block">
                  <h1 className="text-white text-6xl font-black drop-shadow-2xl tracking-tight leading-tight">
                    {data.restaurantName}
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-linear-to-r from-orange-500 via-red-500 to-transparent rounded-full"></div>
                </div>
                
                {/* Description with better styling */}
                <p className="text-gray-100 text-lg max-w-3xl drop-shadow-lg leading-relaxed font-medium">
                  {data.description}
                </p>

                {/* Enhanced Info Pills with Icons */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <div className="bg-white/25 backdrop-blur-xl px-5 py-2.5 rounded-full border-2 border-white/40 shadow-lg hover:bg-white/35 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="text-xl">🍽️</span>
                      Multi-Cuisine
                    </span>
                  </div>
                  <div className="bg-white/25 backdrop-blur-xl px-5 py-2.5 rounded-full border-2 border-white/40 shadow-lg hover:bg-white/35 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="text-xl">⏰</span>
                      30-40 mins
                    </span>
                  </div>
                  <div className="bg-white/25 backdrop-blur-xl px-5 py-2.5 rounded-full border-2 border-white/40 shadow-lg hover:bg-white/35 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="text-xl">📍</span>
                      {data.address || "City Center"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Action Bar */}
          <div className="relative bg-linear-to-r from-orange-50 via-white to-red-50 px-8 py-5">
            <div className="flex items-center justify-between flex-wrap gap-6">
              {/* Features */}
              <div className="flex items-center gap-8">
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">₹₹</div>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Affordable</p>
                </div>
                <div className="h-12 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <p className="text-3xl">🥗</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Veg/Non-veg</p>
                </div>
                <div className="h-12 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl font-black text-green-600">✓</div>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Verified</p>
                </div>
                <div className="h-12 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <p className="text-3xl">🛡️</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Sanitized</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowRestaurantInfo(true)}
                  className="relative px-8 py-3 border-2 border-(--color-primary) text-(--color-primary) rounded-xl font-bold hover:bg-(--color-primary) hover:text-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
                >
                  <span className="relative z-10">View Info</span>
                  <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button 
                  onClick={handleOrderNow}
                  className="relative px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🛒 Order Now
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx="true">{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>

      {/* Premium Menu Section */}
      <div id="menu-section" className="w-7xl mx-auto px-3 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black bg-linear-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Our Delicious Menu
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-600 mt-3">Explore our carefully crafted dishes</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                className="group relative bg-white border border-gray-200 hover:border-orange-300 hover:shadow-2xl p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                key={idx}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 via-red-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex gap-6 relative z-10">
                  {/* Enhanced Image */}
                  <div className="relative shrink-0">
                    <img
                      src={EachItem.images[0].url}
                      alt={EachItem.itemName}
                      className="w-48 h-48 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Veg/Non-veg Badge on Image */}
                    <div className="absolute top-3 left-3">
                      <div
                        className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm"
                        style={{
                          backgroundColor:
                            EachItem.type === "veg" ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {EachItem.type === "veg" ? "🥬 VEG" : "🍖 NON-VEG"}
                      </div>
                    </div>
                    {/* Best Seller Badge */}
                    {idx % 3 === 0 && (
                      <div className="absolute top-3 right-3 bg-linear-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-lg animate-pulse">
                        ⭐ BESTSELLER
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex justify-between">
                    <div className="flex-1">
                      {/* Item Name */}
                      <h3 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-purple-600 transition-all duration-300">
                        {EachItem.itemName}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        {EachItem.description}
                      </p>

                      {/* Details Grid */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
                          <span className="text-orange-600">🍽️</span>
                          <div>
                            <p className="text-[10px] text-gray-500 font-semibold">Cuisine</p>
                            <p className="text-sm font-bold text-gray-800">{EachItem.cuisine}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                          <span className="text-blue-600">⏱️</span>
                          <div>
                            <p className="text-[10px] text-gray-500 font-semibold">Prep Time</p>
                            <p className="text-sm font-bold text-gray-800">{EachItem.preparationTime}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                          <span className="text-purple-600">👥</span>
                          <div>
                            <p className="text-[10px] text-gray-500 font-semibold">Serving</p>
                            <p className="text-sm font-bold text-gray-800">{EachItem.servingSize}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                          <span className="text-green-600">✓</span>
                          <div>
                            <p className="text-[10px] text-gray-500 font-semibold">Status</p>
                            <p className={`text-sm font-bold ${EachItem.availability === "available" ? "text-green-700" : "text-red-700"}`}>
                              {EachItem.availability === "available" ? "Available" : "Not Available"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action Section */}
                    <div className="flex flex-col items-end justify-between ml-6">
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-gray-500 line-through">₹{Math.floor(EachItem.price * 1.3)}</p>
                        <p className="text-4xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ₹{EachItem.price}
                        </p>
                        <p className="text-xs text-green-600 font-semibold mt-1">Save ₹{Math.floor(EachItem.price * 0.3)}</p>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="space-y-3">
                        {EachItem.availability === "available" ? (
                          <button 
                            className="relative px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group/btn disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                            onClick={() => handleAddToCart(EachItem)}
                            disabled={cartFlag.includes(EachItem._id)}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              <span className="text-lg">{cartFlag.includes(EachItem._id) ? "✓" : "🛒"}</span>
                              {cartFlag.includes(EachItem._id) ? "Added" : "Add to Cart"}
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                          </button>
                        ) : (
                          <button disabled className="px-8 py-3 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed">
                            Out of Stock
                          </button>
                        )}
                        
                        {/* Quick View Button */}
                        <button 
                          onClick={() => handleQuickView(EachItem)}
                          className="w-full px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-400 rounded-full blur-3xl opacity-20"></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Restaurant Info Modal */}
      {showRestaurantInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowRestaurantInfo(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Restaurant Information
              </h2>
              <button 
                onClick={() => setShowRestaurantInfo(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <img 
                  src={data.photo.url} 
                  alt={data.restaurantName}
                  className="w-32 h-32 object-cover rounded-xl shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">{data.restaurantName}</h3>
                  <p className="text-gray-600 mt-2">{data.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 font-semibold">📍 Address</p>
                  <p className="text-gray-800 font-bold mt-1">{data.address || "City Center"}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 font-semibold">📧 Email</p>
                  <p className="text-gray-800 font-bold mt-1">{data.email || "N/A"}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 font-semibold">📞 Phone</p>
                  <p className="text-gray-800 font-bold mt-1">{data.phone || "N/A"}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 font-semibold">⏰ Timing</p>
                  <p className="text-gray-800 font-bold mt-1">9 AM - 11 PM</p>
                </div>
              </div>
              
              <div className="bg-linear-to-r from-orange-50 to-red-50 p-4 rounded-xl mt-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">✨ Specialties</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600">Multi-Cuisine</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">Veg & Non-Veg</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">Fast Delivery</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-600">Premium Quality</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowRestaurantInfo(false)}
                className="w-full mt-6 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {showQuickView && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowQuickView(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full mx-4 shadow-2xl transform transition-all animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {selectedItem.itemName}
              </h2>
              <button 
                onClick={() => setShowQuickView(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <img 
                  src={selectedItem.images[0].url} 
                  alt={selectedItem.itemName}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                {selectedItem.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {selectedItem.images.slice(1, 4).map((img, idx) => (
                      <img 
                        key={idx}
                        src={img.url} 
                        alt={`${selectedItem.itemName} ${idx + 2}`}
                        className="w-full h-20 object-cover rounded-lg shadow"
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Item Details */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-3 py-1 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: selectedItem.type === "veg" ? "#22c55e" : "#ef4444" }}
                    >
                      {selectedItem.type === "veg" ? "🥬 VEG" : "🍖 NON-VEG"}
                    </span>
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">🍽️ Cuisine</p>
                    <p className="text-sm font-bold text-gray-800">{selectedItem.cuisine}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">⏱️ Prep Time</p>
                    <p className="text-sm font-bold text-gray-800">{selectedItem.preparationTime}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">👥 Serving</p>
                    <p className="text-sm font-bold text-gray-800">{selectedItem.servingSize}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">✓ Status</p>
                    <p className={`text-sm font-bold ${selectedItem.availability === "available" ? "text-green-700" : "text-red-700"}`}>
                      {selectedItem.availability === "available" ? "Available" : "Not Available"}
                    </p>
                  </div>
                </div>
                
                <div className="bg-linear-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500 line-through">₹{Math.floor(selectedItem.price * 1.3)}</p>
                      <p className="text-3xl font-black bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        ₹{selectedItem.price}
                      </p>
                      <p className="text-xs text-green-600 font-semibold">Save ₹{Math.floor(selectedItem.price * 0.3)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {selectedItem.availability === "available" && (
                    <button 
                      onClick={() => {
                        handleAddToCart(selectedItem);
                        setShowQuickView(false);
                      }}
                      disabled={cartFlag.includes(selectedItem._id)}
                      className="flex-1 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed"
                    >
                      {cartFlag.includes(selectedItem._id) ? "✓ Added to Cart" : "🛒 Add to Cart"}
                    </button>
                  )}
                  <button 
                    onClick={() => setShowQuickView(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Checkout Bar */}
      {cart && (
        <div className="fixed w-full bottom-5 flex items-center justify-center z-50">
          <div className="bg-linear-to-r from-orange-600 via-red-600 to-purple-600 rounded-3xl w-2xl py-4 px-8 shadow-2xl border-2 border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold flex items-center gap-3">
                <span className="text-2xl">🛒</span>
                <div>
                  <p className="text-xs opacity-80">Total Items</p>
                  <p className="text-xl">{cart.cartItem.length}</p>
                </div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-white font-bold flex gap-6 items-center">
                <div>
                  <p className="text-xs opacity-80">Total Amount</p>
                  <p className="text-2xl">₹{cart.cartValue}</p>
                </div>
                <button
                  className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDisplayMenu;