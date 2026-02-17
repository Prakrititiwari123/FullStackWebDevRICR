import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";
import Loading from "../components/Loading";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();

  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      switch (res.data.data.role) {
        case "manager": {
          setRole("manager");
          navigate("/resturant-dashboard");
          break;
        }
        case "partner": {
          setRole("partner");
          navigate("/rider-dashboard");
          break;
        }
        case "customer": {
          setRole("customer");
          navigate("/user-dashboard");
          break;
        }
        case "admin": {
          setRole("admin");
          navigate("/admin-dashboard");
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-red-50 to-purple-50">
        <Loading />
      </div>
    );
  }

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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-linear-to-br from-orange-50 via-red-50 to-purple-50 py-12 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="max-w-md mx-auto relative z-10">
          {/* Header - Animated */}
          <div className="text-center mb-8 animate-fade-in-down">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 bg-linear-to-br from-orange-500 via-red-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                <span className="text-4xl">🍽️</span>
              </div>
            </div>
            <h1 className="text-5xl font-black bg-linear-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Welcome Back!
            </h1>
            <p className="text-gray-600 text-lg">
              Sign in to satisfy your cravings ✨
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
              {/* Email Input */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
              </div>

              {/* Password Input */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
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
                    placeholder="Enter your password"
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

              {/* Forget Password Link */}
              <div className="w-full flex justify-end mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <button
                  type="button"
                  className="text-orange-600 hover:text-red-600 font-semibold text-sm transition-colors duration-300 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsForgetPasswordModelOpen(true);
                  }}
                >
                  Forgot Password? 🔑
                </button>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
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
                        Loading...
                      </>
                    ) : (
                      <>
                        <span>Login</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-red-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="px-8 pb-8 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="text-orange-600 hover:text-red-600 font-bold transition-colors duration-300 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30">
              <span className="text-green-500">🔒</span>
              <p className="text-gray-700 text-sm font-medium">
                Your data is secure and encrypted
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-xs font-semibold text-gray-700">Fast Login</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">🔐</div>
              <p className="text-xs font-semibold text-gray-700">Secure</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-xs font-semibold text-gray-700">Reliable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Forget Password Modal */}
      {isForgetPasswordModelOpen && (
        <ForgetPasswordModal
          onClose={() => setIsForgetPasswordModelOpen(false)}
        />
      )}
    </>
  );
};

export default Login;