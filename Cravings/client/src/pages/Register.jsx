import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaUserTie, FaBiking, FaUtensils } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
    setValidationError({});
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    if (!formData.role) {
      Error.role = "Please choose any one";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    console.log(formData);

    

    try {
      const res = await api.post("/auth/register", formData);
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
      {/* Keyframe Animations */}
      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-linear-to-br from-orange-50 via-red-50 to-purple-50 py-12 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Header - Animated */}
          <div className="text-center mb-8 animate-fade-in-down">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 bg-linear-to-br from-orange-500 via-red-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                <span className="text-4xl">🎉</span>
              </div>
            </div>
            <h1 className="text-5xl font-black bg-linear-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Join Cravings!
            </h1>
            <p className="text-gray-600 text-lg">
              Create your account and start your journey 🚀
            </p>
          </div>

          {/* Form Container - Animated */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-scale-in">
            {/* Decorative Top Bar */}
            <div className="h-2 bg-linear-to-r from-orange-500 via-red-500 to-purple-600"></div>
            
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Role Selection */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  I want to register as:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Restaurant Manager */}
                  <div
                    onClick={() => setFormData({ ...formData, role: "manager" })}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                      formData.role === "manager"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="text-center">
                      <FaUserTie className="text-3xl mx-auto mb-2 text-orange-600" />
                      <p className="font-bold text-gray-800 text-sm">Restaurant</p>
                      <p className="text-xs text-gray-500">Manager</p>
                    </div>
                  </div>

                  {/* Delivery Partner */}
                  <div
                    onClick={() => setFormData({ ...formData, role: "partner" })}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                      formData.role === "partner"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="text-center">
                      <FaBiking className="text-3xl mx-auto mb-2 text-red-600" />
                      <p className="font-bold text-gray-800 text-sm">Delivery</p>
                      <p className="text-xs text-gray-500">Partner</p>
                    </div>
                  </div>

                  {/* Customer */}
                  <div
                    onClick={() => setFormData({ ...formData, role: "customer" })}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                      formData.role === "customer"
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="text-center">
                      <FaUtensils className="text-3xl mx-auto mb-2 text-purple-600" />
                      <p className="font-bold text-gray-800 text-sm">Customer</p>
                      <p className="text-xs text-gray-500">Food Lover</p>
                    </div>
                  </div>
                </div>
                {validationError.role && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <span>⚠️</span> {validationError.role}
                  </p>
                )}
              </div>

              {/* Full Name */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-100 hover:border-orange-300"
                  />
                </div>
                {validationError.fullName && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <span>⚠️</span> {validationError.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-100 hover:border-orange-300"
                  />
                </div>
                {validationError.email && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <span>⚠️</span> {validationError.email}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                  </div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="9876543210"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-100 hover:border-orange-300"
                  />
                </div>
                {validationError.mobileNumber && (
                  <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                    <span>⚠️</span> {validationError.mobileNumber}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Create a strong password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-100 hover:border-orange-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-orange-600 transition-colors duration-300"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-100 hover:border-orange-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-orange-600 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-orange-500 via-red-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl disabled:scale-100 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Register</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-red-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="px-8 pb-8 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-orange-600 hover:text-red-600 font-bold transition-colors duration-300 hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <span className="text-green-500">🔒</span>
              <p className="text-gray-700 text-sm font-medium">
                Your information is safe with us
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">✉️</div>
              <p className="text-xs font-semibold text-gray-700">Email Verify</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-xs font-semibold text-gray-700">Welcome Bonus</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-xs font-semibold text-gray-700">Quick Setup</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;