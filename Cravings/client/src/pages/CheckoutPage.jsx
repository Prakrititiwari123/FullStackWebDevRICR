import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { isLogin, role } = useAuth();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [paymentMode, setPaymentMode] = useState("cod");
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [tip, setTip] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate prices
  const subtotal = cart?.cartValue || 0;
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const gst = Math.floor(subtotal * 0.05); // 5% GST
  const platformFee = 5;
  const total = subtotal + deliveryFee + gst + platformFee - discount + tip;

  console.log("CheckoutPage", cart);

  // Update cart quantity
  const updateQuantity = (itemId, action) => {
    const updatedCart = { ...cart };
    const itemIndex = updatedCart.cartItem.findIndex(
      (item) => item._id === itemId
    );

    if (itemIndex !== -1) {
      if (action === "increase") {
        updatedCart.cartItem[itemIndex].quantity += 1;
        updatedCart.cartValue += updatedCart.cartItem[itemIndex].price;
      } else if (action === "decrease") {
        if (updatedCart.cartItem[itemIndex].quantity > 1) {
          updatedCart.cartItem[itemIndex].quantity -= 1;
          updatedCart.cartValue -= updatedCart.cartItem[itemIndex].price;
        }
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedCart = { ...cart };
    const itemIndex = updatedCart.cartItem.findIndex(
      (item) => item._id === itemId
    );

    if (itemIndex !== -1) {
      const itemPrice =
        updatedCart.cartItem[itemIndex].price *
        updatedCart.cartItem[itemIndex].quantity;
      updatedCart.cartValue -= itemPrice;
      updatedCart.cartItem.splice(itemIndex, 1);

      if (updatedCart.cartItem.length === 0) {
        localStorage.removeItem("cart");
        setCart(null);
        toast.success("Cart is now empty");
        navigate("/order-now");
        return;
      }

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item removed from cart");
    }
  };

  // Apply coupon
  const applyCoupon = () => {
    const validCoupons = {
      SAVE10: 10,
      SAVE50: 50,
      FIRST100: 100,
      WELCOME20: 20,
    };

    if (validCoupons[couponCode.toUpperCase()]) {
      setDiscount(validCoupons[couponCode.toUpperCase()]);
      toast.success(`Coupon applied! ₹${validCoupons[couponCode.toUpperCase()]} off`);
    } else {
      toast.error("Invalid coupon code");
    }
  };

  // Place order
  const handlePlaceOrder = async () => {
    if (!isLogin || role !== "customer") {
      toast.error("Please login as customer");
      navigate("/login");
      return;
    }

    if (!deliveryAddress.street || !deliveryAddress.city || !deliveryAddress.pincode || !deliveryAddress.phone) {
      toast.error("Please fill all delivery address fields");
      return;
    }

    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Order placed successfully! 🎉");
      localStorage.removeItem("cart");
      navigate("/user-dashboard");
    }, 2000);
  };

  useEffect(() => {
    if (!cart || cart.cartItem.length === 0) {
      toast.error("Your cart is empty");
      navigate("/order-now");
    }
  }, []);

  if (!cart) return null;

  return (
    <>
      {/* Animations CSS */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-pulse-hover:hover {
          animation: pulse 0.6s ease-in-out;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8">
        <div className="w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-4"
            >
              <span className="text-xl">←</span>
              <span className="font-semibold">Back</span>
            </button>
            <h1 className="text-4xl font-black bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Checkout
            </h1>
            <p className="text-gray-600 mt-2">
              Complete your order and get it delivered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🛒</span>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Your Items ({cart.cartItem.length})
                  </h2>
                </div>

                <div className="space-y-4">
                  {cart.cartItem.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-orange-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Item Image */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.images[0].url}
                          alt={item.itemName}
                          className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Type Badge */}
                        <div
                          className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                          style={{
                            backgroundColor:
                              item.type === "veg" ? "#22c55e" : "#ef4444",
                          }}
                        >
                          {item.type === "veg" ? "🥬" : "🍖"}
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800">
                          {item.itemName}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.cuisine}
                        </p>
                        <p className="text-orange-600 font-bold text-lg mt-2">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item._id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <span className="text-xl">🗑️</span>
                        </button>

                        <div className="flex items-center gap-3 bg-orange-50 rounded-lg px-3 py-2">
                          <button
                            onClick={() => updateQuantity(item._id, "decrease")}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold hover:bg-orange-100 transition-colors shadow-sm"
                          >
                            -
                          </button>
                          <span className="font-bold text-gray-800 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item._id, "increase")}
                            className="w-7 h-7 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:bg-orange-700 transition-colors shadow-sm"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-sm text-gray-600 font-semibold">
                          Total: ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Address Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">📍</span>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Delivery Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={deliveryAddress.street}
                    onChange={(e) =>
                      setDeliveryAddress({
                        ...deliveryAddress,
                        street: e.target.value,
                      })
                    }
                    className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={deliveryAddress.city}
                    onChange={(e) =>
                      setDeliveryAddress({
                        ...deliveryAddress,
                        city: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={deliveryAddress.state}
                    onChange={(e) =>
                      setDeliveryAddress({
                        ...deliveryAddress,
                        state: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={deliveryAddress.pincode}
                    onChange={(e) =>
                      setDeliveryAddress({
                        ...deliveryAddress,
                        pincode: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={deliveryAddress.phone}
                    onChange={(e) =>
                      setDeliveryAddress({
                        ...deliveryAddress,
                        phone: e.target.value,
                      })
                    }
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              {/* Payment Mode Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-slide-in">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💳</span>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Cash on Delivery */}
                  <div
                    onClick={() => setPaymentMode("cod")}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      paymentMode === "cod"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">💵</span>
                      <div>
                        <p className="font-bold text-gray-800">
                          Cash on Delivery
                        </p>
                        <p className="text-sm text-gray-500">Pay when delivered</p>
                      </div>
                    </div>
                  </div>

                  {/* Credit/Debit Card */}
                  <div
                    onClick={() => setPaymentMode("card")}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      paymentMode === "card"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">💳</span>
                      <div>
                        <p className="font-bold text-gray-800">
                          Credit/Debit Card
                        </p>
                        <p className="text-sm text-gray-500">Visa, Mastercard, etc.</p>
                      </div>
                    </div>
                  </div>

                  {/* UPI */}
                  <div
                    onClick={() => setPaymentMode("upi")}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      paymentMode === "upi"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📱</span>
                      <div>
                        <p className="font-bold text-gray-800">UPI</p>
                        <p className="text-sm text-gray-500">
                          GPay, PhonePe, Paytm
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div
                    onClick={() => setPaymentMode("wallet")}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      paymentMode === "wallet"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">👛</span>
                      <div>
                        <p className="font-bold text-gray-800">Wallet</p>
                        <p className="text-sm text-gray-500">
                          Paytm, PhonePe Wallet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Coupon Section */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🎟️</span>
                    <h3 className="text-xl font-bold">Apply Coupon</h3>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs mt-2 opacity-80">
                    Try: SAVE10, SAVE50, FIRST100, WELCOME20
                  </p>
                </div>

                {/* Tip Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">⭐</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      Tip Your Delivery Partner
                    </h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 10, 20, 30].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setTip(amount)}
                        className={`py-2 rounded-lg font-semibold transition-all ${
                          tip === amount
                            ? "bg-orange-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {amount === 0 ? "No" : `₹${amount}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bill Details */}
                <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">📋</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bill Details
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          `₹${deliveryFee}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>GST (5%)</span>
                      <span className="font-semibold">₹{gst}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Platform Fee</span>
                      <span className="font-semibold">₹{platformFee}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-semibold">-₹{discount}</span>
                      </div>
                    )}
                    {tip > 0 && (
                      <div className="flex justify-between text-gray-600">
                        <span>Tip</span>
                        <span className="font-semibold">₹{tip}</span>
                      </div>
                    )}

                    <div className="border-t-2 border-dashed pt-3">
                      <div className="flex justify-between text-xl font-bold text-gray-800">
                        <span>Total</span>
                        <span className="text-orange-600">₹{total}</span>
                      </div>
                    </div>

                    {deliveryFee > 0 && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-800">
                          💡 Add items worth ₹{500 - subtotal} more to get FREE
                          delivery
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white animate-pulse-hover"
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>🚀</span>
                      Place Order - ₹{total}
                    </span>
                  )}
                </button>

                {/* Payment Mode Display */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200">
                  <p className="text-sm text-gray-600 text-center">
                    Payment via:{" "}
                    <span className="font-bold text-green-700">
                      {paymentMode === "cod" && "Cash on Delivery"}
                      {paymentMode === "card" && "Credit/Debit Card"}
                      {paymentMode === "upi" && "UPI"}
                      {paymentMode === "wallet" && "Wallet"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;




