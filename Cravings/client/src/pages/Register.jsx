// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import api from "../config/Api";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobileNumber: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [validationError, setValidationError] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClearForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       mobileNumber: "",
//       password: "",
//       confirmPassword: "",
//       role: "",
//     });
//   };

//   const validate = () => {
//     let Error = {};

//     if (formData.fullName.length < 3) {
//       Error.fullName = "Name should be More Than 3 Characters";
//     } else {
//       if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
//         Error.fullName = "Only Contain A-Z , a-z and space";
//       }
//     }

//     if (
//       !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
//         formData.email,
//       )
//     ) {
//       Error.email = "Use Proper Email Format";
//     }

//     if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
//       Error.mobileNumber = "Only Indian Mobile Number allowed";
//     }

//     if (!formData.role) {
//       Error.role = "Please choose any one";
//     }

//     setValidationError(Error);

//     return Object.keys(Error).length > 0 ? false : true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (!validate()) {
//       setIsLoading(false);
//       toast.error("Fill the Form Correctly");
//       return;
//     }

//     console.log(formData);

//     try {
//       const res = await api.post("/auth/register", formData);
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
//               Registration
//             </h1>
//             <p className="text-lg text-gray-600">
//               You are 1 step away to stop your Cavings
//             </p>
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
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <label>I am </label>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="role"
//                           id="manager"
//                           checked={formData.role === "manager"}
//                           value={"manager"}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="manager">Resturant Manager</label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="role"
//                           id="partner"
//                           checked={formData.role === "partner"}
//                           value={"partner"}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="partner">Delivery Partner</label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="role"
//                           id="customer"
//                           checked={formData.role === "customer"}
//                           value={"customer"}
//                           onChange={handleChange}
//                         />
//                         <label htmlFor="customer">Customer</label>
//                       </div>
//                     </div>
//                     {validationError.role && (
//                       <span className="text-xs text-red-500">
//                         {validationError.role}
//                       </span>
//                     )}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       name="fullName"
//                       placeholder="Full Name"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       required
//                       disabled={isLoading}
//                       className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                     />
//                     {validationError.fullName && (
//                       <span className="text-xs text-red-500">
//                         {validationError.fullName}
//                       </span>
//                     )}
//                   </div>
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
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     placeholder="Create Password"
//                     onChange={handleChange}
//                     required
//                     disabled={isLoading}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
//                   />
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     value={formData.confirmPassword}
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
//       </div>
//     </>
//   );
// };

// export default Register;




import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { FaUser, FaUtensils, FaMotorcycle } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "customer", // Default value
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user types
    if (validationError[name]) {
      setValidationError({ ...validationError, [name]: "" });
    }
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      role: "customer",
    });
    setValidationError({});
  };

  const validate = () => {
    let errors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      errors.fullName = "Name should be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      errors.fullName = "Only letters and spaces allowed";
    }

    // Email Validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Mobile Number Validation
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.replace(/\D/g, ""))) {
      errors.mobileNumber = "Invalid Indian mobile number";
    }

    // Password Validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(formData.password)) {
      errors.password = "Password must contain at least one number";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Role Validation
    if (!formData.role) {
      errors.role = "Please select a role";
    }

    setValidationError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    // Prepare data for backend
    const submitData = {
      fullName: formData.fullName.trim(),
      email: formData.email.toLowerCase().trim(),
      mobileNumber: formData.mobileNumber.trim(),
      password: formData.password,
      role: formData.role,
      // Optional fields (backend will handle defaults)
      gender: "",
    };

    console.log("Submitting:", submitData);

    try {
      const res = await api.post("/auth/register", submitData);
      toast.success(res.data.message || "Registration successful!");
      
      // Optional: Redirect based on role
      setTimeout(() => {
        if (formData.role === "restaurant") {
          // Redirect to restaurant dashboard
          window.location.href = "/restaurant/dashboard";
        } else if (formData.role === "delivery") {
          // Redirect to delivery dashboard
          window.location.href = "/delivery/dashboard";
        } else {
          // Redirect to customer dashboard
          window.location.href = "/";
        }
      }, 1500);
      
      handleClearForm();
      
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage = error?.response?.data?.message || 
                          error?.response?.data?.error || 
                          "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const roleOptions = [
    { 
      value: "customer", 
      label: "Customer", 
      icon: <FaUser className="text-blue-600" />,
      description: "Order food from restaurants"
    },
    { 
      value: "restaurant", 
      label: "Restaurant Owner", 
      icon: <FaUtensils className="text-green-600" />,
      description: "List your restaurant and manage orders"
    },
    { 
      value: "delivery", 
      label: "Delivery Partner", 
      icon: <FaMotorcycle className="text-orange-600" />,
      description: "Deliver orders and earn money"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Join Cravings
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Register in 60 seconds and start your food journey
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Role Selection Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Select Your Role
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                {roleOptions.map((option) => (
                  <div key={option.value} className="relative">
                    <input
                      type="radio"
                      name="role"
                      id={option.value}
                      value={option.value}
                      checked={formData.role === option.value}
                      onChange={handleChange}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={option.value}
                      className="block p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:shadow-md hover:border-gray-300 hover:bg-gray-50"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-medium text-gray-800 mb-1">
                          {option.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {option.description}
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              
              {validationError.role && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {validationError.role}
                </p>
              )}
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:bg-gray-100 ${
                      validationError.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {validationError.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationError.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:bg-gray-100 ${
                      validationError.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {validationError.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationError.email}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-3.5 text-gray-500">+91</div>
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="9876543210"
                      maxLength="10"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      disabled={isLoading}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:bg-gray-100 ${
                        validationError.mobileNumber ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {validationError.mobileNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationError.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:bg-gray-100 ${
                      validationError.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {validationError.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationError.password}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    • At least 6 characters • One uppercase letter • One number
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:bg-gray-100 ${
                      validationError.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {validationError.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationError.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleClearForm}
                  disabled={isLoading}
                  className="flex-1 bg-gray-100 text-gray-700 font-medium py-3.5 px-6 rounded-lg hover:bg-gray-200 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                >
                  Clear All
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3.5 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Registering...</span>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a 
                    href="/login" 
                    className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline"
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              By registering, you agree to our{" "}
              <a href="/terms" className="text-indigo-600 hover:underline">Terms</a>{" "}
              and{" "}
              <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;