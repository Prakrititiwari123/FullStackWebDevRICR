import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const data = useLocation().state;
  console.log("Resturant Menu Page", data);

  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState();

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
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]"></div>
          </div>

          {/* Hero Image Section */}
          <div className="relative h-[500px] overflow-hidden group">
            {/* Image with enhanced effects */}
            <img
              src={data.photo.url}
              alt={data.restaurantName}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
            />
            
            {/* Multi-layered Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 via-purple-500 to-pink-500 animate-[shimmer_3s_linear_infinite]"></div>
            
            {/* Enhanced Floating Offers */}
            <div className="absolute top-6 right-6 space-y-4 animate-[slideInRight_1s_ease-out]">
              {/* Mega Offer */}
              <div className="relative group/offer">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-red-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-2 transition-all duration-300 border border-white/20">
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:-rotate-2 transition-all duration-300 border border-white/20">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover/offer:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-2 transition-all duration-300 border border-white/20">
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
                <div className="absolute inset-0 bg-green-400 rounded-2xl blur opacity-75 group-hover/rating:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform">
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
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-transparent rounded-full"></div>
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
                      <span className="text-xl">💰</span>
                      ₹400 for two
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
          <div className="relative bg-gradient-to-r from-orange-50 via-white to-red-50 px-8 py-5">
            <div className="flex items-center justify-between flex-wrap gap-6">
              {/* Features */}
              <div className="flex items-center gap-8">
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">₹₹</div>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Affordable</p>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <p className="text-3xl">🥗</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Veg/Non-veg</p>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl font-black text-green-600">✓</div>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Verified</p>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <p className="text-3xl">🛡️</p>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Sanitized</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="relative px-8 py-3 border-2 border-(--color-primary) text-(--color-primary) rounded-xl font-bold hover:bg-(--color-primary) hover:text-white transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group">
                  <span className="relative z-10">View Info</span>
                  <div className="absolute inset-0 bg-(--color-primary) transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button className="relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    🛒 Order Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
      `}</style>
         





    {/* Premium Menu Section */}
      <div className="w-7xl mx-auto px-3 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Our Delicious Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-3 rounded-full"></div>
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex gap-6 relative z-10">
                  {/* Enhanced Image */}
                  <div className="relative flex-shrink-0">
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
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-lg animate-pulse">
                        ⭐ BESTSELLER
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex justify-between">
                    <div className="flex-1">
                      {/* Item Name */}
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-purple-600 transition-all duration-300">
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
                        <p className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ₹{EachItem.price}
                        </p>
                        <p className="text-xs text-green-600 font-semibold mt-1">Save ₹{Math.floor(EachItem.price * 0.3)}</p>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="space-y-3">
                        {EachItem.availability === "available" ? (
                          <button className="relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group/btn">
                            <span className="relative z-10 flex items-center gap-2">
                              <span className="text-lg">🛒</span>
                              Add to Cart
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                          </button>
                        ) : (
                          <button disabled className="px-8 py-3 bg-gray-300 text-gray-500 rounded-xl font-bold cursor-not-allowed">
                            Out of Stock
                          </button>
                        )}
                        
                        {/* Quick View Button */}
                        <button className="w-full px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
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
    </>
  );
};

export default RestaurantDisplayMenu;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import api from "../config/Api";
// import toast from "react-hot-toast";

// const RestaurantDisplayMenu = () => {
//   const data = useLocation().state;
//   console.log("Resturant Menu Page", data);

//   const [loading, setLoading] = useState(false);
//   const [menuItems, setMenuItems] = useState();

//   const fetchMenuItems = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get(`/public/restaurant/menu/${data._id}`);
//       setMenuItems(res.data.data);
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, [data]);

//   return (
//     <>
//       <div className="w-7xl p-3 rounded shadow mx-auto mt-2 ">
//         <img
//           src={data.photo.url}
//           alt=""
//           className="w-48 h-48 object-cover rounded"
//         />
//         {/* restaurant description */}
//         <div>
//           <div className="text-(--color-primary) font-bold text-3xl mt-2">
//             {data.restaurantName}
//           </div>
//           <div className="text-sm text-gray-600 mt-1">{data.description}</div>
//         </div>
//       </div>
         




//       <div className="w-7xl p-3 rounded shadow mx-auto mt-2 ">
//         <div className="text-(--color-secondary) font-bold text-2xl text-center">
//           Menu
//         </div>

//         <div className="space-y-3">
//           {menuItems &&
//             menuItems.map((EachItem, idx) => (
//               <div
//                 className="border border-gray-100 hover:shadow-lg  p-4 rounded"
//                 key={idx}
//               >
//                 <div className="flex gap-4">
//                   <img
//                     src={EachItem.images[0].url}
//                     alt=""
//                     className="w-40 h-40 object-cover rounded "
//                   />

//                   <div className="flex justify-between border-red-500 w-full">
//                     <div>
//                       <div className="text-(--color-primary) text-lg font-bold">
//                         {EachItem.itemName}
//                       </div>
//                       <div className="text-sm text-gray-600 mt-1">
//                         {EachItem.description}
//                       </div>
//                       <div className="mt-3 space-y-1 text-sm">
//                         <div>
//                           <span className="font-semibold">Cuisine:</span>{" "}
//                           {EachItem.cuisine}
//                         </div>
//                         <div>
//                           <span className="font-semibold">Type:</span>{" "}
//                           <span
//                             className="capitalize px-2 py-1 rounded text-white"
//                             style={{
//                               backgroundColor:
//                                 EachItem.type === "veg" ? "#22c55e" : "#ef4444",
//                             }}
//                           >
//                             {EachItem.type}
//                           </span>
//                         </div>
//                         <div>
//                           <span className="font-semibold">Serving Size:</span>{" "}
//                           {EachItem.servingSize}
//                         </div>
//                         <div>
//                           <span className="font-semibold">
//                             Preparation Time:
//                           </span>{" "}
//                           {EachItem.preparationTime}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-5">
//                       <div>
//                         <span className="font-semibold">Availability:</span>{" "}
//                         <span
//                           className={`capitalize px-2 py-1 rounded ${EachItem.availability === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
//                         >
//                           {EachItem.availability}
//                         </span>
//                       </div>
//                       <div className="text-(--color-primary) text-2xl font-bold">
//                         ₹{EachItem.price}
//                       </div>
//                       <button className="bg-(--color-primary) text-white px-6 py-2 rounded hover:bg-(--color-primary-hover) transition">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RestaurantDisplayMenu;