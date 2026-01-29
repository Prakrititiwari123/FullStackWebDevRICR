import React, { useState } from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RestaurantRegister = () => {
  const { registerRestaurant, loading } = useRestaurant();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurantName: "",
    description: "",
    cuisine: "",
    address: {
      street: "",
      city: "",
      state: "",
      pinCode: "",
      landmark: "",
    },
    contact: {
      phone: "",
      alternatePhone: "",
      email: "",
    },
    timing: {
      opening: "10:00 AM",
      closing: "10:00 PM",
      daysOpen: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    documents: {
      fssaiLicense: "",
      gstNumber: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCuisineChange = (e) => {
    const cuisines = e.target.value.split(",").map(item => item.trim());
    setFormData({ ...formData, cuisine: cuisines });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerRestaurant(formData);
    
    if (result.success) {
      toast.success("Restaurant registered successfully! Waiting for admin approval.");
      navigate("/restaurant/dashboard");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register Your Restaurant
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Restaurant Basic Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter restaurant name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cuisine Types *
                </label>
                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine.join(", ")}
                  onChange={handleCuisineChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Italian, Chinese, Indian"
                />
                <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your restaurant..."
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData.address).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")} *
                  </label>
                  <input
                    type="text"
                    name={`address.${key}`}
                    value={value}
                    onChange={handleChange}
                    required={key === "city" || key === "pinCode"}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(formData.contact).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")} {key === "phone" && "*"}
                  </label>
                  <input
                    type={key.includes("Phone") ? "tel" : "email"}
                    name={`contact.${key}`}
                    value={value}
                    onChange={handleChange}
                    required={key === "phone"}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData.documents).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
                    {key}
                  </label>
                  <input
                    type="text"
                    name={`documents.${key}`}
                    value={value}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Registering..." : "Register Restaurant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegister;