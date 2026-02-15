import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    try {
      const res = await api.post("/public/new-contact", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Ultra Premium Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 py-16 px-4 overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl animate-[float_10s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-5 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          
          {/* Decorative Dots Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, #ef4444 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 animate-[fadeInDown_1s_ease-out]">
            {/* Badge Above Title */}
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-60"></div>
                <div className="relative bg-white px-6 py-2 rounded-full border-2 border-orange-200 shadow-lg">
                  <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    💬 We're Here to Help
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Get In Touch
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
              Have a question or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {/* Stats Row */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600 font-semibold">Support</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">&lt;1hr</div>
                <div className="text-sm text-gray-600 font-semibold">Response Time</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Side - Enhanced Contact Info & Map */}
            <div className="space-y-8 animate-[slideInLeft_1s_ease-out]">
              {/* Contact Cards with Enhanced Design */}
              <div className="space-y-5">
                {/* Address Card */}
                <div className="group relative bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100 overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
                  </div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-3xl">📍</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">Visit Us</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        RICR - Raj Institute of Coding & Robotics<br />
                        Bhopal, Madhya Pradesh, India
                      </p>
                      <button className="mt-4 text-orange-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Get Directions <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group relative bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
                  </div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-3xl">✉️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">Email Us</h3>
                      <p className="text-gray-600 font-medium hover:text-purple-600 transition-colors cursor-pointer">support@cravings.com</p>
                      <p className="text-gray-600 font-medium hover:text-purple-600 transition-colors cursor-pointer">info@cravings.com</p>
                      <button className="mt-4 text-purple-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Send Email <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group relative bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-20"></div>
                  </div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-3xl">📞</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Call Us</h3>
                      <p className="text-gray-600 font-medium hover:text-green-600 transition-colors cursor-pointer">+91 1234567890</p>
                      <p className="text-gray-600 font-medium hover:text-green-600 transition-colors cursor-pointer">+91 0987654321</p>
                      <button className="mt-4 text-green-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Call Now <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="group relative bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
                  </div>
                  
                  <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <span className="text-3xl">⏰</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Business Hours</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Mon - Fri:</span>
                          <span className="text-gray-800 font-bold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Sat - Sun:</span>
                          <span className="text-gray-800 font-bold">10:00 AM - 4:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Open Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Map Section */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-orange-200 transition-all duration-300">
                <div className="relative bg-gradient-to-r from-orange-500 via-red-600 to-purple-600 p-4">
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity"></div>
                  <h3 className="relative text-white text-xl font-black flex items-center gap-2">
                    <span className="text-2xl">🗺️</span>
                    Find Us on Map
                  </h3>
                </div>
                <div className="relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9331294936896!2d77.45477337509959!3d23.268962679001856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e1!3m2!1sen!2sin!4v1770470878471!5m2!1sen!2sin"
                    width="100%"
                    height="335"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side - Premium Contact Form */}
            <div className="animate-[slideInRight_1s_ease-out]">
              <div className="sticky top-8 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-200 transition-all duration-300">
                {/* Gradient Form Header */}
                <div className="relative bg-gradient-to-r from-orange-500 via-red-600 to-purple-600 p-8 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
                  </div>
                  
                  <div className="relative">
                    <h2 className="text-4xl font-black text-white mb-3">Send us a Message</h2>
                    <p className="text-orange-100 text-lg">We'll respond within 24 hours ⚡</p>
                  </div>
                </div>

                {/* Premium Form */}
                <form onSubmit={handleSubmit} onReset={handleClearForm} className="p-8 space-y-6">
                  {/* Full Name Input */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      Full Name <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-400 font-normal">(First & Last)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 text-2xl group-focus-within:scale-110 transition-transform">
                        👤
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-800 font-medium hover:border-orange-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      Email Address <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-400 font-normal">(We'll never spam)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 text-2xl group-focus-within:scale-110 transition-transform">
                        ✉️
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-800 font-medium hover:border-purple-300"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      Mobile Number <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-400 font-normal">(10 digits)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-2xl group-focus-within:scale-110 transition-transform">
                        📱
                      </span>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="10 digit mobile number"
                        maxLength="10"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all disabled:cursor-not-allowed disabled:bg-gray-100 text-gray-800 font-medium hover:border-green-300"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      Your Message <span className="text-red-500">*</span>
                      <span className="text-xs text-gray-400 font-normal">(Be specific)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-5 text-blue-500 text-2xl group-focus-within:scale-110 transition-transform">
                        💬
                      </span>
                      <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Tell us how we can help you..."
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        rows="6"
                        className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all disabled:cursor-not-allowed disabled:bg-gray-100 resize-none text-gray-800 font-medium hover:border-blue-300"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="reset"
                      disabled={isLoading}
                      className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-bold py-5 px-8 rounded-2xl hover:from-gray-300 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="text-xl">🔄</span>
                        Clear Form
                      </span>
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 relative bg-gradient-to-r from-orange-500 via-red-600 to-purple-600 text-white font-bold py-5 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                        {isLoading ? (
                          <>
                            <span className="animate-spin text-2xl">⏳</span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <span className="text-2xl">🚀</span>
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Privacy Badge */}
                  <div className="pt-4 border-t-2 border-gray-100">
                    <div className="flex items-center justify-center gap-3 text-gray-500 text-sm bg-gray-50 rounded-xl p-4">
                      <span className="text-2xl">🔒</span>
                      <div>
                        <p className="font-bold text-gray-700">Your information is safe with us</p>
                        <p className="text-xs">We respect your privacy and never share your data</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Enhanced Social Media Section */}
              <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100">
                <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">
                  Connect With Us
                </h3>
                <div className="flex justify-center gap-5">
                  <button className="group relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="relative z-10">📘</span>
                    <div className="absolute inset-0 bg-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <button className="group relative w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="relative z-10">📷</span>
                    <div className="absolute inset-0 bg-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <button className="group relative w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="relative z-10">🐦</span>
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <button className="group relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <span className="relative z-10">📺</span>
                    <div className="absolute inset-0 bg-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-6">
                  Follow us for updates, offers, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Footer Section */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Cravings
                </h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Delivering happiness, one meal at a time. Experience the best food delivery service in town.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">
                  📱
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">
                  🍔
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">
                  🎉
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-black mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-black mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-black mb-6 text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get special offers, updates, and more!
              </p>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 text-white text-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                    ✓
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>We respect your privacy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 Cravings. All rights reserved. Made with ❤️ for food lovers.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-semibold">
                  Privacy
                </a>
                <span className="text-gray-700">•</span>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-semibold">
                  Terms
                </a>
                <span className="text-gray-700">•</span>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-semibold">
                  Cookies
                </a>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-8 top-2 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl hover:scale-110 transition-all cursor-pointer"
          >
            ↑
          </button>
        </div>
      </footer>

      {/* Enhanced Animations */}
      <style jsx>{`
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;





// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import api from "../config/Api";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     message: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClearForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       mobileNumber: "",
//       message: "",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     console.log(formData);
//     try {
//       const res = await api.post("/public/new-contact", formData);
//       toast.success(res.data.message);
//       handleClearForm();
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Unknown Error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
//         <div className="max-w-xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">
//               Post your Query
//             </h1>
//           </div>

//           {/* Form Container */}
//           <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
//             <form
//               onSubmit={handleSubmit}
//               onReset={handleClearForm}
//               className="p-8"
//             >
//               {/* Personal Information */}
//               <div className="mb-10">
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     disabled={isLoading}
//                     className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     disabled={isLoading}
//                     className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                   />
//                   <input
//                     type="tel"
//                     name="mobileNumber"
//                     placeholder="Mobile Number"
//                     maxLength="10"
//                     value={formData.mobileNumber}
//                     onChange={handleChange}
//                     required
//                     disabled={isLoading}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                   />
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     placeholder="Write your Message"
//                     onChange={handleChange}
//                     required
//                     disabled={isLoading}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
//                 <button
//                   type="reset"
//                   disabled={isLoading}
//                   className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
//                 >
//                   Clear Form
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:bg-gray-300  disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? "Submitting" : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Footer Note */}
//           <p className="text-center text-gray-600 mt-8 text-sm">
//             All fields marked are mandatory. We respect your privacy.
//           </p>
//         </div>

//         <div>
//           <iframe
//             src={
//               "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9331294936896!2d77.45477337509959!3d23.268962679001856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e1!3m2!1sen!2sin!4v1770470878471!5m2!1sen!2sin"
//             }
//             width={"600"}
//             height={"450"}
//             allowFullScreen={""}
//             loading={"lazy"}
//             referrerPolicy={"no-referrer-when-downgrade"}
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;














