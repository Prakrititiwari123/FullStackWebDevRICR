import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState();

  const fetctAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetctAllRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantinfo) => {
    console.log("Restaurant Clicked");
    navigate("/restaurantMenu", { state: restaurantinfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh]">
        <Loading />
      </div>
    );
  }
  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 py-12 px-4 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header */}
          <div className="text-center mb-12 animate-[fadeInDown_1s_ease-out]">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-60"></div>
                <div className="relative bg-white px-6 py-2 rounded-full border-2 border-orange-200 shadow-lg">
                  <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    🍽️ Discover Amazing Restaurants
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Order Now
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 opacity-20 blur-sm"></div>
            </h1>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-full animate-pulse"></div>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            </div>

            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of the finest restaurants in your area
            </p>
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {restaurant &&
              restaurant.map((EachRestaurant, idx) => (
                <div
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 border-2 border-gray-100 hover:border-orange-300 animate-[fadeInUp_0.6s_ease-out]"
                  key={idx}
                  onClick={() => handleRestaurantClick(EachRestaurant)}
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
                  </div>

                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={EachRestaurant.photo.url}
                      alt={EachRestaurant.restaurantName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      <span className="text-yellow-300">★</span>
                      <span>4.5</span> 
                    </div>

                    {/* Quick Badge */}
                    <div className="absolute top-3 left-6 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      🚀 Fast Delivery
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-5 space-y-3">
                    {/* Restaurant Name */}
                    <h3 className="text-2xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                      {EachRestaurant.restaurantName}
                    </h3>

                    {/* Cuisine Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 rounded-full">
                      <span className="text-orange-600 text-sm">🍽️</span>
                      <span className="text-sm font-bold text-orange-700">{EachRestaurant.cuisine}</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-gray-600">
                        <span className="text-purple-500 mt-0.5">📍</span>
                        <span className="font-medium">{EachRestaurant.address}, {EachRestaurant.city}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-blue-500">📮</span>
                          <span className="font-medium text-xs">{EachRestaurant.pin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-green-500">📞</span>
                          <span className="font-medium text-xs">{EachRestaurant.mobileNumber}</span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    {/* Explore Button */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-bold shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                        <span className="text-sm">Explore Menu</span>
                        <FaArrowRight className="text-lg transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx='true'>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default OrderNow;