// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const UserOverview = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalOrders: 24,
//     totalSpent: 4850,
//     savedAmount: 1250,
//     rewardPoints: 340,
//   });

//   const [recentOrders] = useState([
//     {
//       id: "ORD001",
//       restaurant: "Pizza Paradise",
//       items: "Margherita Pizza, Garlic Bread",
//       amount: 450,
//       status: "Delivered",
//       date: "2 hours ago",
//       rating: 4.5,
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
//     },
//     {
//       id: "ORD002",
//       restaurant: "Burger King",
//       items: "Whopper Meal, Fries",
//       amount: 320,
//       status: "Delivered",
//       date: "1 day ago",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
//     },
//     {
//       id: "ORD003",
//       restaurant: "Sushi House",
//       items: "California Roll, Miso Soup",
//       amount: 680,
//       status: "On the way",
//       date: "30 mins ago",
//       rating: 0,
//       image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
//     },
//   ]);

//   const [favoriteRestaurants] = useState([
//     {
//       name: "Italian Bistro",
//       cuisine: "Italian",
//       orders: 8,
//       rating: 4.5,
//       image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
//     },
//     {
//       name: "Spice Route",
//       cuisine: "Indian",
//       orders: 12,
//       rating: 4.8,
//       image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
//     },
//     {
//       name: "Sushi Paradise",
//       cuisine: "Japanese",
//       orders: 6,
//       rating: 4.6,
//       image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
//     },
//   ]);

//   return (
//     <>
//       {/* Animations CSS */}
//       <style jsx="true">{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         }

//         .animate-fade-in {
//           animation: fadeIn 0.6s ease-out forwards;
//         }

//         .animate-slide-left {
//           animation: slideInLeft 0.6s ease-out forwards;
//         }

//         .animate-slide-right {
//           animation: slideInRight 0.6s ease-out forwards;
//         }

//         .animate-scale-in {
//           animation: scaleIn 0.5s ease-out forwards;
//         }

//         .hover-lift:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }
//       `}</style>

//       <div className="p-6 space-y-6 bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen">
//         {/* Welcome Header */}
//         <div className="animate-fade-in">
//           <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
//             {/* Animated Background Pattern */}
//             <div className="absolute inset-0 opacity-20">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" style={{ animation: "bounce 3s ease-in-out infinite" }}></div>
//             </div>

//             <div className="relative z-10">
//               <div className="flex items-center justify-between flex-wrap gap-4">
//                 <div>
//                   <h1 className="text-4xl font-black mb-2">
//                     Welcome back, {user?.name || "Food Lover"}! 👋
//                   </h1>
//                   <p className="text-lg opacity-90">
//                     Ready to order some delicious food today?
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="bg-white/20 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/40">
//                     <p className="text-sm opacity-90">Reward Points</p>
//                     <p className="text-3xl font-black">🎁 {stats.rewardPoints}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Total Orders */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-semibold mb-1">
//                   Total Orders
//                 </p>
//                 <p className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//                   {stats.totalOrders}
//                 </p>
//                 <p className="text-xs text-green-600 font-semibold mt-2">
//                   ↗ 12% this month
//                 </p>
//               </div>
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl">🛒</span>
//               </div>
//             </div>
//           </div>

//           {/* Total Spent */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-semibold mb-1">
//                   Total Spent
//                 </p>
//                 <p className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   ₹{stats.totalSpent}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-2">Lifetime</p>
//               </div>
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl">💰</span>
//               </div>
//             </div>
//           </div>

//           {/* Saved Amount */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.3s" }}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-semibold mb-1">
//                   You Saved
//                 </p>
//                 <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   ₹{stats.savedAmount}
//                 </p>
//                 <p className="text-xs text-green-600 font-semibold mt-2">
//                   🎉 Great savings!
//                 </p>
//               </div>
//               <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl">💸</span>
//               </div>
//             </div>
//           </div>

//           {/* Reward Points */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.4s" }}>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-semibold mb-1">
//                   Reward Points
//                 </p>
//                 <p className="text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//                   {stats.rewardPoints}
//                 </p>
//                 <p className="text-xs text-purple-600 font-semibold mt-2">
//                   ≈ ₹{Math.floor(stats.rewardPoints / 10)}
//                 </p>
//               </div>
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-200 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl">⭐</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-2xl p-6 shadow-lg animate-slide-left">
//           <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//             <span>⚡</span>
//             Quick Actions
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <button
//               onClick={() => navigate("/order-now")}
//               className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               <span className="text-3xl block mb-2">🍔</span>
//               Order Food
//             </button>
//             <button
//               onClick={() => navigate("/user-dashboard?tab=orders")}
//               className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               <span className="text-3xl block mb-2">📦</span>
//               My Orders
//             </button>
//             <button
//               onClick={() => navigate("/user-dashboard?tab=profile")}
//               className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               <span className="text-3xl block mb-2">👤</span>
//               My Profile
//             </button>
//             <button
//               onClick={() => navigate("/user-dashboard?tab=transactions")}
//               className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               <span className="text-3xl block mb-2">💳</span>
//               Transactions
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Recent Orders */}
//           <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg animate-slide-left">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold flex items-center gap-2">
//                 <span>🕒</span>
//                 Recent Orders
//               </h2>
//               <button
//                 onClick={() => navigate("/user-dashboard?tab=orders")}
//                 className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
//               >
//                 View All →
//               </button>
//             </div>

//             <div className="space-y-4">
//               {recentOrders.map((order, index) => (
//                 <div
//                   key={order.id}
//                   className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-orange-300 group"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex gap-4">
//                     <img
//                       src={order.image}
//                       alt={order.restaurant}
//                       className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <h3 className="font-bold text-gray-800">
//                             {order.restaurant}
//                           </h3>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {order.items}
//                           </p>
//                           <p className="text-xs text-gray-400 mt-1">
//                             {order.date}
//                           </p>
//                         </div>
//                         <div className="text-right">
//                           <p className="font-bold text-orange-600">
//                             ₹{order.amount}
//                           </p>
//                           <span
//                             className={`text-xs px-2 py-1 rounded-full font-semibold ${
//                               order.status === "Delivered"
//                                 ? "bg-green-100 text-green-700"
//                                 : "bg-blue-100 text-blue-700"
//                             }`}
//                           >
//                             {order.status}
//                           </span>
//                         </div>
//                       </div>
//                       {order.rating > 0 && (
//                         <div className="flex items-center gap-1 mt-2">
//                           <span className="text-yellow-500">⭐</span>
//                           <span className="text-sm font-semibold">
//                             {order.rating}/5
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Favorite Restaurants */}
//           <div className="bg-white rounded-2xl p-6 shadow-lg animate-slide-right">
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//               <span>❤️</span>
//               Favorites
//             </h2>

//             <div className="space-y-4">
//               {favoriteRestaurants.map((restaurant, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-orange-300 cursor-pointer group"
//                 >
//                   <div className="flex gap-3 items-center">
//                     <img
//                       src={restaurant.image}
//                       alt={restaurant.name}
//                       className="w-14 h-14 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-gray-800 text-sm">
//                         {restaurant.name}
//                       </h3>
//                       <p className="text-xs text-gray-500">
//                         {restaurant.cuisine}
//                       </p>
//                       <div className="flex items-center gap-2 mt-1">
//                         <span className="text-yellow-500 text-xs">⭐</span>
//                         <span className="text-xs font-semibold">
//                           {restaurant.rating}
//                         </span>
//                         <span className="text-xs text-gray-400">
//                           • {restaurant.orders} orders
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//               Explore More
//             </button>
//           </div>
//         </div>

//         {/* Offers & Rewards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Active Offers */}
//           <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg animate-scale-in relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
//             <div className="relative z-10">
//               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <span>🎁</span>
//                 Active Offers
//               </h3>
//               <div className="space-y-3">
//                 <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
//                   <p className="font-bold">50% OFF on First Order</p>
//                   <p className="text-sm opacity-90">Use code: FIRST50</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
//                   <p className="font-bold">Free Delivery Above ₹500</p>
//                   <p className="text-sm opacity-90">No code needed</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Referral Program */}
//           <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg animate-scale-in relative overflow-hidden">
//             <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
//             <div className="relative z-10">
//               <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//                 <span>👥</span>
//                 Refer & Earn
//               </h3>
//               <p className="text-lg mb-4">
//                 Invite friends and get ₹100 for each referral!
//               </p>
//               <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
//                 <p className="text-sm opacity-90 mb-2">Your Referral Code</p>
//                 <div className="flex gap-2">
//                   <code className="flex-1 bg-white/30 px-4 py-2 rounded-lg font-mono font-bold">
//                     FOODIE{user?.name?.substring(0, 3).toUpperCase() || "123"}
//                   </code>
//                   <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
//                     Copy
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center">
//                 <span className="text-3xl">💬</span>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Need Help?
//                 </h3>
//                 <p className="text-gray-600">
//                   Our support team is here 24/7 for you
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => navigate("/user-dashboard?tab=helpdesk")}
//               className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//             >
//               Contact Support
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserOverview;


import React from 'react'

const userOverview = () => {
  return (
    <div>userOverview</div>
  )
}

export default userOverview