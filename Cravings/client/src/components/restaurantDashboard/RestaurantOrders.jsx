// import React from "react";

// const RestaurantOrders = () => {
//   return (
//     <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto">
//       <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Orders</h2>
//         <div className="text-center text-gray-500 py-12">
//           <p className="text-lg">Orders will be displayed and managed here</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantOrders;

import React, { useState, useEffect } from "react";
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
  FaRupeeSign
} from "react-icons/fa";
import toast from "react-hot-toast";

export const RestaurantOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("ASAP");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Mock Data - Replace with API calls
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRestaurants(mockRestaurants);
      setLoading(false);
    }, 1000);
  }, []);

  // Mock Restaurant Data
  const mockRestaurants = [
    {
      id: 1,
      name: "Pizza Paradise",
      cuisine: "Italian • Pizza • Pasta",
      rating: 4.5,
      deliveryTime: "25-35",
      deliveryFee: 40,
      minOrder: 199,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
      menu: [
        { id: 101, name: "Margherita Pizza", description: "Classic cheese pizza", price: 299, category: "pizza", veg: true, popular: true },
        { id: 102, name: "Pepperoni Pizza", description: "Spicy pepperoni with cheese", price: 399, category: "pizza", veg: false, popular: true },
        { id: 103, name: "Garlic Bread", description: "Crispy garlic bread with cheese", price: 149, category: "sides", veg: true },
        { id: 104, name: "Pasta Alfredo", description: "Creamy white sauce pasta", price: 249, category: "pasta", veg: true },
      ]
    },
    {
      id: 2,
      name: "Burger House",
      cuisine: "American • Burgers • Fast Food",
      rating: 4.3,
      deliveryTime: "20-30",
      deliveryFee: 35,
      minOrder: 149,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
      menu: [
        { id: 201, name: "Classic Burger", description: "Beef patty with lettuce and tomato", price: 199, category: "burgers", veg: false, popular: true },
        { id: 202, name: "Veggie Burger", description: "Plant-based patty with fresh veggies", price: 179, category: "burgers", veg: true },
        { id: 203, name: "French Fries", description: "Crispy golden fries", price: 99, category: "sides", veg: true },
        { id: 204, name: "Chicken Nuggets", description: "Crispy chicken nuggets (6 pcs)", price: 149, category: "sides", veg: false },
      ]
    },
    {
      id: 3,
      name: "Sushi Master",
      cuisine: "Japanese • Sushi • Asian",
      rating: 4.7,
      deliveryTime: "30-45",
      deliveryFee: 50,
      minOrder: 299,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
      menu: [
        { id: 301, name: "California Roll", description: "Crab, avocado, cucumber", price: 349, category: "sushi", veg: false, popular: true },
        { id: 302, name: "Vegetable Roll", description: "Fresh cucumber and avocado", price: 249, category: "sushi", veg: true },
        { id: 303, name: "Miso Soup", description: "Traditional Japanese soup", price: 99, category: "sides", veg: true },
      ]
    },
    {
      id: 4,
      name: "Curry Palace",
      cuisine: "Indian • Curry • Biryani",
      rating: 4.6,
      deliveryTime: "30-40",
      deliveryFee: 45,
      minOrder: 249,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      menu: [
        { id: 401, name: "Butter Chicken", description: "Creamy tomato curry", price: 349, category: "curry", veg: false, popular: true },
        { id: 402, name: "Paneer Tikka", description: "Grilled cottage cheese", price: 279, category: "starter", veg: true },
        { id: 403, name: "Garlic Naan", description: "Indian bread with garlic", price: 49, category: "bread", veg: true },
        { id: 404, name: "Veg Biryani", description: "Fragrant rice with vegetables", price: 249, category: "biryani", veg: true },
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Restaurants", icon: "🍽️" },
    { id: "pizza", name: "Pizza", icon: "🍕" },
    { id: "burgers", name: "Burgers", icon: "🍔" },
    { id: "sushi", name: "Sushi", icon: "🍱" },
    { id: "indian", name: "Indian", icon: "🍛" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
  ];

  // Cart Functions
  const addToCart = (item, restaurant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);
      if (existingItem) {
        return prevCart.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        toast.success(`${item.name} added to cart!`);
        return [...prevCart, { ...item, quantity: 1, restaurantId: restaurant.id, restaurantName: restaurant.name }];
      }
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
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
    // Get restaurant from first item (simplified - in real app, handle multiple restaurants)
    const restaurantId = cart[0]?.restaurantId;
    const restaurant = restaurants.find(r => r.id === restaurantId);
    return restaurant?.deliveryFee || 40;
  };

  const getTax = () => {
    return Math.round(getCartTotal() * 0.05); // 5% tax
  };

  const getDiscount = () => {
    return promoApplied ? Math.round(getCartTotal() * 0.1) : 0; // 10% discount
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

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!deliveryAddress) {
      toast.error("Please enter delivery address!");
      return;
    }
    
    toast.success("Order placed successfully!");
    // Clear cart and show order confirmation
    clearCart();
    // Navigate to order tracking page
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  // Filter restaurants based on search and category
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           restaurant.cuisine.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <FaUtensils className="text-3xl" />
              <h1 className="text-3xl font-bold">Craving</h1>
            </div>
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <FaShoppingCart />
              Cart
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
          {/* Restaurant Listing */}
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
                  <option value="90">In 1.5 hours</option>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                    <div className="relative h-48">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                        <span className="text-yellow-500 mr-1">★</span>
                        {restaurant.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
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
                      
                      {/* Menu Items */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Popular Items</h4>
                        <div className="space-y-3">
                          {restaurant.menu.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">₹{item.price}</p>
                              </div>
                              <button
                                onClick={() => addToCart(item, restaurant)}
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
          </div>

          {/* Cart Sidebar */}
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
                  <p className="text-sm text-gray-400 mt-2">Add items to get started</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 border-b pb-3">
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-semibold">{item.name}</h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">{item.restaurantName}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-gray-100 rounded-l-lg"
                              >
                                <FaMinus size={12} />
                              </button>
                              <span className="px-2 py-1 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition shadow-lg"
                  >
                    Place Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cart Button */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
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
                ✕
              </button>
            </div>
            {/* Cart content (same as above) */}
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-500">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg"
                >
                  Place Order • ₹{getTotal()}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantOrders;