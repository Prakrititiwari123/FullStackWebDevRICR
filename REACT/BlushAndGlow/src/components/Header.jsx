import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { getTotalItems, cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    } else {
      navigate("/shop");
    }
  };

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link
              to={"/"}
              className="text-3xl font-extrabold tracking-wide text-pink-600 hover:text-pink-700 transition"
            >
              Blush & Glow
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link
              to={"/story"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              OUR STORY
            </Link>

            <Link
              to={"/shop"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              SHOP
            </Link>

            <Link
              to={"/blogs"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              BLOGS
            </Link>

            <Link
              to={"/reviews"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              REVIEWS
            </Link>

            <Link
              to={"/contacts"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              CONTACTS
            </Link>
          </div>

          <div className="flex items-center gap-6 text-2xl text-gray-700">
            <button
              onClick={handleSearchClick}
              className="hover:text-pink-600 transition transform hover:scale-110 cursor-pointer"
              title="Search products"
            >
              <CiSearch />
            </button>

            <button
              onClick={handleCartClick}
              className="relative hover:text-pink-600 transition transform hover:scale-110 cursor-pointer"
              title="View cart"
            >
              <IoCartOutline />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Cart Dropdown */}
        {cartOpen && cart.length > 0 && (
          <div className="absolute right-8 top-16 w-80 bg-white rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-pink-500">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

        {cartOpen && cart.length === 0 && (
          <div className="absolute right-8 top-16 w-80 bg-white rounded-lg shadow-2xl z-50 p-6">
            <p className="text-center text-gray-600">Your cart is empty</p>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
