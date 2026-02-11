// import React, { useEffect, useState } from "react";
// import api from "../config/Api";

// const OrderNow = () => {
//   const [restaurants, setRestaurants] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchAllRestaurant = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/public/allRestaurants");
//       setRestaurants(res.data.data);
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllRestaurant();
//   }, []);

//   console.log(restaurants);

//   return (
//     <>
//       <div className="bg-gray-100 p-3">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-3xl font-bold text-gray-800">Order Now</h1>
//           <p className="text-gray-600 mt-2">
//             Browse our menu and place your order now!
//           </p>
//         </div>

//         {restaurants ? (
//           <div>
//             {restaurants.map((restaurant, idx) => (
//               <div key={idx} className="border">
//                 {restaurant.restaurantName}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderNow;


import React, { useEffect, useState } from "react";
import { 
  FaSearch, 
  FaShoppingCart, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar,
  FaMinus,
  FaPlus,
  FaTrash,
  FaMapMarkerAlt,
  FaClock,
  FaUtensils,
  FaMotorcycle,
  FaPercent,
  FaTag,
  FaCreditCard,
  FaRupeeSign,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../config/Api";

const OrderNow = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showMenuModal, setShowMenuModal] = useState(false);
  
  // Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("craving_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("ASAP");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Categories
  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    { id: "Italian", name: "Italian", icon: "🍕" },
    { id: "American", name: "American", icon: "🍔" },
    { id: "Japanese", name: "Japanese", icon: "🍱" },
    { id: "Indian", name: "Indian", icon: "🍛" },
    { id: "Chinese", name: "Chinese", icon: "🥡" },
    { id: "Mexican", name: "Mexican", icon: "🌮" },
    { id: "Desserts", name: "Desserts", icon: "🍰" },
  ];

  // Fetch All Restaurants
  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      const restaurantData = res.data.data;
      
      // Add mock menu items if not present in API
      const enhancedData = restaurantData.map(restaurant => ({
        ...restaurant,
        menu: restaurant.menu || generateMockMenu(restaurant.cuisine || "Multi-cuisine"),
        rating: restaurant.rating || (Math.random() * 2 + 3).toFixed(1),
        deliveryTime: restaurant.deliveryTime || `${Math.floor(Math.random() * 20 + 25)}-${Math.floor(Math.random() * 15 + 40)}`,
        deliveryFee: restaurant.deliveryFee || Math.floor(Math.random() * 30 + 30),
        minOrder: restaurant.minOrder || Math.floor(Math.random() * 100 + 149)
      }));
      
      setRestaurants(enhancedData);
      setFilteredRestaurants(enhancedData);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to load restaurants");
    } finally {
      setLoading(false);
    }
  };

  // Generate mock menu items (temporary until API provides menu)
  const generateMockMenu = (cuisine) => {
    const menuTemplates = {
      Italian: [
        { id: 101, name: "Margherita Pizza", description: "Classic cheese pizza with basil", price: 299, veg: true, popular: true },
        { id: 102, name: "Pepperoni Pizza", description: "Spicy pepperoni with mozzarella", price: 399, veg: false, popular: true },
        { id: 103, name: "Pasta Alfredo", description: "Creamy white sauce pasta", price: 249, veg: true },
        { id: 104, name: "Garlic Bread", description: "Crispy bread with garlic butter", price: 149, veg: true },
        { id: 105, name: "Lasagna", description: "Layered pasta with meat sauce", price: 349, veg: false },
      ],
      American: [
        { id: 201, name: "Classic Burger", description: "Beef patty with lettuce and tomato", price: 199, veg: false, popular: true },
        { id: 202, name: "Veggie Burger", description: "Plant-based patty with veggies", price: 179, veg: true, popular: true },
        { id: 203, name: "French Fries", description: "Crispy golden fries", price: 99, veg: true },
        { id: 204, name: "Chicken Wings", description: "Spicy buffalo wings (6 pcs)", price: 249, veg: false },
        { id: 205, name: "Grilled Sandwich", description: "Grilled cheese and vegetables", price: 159, veg: true },
      ],
      Japanese: [
        { id: 301, name: "California Roll", description: "Crab, avocado, cucumber", price: 349, veg: false, popular: true },
        { id: 302, name: "Vegetable Roll", description: "Fresh cucumber and avocado", price: 249, veg: true },
        { id: 303, name: "Miso Soup", description: "Traditional Japanese soup", price: 99, veg: true },
        { id: 304, name: "Sashimi Platter", description: "Fresh raw fish slices", price: 499, veg: false },
        { id: 305, name: "Udon Noodles", description: "Thick wheat noodles in broth", price: 299, veg: true },
      ],
      Indian: [
        { id: 401, name: "Butter Chicken", description: "Creamy tomato curry", price: 349, veg: false, popular: true },
        { id: 402, name: "Paneer Tikka", description: "Grilled cottage cheese", price: 279, veg: true, popular: true },
        { id: 403, name: "Garlic Naan", description: "Indian bread with garlic", price: 49, veg: true },
        { id: 404, name: "Veg Biryani", description: "Fragrant rice with vegetables", price: 249, veg: true },
        { id: 405, name: "Chicken Tikka", description: "Spicy grilled chicken", price: 299, veg: false },
      ],
      Chinese: [
        { id: 501, name: "Veg Manchurian", description: "Fried vegetable balls in sauce", price: 229, veg: true, popular: true },
        { id: 502, name: "Chicken Fried Rice", description: "Wok-tossed rice with chicken", price: 249, veg: false },
        { id: 503, name: "Hakka Noodles", description: "Stir-fried noodles with veggies", price: 199, veg: true },
        { id: 504, name: "Spring Rolls", description: "Crispy vegetable rolls", price: 149, veg: true },
        { id: 505, name: "Schezwan Chicken", description: "Spicy chicken in schezwan sauce", price: 299, veg: false },
      ],
      Mexican: [
        { id: 601, name: "Tacos", description: "Soft corn tortillas with fillings", price: 199, veg: true, popular: true },
        { id: 602, name: "Burrito", description: "Large flour tortilla with rice and beans", price: 299, veg: false },
        { id: 603, name: "Nachos", description: "Tortilla chips with cheese and salsa", price: 179, veg: true },
        { id: 604, name: "Quesadilla", description: "Grilled tortilla with cheese", price: 229, veg: true },
      ],
      Desserts: [
        { id: 701, name: "Chocolate Cake", description: "Rich moist chocolate cake", price: 199, veg: true, popular: true },
        { id: 702, name: "Ice Cream", description: "Vanilla chocolate swirl", price: 99, veg: true },
        { id: 703, name: "Brownie", description: "Chocolate brownie with nuts", price: 129, veg: true },
        { id: 704, name: "Cheesecake", description: "New York style cheesecake", price: 179, veg: true },
      ],
    };

    return menuTemplates[cuisine] || menuTemplates["Italian"];
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("craving_cart", JSON.stringify(cart));
  }, [cart]);

  // Filter restaurants based on search and category
  useEffect(() => {
    let filtered = restaurants;
    
    if (searchQuery) {
      filtered = filtered.filter(restaurant => 
        restaurant.restaurantName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.address?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(restaurant => 
        restaurant.cuisine?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    setFilteredRestaurants(filtered);
  }, [searchQuery, selectedCategory, restaurants]);

  // Cart Functions
  const addToCart = (item, restaurant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id && i.restaurantId === restaurant._id);
      if (existingItem) {
        toast.success(`Added another ${item.name} to cart!`);
        return prevCart.map(i => 
          i.id === item.id && i.restaurantId === restaurant._id 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      } else {
        toast.success(`${item.name} added to cart!`);
        return [...prevCart, { 
          ...item, 
          quantity: 1, 
          restaurantId: restaurant._id, 
          restaurantName: restaurant.restaurantName 
        }];
      }
    });
  };

  const updateQuantity = (itemId, restaurantId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, restaurantId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.restaurantId === restaurantId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const removeFromCart = (itemId, restaurantId) => {
    setCart(prevCart => prevCart.filter(item => 
      !(item.id === itemId && item.restaurantId === restaurantId)
    ));
    toast.success("Item removed from cart!");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared!");
  };

  // Cart Calculations
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDeliveryFee = () => {
    if (cart.length === 0) return 0;
    const restaurantId = cart[0]?.restaurantId;
    const restaurant = restaurants.find(r => r._id === restaurantId);
    return restaurant?.deliveryFee || 40;
  };

  const getTax = () => {
    return Math.round(getCartTotal() * 0.05);
  };

  const getDiscount = () => {
    return promoApplied ? Math.round(getCartTotal() * 0.1) : 0;
  };

  const getTotal = () => {
    return getCartTotal() + getDeliveryFee() + getTax() - getDiscount();
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "CRAVING10") {
      setPromoApplied(true);
      toast.success("Promo code applied! 10% discount");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!deliveryAddress) {
      toast.error("Please enter delivery address!");
      return;
    }

    const orderData = {
      restaurantId: cart[0].restaurantId,
      items: cart.map(item => ({
        itemId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: getTotal(),
      deliveryAddress,
      deliveryTime,
      paymentMethod: "Online",
      orderType: "delivery"
    };

    try {
      setLoading(true);
      const res = await api.post("/public/place-order", orderData);
      toast.success("Order placed successfully!");
      clearCart();
      setShowCart(false);
      // Redirect to order tracking page
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    const stars = [];
    const numRating = parseFloat(rating) || 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(numRating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(numRating) && !Number.isInteger(numRating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  const openRestaurantMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowMenuModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <FaUtensils className="text-3xl" />
              <h1 className="text-2xl md:text-3xl font-bold">Craving</h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search restaurants or cuisines..."
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Cart Button */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <FaShoppingCart />
              <span className="hidden md:inline">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Restaurant Listing Section */}
          <div className="lg:w-2/3">
            {/* Delivery Address Bar */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="font-semibold">Deliver to:</span>
              </div>
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <FaClock className="text-orange-500" />
                <select
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                >
                  <option value="ASAP">ASAP</option>
                  <option value="30">In 30 min</option>
                  <option value="45">In 45 min</option>
                  <option value="60">In 1 hour</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex gap-3 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition ${
                      selectedCategory === category.id
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Restaurant Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {filteredRestaurants.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow-md">
                    <div className="text-6xl mb-4">🍽️</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredRestaurants.map((restaurant) => (
                      <div 
                        key={restaurant._id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                        onClick={() => openRestaurantMenu(restaurant)}
                      >
                        <div className="relative h-48">
                          <img
                            src={restaurant.image || `https://source.unsplash.com/400x300/?restaurant,food&${restaurant._id}`}
                            alt={restaurant.restaurantName}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500";
                            }}
                          />
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                            <span className="text-yellow-500 mr-1">★</span>
                            {restaurant.rating || "4.2"}
                          </div>
                          {restaurant.veg && (
                            <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                              Pure Veg
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-bold mb-1">{restaurant.restaurantName}</h3>
                          <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine || "Multi-cuisine"}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <FaClock className="text-orange-500" />
                              {restaurant.deliveryTime} min
                            </span>
                            <span>•</span>
                            <span>₹{restaurant.deliveryFee} delivery</span>
                            <span>•</span>
                            <span>Min ₹{restaurant.minOrder}</span>
                          </div>
                          
                          {/* Preview Menu Items */}
                          <div className="border-t pt-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">Popular Items</h4>
                              <span className="text-orange-500 text-sm font-medium">View Menu →</span>
                            </div>
                            <div className="space-y-2">
                              {restaurant.menu?.slice(0, 2).map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                  <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">₹{item.price}</p>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      addToCart(item, restaurant);
                                    }}
                                    className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition"
                                  >
                                    Add
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Cart Sidebar - Desktop */}
          <div className={`lg:w-1/3 ${!showCart && 'lg:block hidden'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FaShoppingCart className="text-orange-500" />
                  Your Cart
                </h2>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1"
                  >
                    <FaTrash /> Clear
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-6xl mb-4">🛒</div>
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-sm text-gray-400 mt-2">Add items from restaurants to get started</p>
                </div>
              ) : (
                <>
                  {/* Restaurant Info */}
                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-gray-500">Order from</p>
                    <p className="font-bold text-lg">{cart[0]?.restaurantName}</p>
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.restaurantId}`} className="flex gap-3 border-b pb-3">
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-semibold">{item.name}</h4>
                            <button
                              onClick={() => removeFromCart(item.id, item.restaurantId)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">₹{item.price}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-gray-100 rounded-l-lg"
                              >
                                <FaMinus size={12} />
                              </button>
                              <span className="px-2 py-1 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-gray-100 rounded-r-lg"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                            <span className="font-bold">₹{item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <button
                        onClick={handleApplyPromo}
                        disabled={promoApplied}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition disabled:bg-gray-400"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-green-600 text-sm mt-2">
                        ✓ CRAVING10 applied (10% off)
                      </p>
                    )}
                  </div>

                  {/* Bill Summary */}
                  <div className="border-t pt-4">
                    <h3 className="font-bold mb-3">Bill Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>₹{getCartTotal()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>₹{getDeliveryFee()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (5%)</span>
                        <span>₹{getTax()}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount (10%)</span>
                          <span>-₹{getDiscount()}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span>₹{getTotal()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition shadow-lg disabled:from-gray-400 disabled:to-gray-500"
                  >
                    {loading ? "Placing Order..." : "Place Order"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Menu Modal */}
      {showMenuModal && selectedRestaurant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedRestaurant.image || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500"} 
                  alt={selectedRestaurant.restaurantName}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold">{selectedRestaurant.restaurantName}</h2>
                  <p className="text-gray-600">{selectedRestaurant.cuisine || "Multi-cuisine"}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={selectedRestaurant.rating || 4.2} />
                    <span className="text-sm text-gray-500">({selectedRestaurant.rating || 4.2})</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowMenuModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Menu</h3>
              <div className="space-y-6">
                {selectedRestaurant.menu?.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        {item.popular && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                            Popular
                          </span>
                        )}
                        {item.veg ? (
                          <span className="text-green-600 text-xs border border-green-600 px-1 rounded">🟢 Veg</span>
                        ) : (
                          <span className="text-red-600 text-xs border border-red-600 px-1 rounded">🔴 Non-veg</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      <p className="font-bold mt-2">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(item, selectedRestaurant);
                      }}
                      className="ml-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Cart Button */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <button
          onClick={() => setShowCart(!showCart)}
          className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2"
        >
          <FaShoppingCart />
          View Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
          <span className="ml-2">• ₹{getTotal()}</span>
        </button>
      </div>

      {/* Mobile Cart Modal */}
      {showCart && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full h-3/4 rounded-t-3xl overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.restaurantId}`} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.restaurantId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.restaurantId)}
                          className="text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{getTotal()}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg"
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderNow;