import React from "react";
import { useCart } from "../../context/CartContext";
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, tax, deliveryFee, total, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-[#1a0e07] to-[#2D1B0E] flex items-center justify-center">
          <div className="text-center py-20 px-4">
            <div className="mb-8">
              <div className="text-8xl mb-4 text-amber-500 opacity-50">🛒</div>
              <h1 className="text-4xl md:text-5xl font-serif text-amber-100 mb-4">Your cart is empty</h1>
              <p className="text-amber-200 text-lg mb-8 max-w-md mx-auto">
                Looks like you haven't added any delicious meals yet. Let's fix that!
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50"
            >
              <span>Explore Menu</span>
              <FiArrowLeft className="rotate-180" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#1a0e07] to-[#2D1B0E] pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
              <h1 className="text-4xl md:text-5xl font-serif text-amber-100">Your Order</h1>
            </div>
            <p className="text-amber-200 ml-4">Review and manage your meal selections</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-amber-950/40 border border-amber-900/50 rounded-xl p-4 md:p-6 hover:border-amber-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/30 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Item Image */}
                      <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-amber-900/40 rounded-lg overflow-hidden border border-amber-800/50">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-amber-500/50 text-2xl">
                            🍽️
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold text-amber-100 mb-1 truncate">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-amber-200/60 text-sm mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="text-lg md:text-xl font-semibold text-amber-400">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-amber-200/70">
                            ₹{item.price} each
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 bg-amber-900/40 hover:bg-amber-800/60 text-amber-300 rounded-lg transition-all duration-200 border border-amber-800/50 hover:border-amber-700"
                        >
                          <FiMinus size={18} />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value) || 1)
                          }
                          className="w-16 px-2 py-2 bg-amber-950/60 border border-amber-800/50 rounded-lg text-center text-amber-100 font-semibold focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 bg-amber-900/40 hover:bg-amber-800/60 text-amber-300 rounded-lg transition-all duration-200 border border-amber-800/50 hover:border-amber-700"
                        >
                          <FiPlus size={18} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-3 bg-red-900/40 hover:bg-red-800/60 text-red-400 rounded-lg transition-all duration-200 border border-red-800/50 hover:border-red-700 md:ml-2"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <Link
                to="/menu"
                className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-amber-900/40 hover:bg-amber-900/60 border border-amber-700/50 hover:border-amber-600 text-amber-300 font-semibold rounded-lg transition-all duration-300"
              >
                <FiArrowLeft />
                <span>Continue Shopping</span>
              </Link>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-amber-950/60 border border-amber-800/50 rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-serif text-amber-100 mb-6 pb-4 border-b border-amber-800/50">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200">Subtotal</span>
                    <span className="text-amber-100 font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>

                  {/* Tax */}
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200">Tax (10%)</span>
                    <span className="text-amber-100 font-semibold">₹{tax.toFixed(2)}</span>
                  </div>

                  {/* Delivery Fee */}
                  <div className="flex justify-between items-center">
                    <span className="text-amber-200">Delivery Fee</span>
                    <span className="text-amber-100 font-semibold">₹{deliveryFee.toFixed(2)}</span>
                  </div>

                  {/* Discount Badge (optional) */}
                  {subtotal > 500 && (
                    <div className="flex justify-between items-center p-3 bg-green-900/30 border border-green-800/50 rounded-lg">
                      <span className="text-green-300 text-sm font-semibold">🎉 Discount Applied</span>
                      <span className="text-green-400 font-semibold">-₹50</span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-amber-800/50 my-6"></div>

                {/* Total */}
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-xl font-serif text-amber-200">Total Amount</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    ₹{total.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button className="w-full py-4 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 flex items-center justify-center space-x-2 mb-3 group">
                  <FiCheck size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Proceed to Checkout</span>
                </button>

                {/* Clear Cart Button */}
                <button
                  onClick={clearCart}
                  className="w-full py-2 px-4 bg-red-900/30 hover:bg-red-900/50 text-red-400 font-semibold rounded-lg transition-all duration-300 border border-red-800/50 hover:border-red-700"
                >
                  Clear Cart
                </button>

                {/* Info Box */}
                <div className="mt-6 p-4 bg-amber-900/40 border border-amber-800/50 rounded-lg">
                  <p className="text-amber-200/70 text-sm leading-relaxed">
                    ✓ Free delivery on orders above ₹500<br/>
                    ✓ Live order tracking<br/>
                    ✓ Easy returns & refunds
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

export default Cart;