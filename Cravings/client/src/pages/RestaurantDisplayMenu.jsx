import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";
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

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart();
    setCartFlag([]);
  };

  const handleAddToCart = (NewItem) => {
    if (cart) {
      if (cart.resturantID === NewItem.resturantID) {
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
        resturantID: NewItem.resturantID,
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

  // console.log(cart);

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  return (
    <>
      <style jsx="true">{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
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

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-pulse-soft {
          animation: pulse 3s infinite;
        }

        .animate-glow {
          animation: glow 2s infinite;
        }

        .menu-item-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .menu-item-hover:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .menu-item-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: 12px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .menu-item-hover:hover::before {
          opacity: 1;
        }

        .image-hover {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .image-hover:hover {
          transform: scale(1.1) rotate(1deg);
        }

        .detail-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .detail-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .detail-card:hover::before {
          left: 100%;
        }

        .detail-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2);
        }

        .btn-interactive {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-interactive::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-interactive:active::after {
          width: 300px;
          height: 300px;
        }

        .btn-interactive:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-interactive:active {
          transform: scale(0.98);
        }

        .contact-info {
          transition: all 0.3s ease;
        }

        .contact-info:hover {
          transform: translateX(5px);
        }

        .rating-star {
          transition: all 0.3s ease;
        }

        .rating-star:hover {
          transform: scale(1.2) rotate(15deg);
        }

        .hero-section {
          position: relative;
          overflow: hidden;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 100%);
          pointer-events: none;
        }

        .text-animated {
          transition: all 0.3s ease;
        }

        .text-animated:hover {
          letter-spacing: 1px;
        }

        .feature-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-item:hover {
          transform: translateX(10px);
        }

        .cart-button {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cart-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .cart-button:active {
          transform: translateY(0);
        }

        .checkout-btn {
          transition: all 0.3s ease;
          position: relative;
        }

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .checkout-btn:active {
          transform: translateY(0);
        }

        .header-title {
          transition: all 0.3s ease;
        }

        .header-title:hover {
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* Restaurant About Section */}
      <div className="w-7xl mx-auto mt-6 mb-8 px-3">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-down">
          {/* Hero Image Section */}
          <div className="relative h-80 overflow-hidden group">
            <img
              src={data.photo.url}
              alt={data.restaurantName}
              className="w-full h-full object-cover image-hover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Restaurant Title */}
            <div className="mb-6 animate-slide-in-left">
              <h1 className="text-5xl font-black text-(--color-primary) mb-2 header-title text-animated">
                {data.restaurantName}
              </h1>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-yellow-500 text-2xl rating-star">⭐</span>
                <span className="text-lg font-bold text-gray-700 group-hover:text-(--color-primary) transition">4.5</span>
                <span className="text-sm text-gray-500">(200+ Reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">About Us</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up">
              {/* Address */}
              <div className="detail-card bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition transform origin-left">📍</div>
                <p className="text-xs text-gray-600 font-semibold mb-1 group-hover:text-blue-700 transition">Address</p>
                <p className="text-sm font-bold text-gray-800 contact-info">
                  {data.address || "Not provided"}
                </p>
              </div>

              {/* Email */}
              <div className="detail-card bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition transform origin-left">📧</div>
                <p className="text-xs text-gray-600 font-semibold mb-1 group-hover:text-green-700 transition">Email</p>
                <p className="text-sm font-bold text-gray-800 break-words contact-info">
                  {data.email || "Not provided"}
                </p>
              </div>

              {/* Phone */}
              <div className="detail-card bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition transform origin-left">📞</div>
                <p className="text-xs text-gray-600 font-semibold mb-1 group-hover:text-purple-700 transition">Phone</p>
                <p className="text-sm font-bold text-gray-800 contact-info">
                  {data.phone || "Not provided"}
                </p>
              </div>

              {/* Timing */}
              <div className="detail-card bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition transform origin-left">⏰</div>
                <p className="text-xs text-gray-600 font-semibold mb-1 group-hover:text-orange-700 transition">Timing</p>
                <p className="text-sm font-bold text-gray-800">9 AM - 11 PM</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-8 border-t border-gray-200 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-animated">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="feature-item bg-gradient-to-r from-green-100 to-transparent p-4 rounded-lg">
                  <span className="text-3xl block mb-2">✓</span>
                  <span className="text-gray-700 font-semibold">Fresh Ingredients</span>
                </div>
                <div className="feature-item bg-gradient-to-r from-blue-100 to-transparent p-4 rounded-lg">
                  <span className="text-3xl block mb-2">🚀</span>
                  <span className="text-gray-700 font-semibold">Fast Delivery</span>
                </div>
                <div className="feature-item bg-gradient-to-r from-yellow-100 to-transparent p-4 rounded-lg">
                  <span className="text-3xl block mb-2">💯</span>
                  <span className="text-gray-700 font-semibold">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="w-7xl p-6 rounded-2xl mx-auto mb-6 animate-fade-in-up">
        <div className="text-(--color-secondary) font-bold text-3xl text-center mb-8">
          🍽️ Our Menu
        </div>

        <div className="space-y-4">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                className="border border-gray-100 hover:shadow-xl p-5 rounded-xl menu-item-hover animate-fade-in-up bg-white"
                key={idx}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex gap-5">
                  <img
                    src={EachItem.images[0].url}
                    alt={EachItem.itemName}
                    className="w-44 h-44 object-cover rounded-lg image-hover flex-shrink-0"
                  />

                  <div className="flex justify-between w-full">
                    <div className="flex-1">
                      <h3 className="text-(--color-primary) text-xl font-bold mb-2">
                        {EachItem.itemName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {EachItem.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">🍽️ Cuisine:</span>{" "}
                          <span className="text-gray-600">{EachItem.cuisine}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Type:</span>{" "}
                          <span
                            className="capitalize px-3 py-1 rounded text-white text-xs font-bold"
                            style={{
                              backgroundColor:
                                EachItem.type === "veg" ? "#22c55e" : "#ef4444",
                            }}
                          >
                            {EachItem.type === "veg" ? "🥬 VEG" : "🍖 NON-VEG"}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold">👥 Serving:</span>{" "}
                          <span className="text-gray-600">{EachItem.servingSize}</span>
                        </div>
                        <div>
                          <span className="font-semibold">⏱️ Prep:</span>{" "}
                          <span className="text-gray-600">{EachItem.preparationTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between min-w-max ml-6">
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${
                            EachItem.availability === "available"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {EachItem.availability === "available"
                            ? "✓ Available"
                            : "❌ Not Available"}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black text-(--color-primary)">
                          ₹{EachItem.price}
                        </p>
                      </div>
                      <button
                        className="bg-(--color-primary) text-white px-6 py-2 rounded-lg hover:bg-(--color-primary-hover) transition disabled:bg-gray-300 transform hover:scale-105 active:scale-95 font-semibold text-sm btn-interactive cart-button"
                        onClick={() => handleAddToCart(EachItem)}
                        disabled={cartFlag.includes(EachItem._id)}
                      >
                        {cartFlag.includes(EachItem._id)
                          ? "✓ Added"
                          : "+ Add"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Checkout Bar */}
      {cart && (
        <div className="fixed w-full bottom-6 flex items-center justify-center z-50 px-3">
          <div className="bg-(--color-secondary) rounded-2xl py-4 px-8 shadow-2xl w-full max-w-2xl animate-scale-in">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold flex gap-4 items-center">
                <span className="text-2xl">🛒</span>
                <div>
                  <p className="text-xs opacity-90">Total Items</p>
                  <p className="text-xl">{cart.cartItem.length}</p>
                </div>
                <button
                  className="text-white px-3 py-2 rounded-lg hover:bg-white/20 transition transform hover:scale-110 active:scale-95 ml-2 btn-interactive"
                  onClick={handleClearCart}
                  title="Clear Cart"
                >
                  <FaRegTrashAlt className="text-lg" />
                </button>
              </div>

              <div className="h-12 w-px bg-white/30"></div>

              <div className="text-white font-bold flex gap-6 items-center">
                <div>
                  <p className="text-xs opacity-90">Total Amount</p>
                  <p className="text-2xl">₹{cart.cartValue}</p>
                </div>
                <button
                  className="bg-white text-(--color-primary) px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed →
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