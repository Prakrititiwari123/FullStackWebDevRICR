// import React, { useState } from "react";
// import { useRestaurant } from "../../context/RestaurantContext";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const RestaurantRegister = () => {
//   const { registerRestaurant, loading } = useRestaurant();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     restaurantName: "",
//     description: "",
//     cuisine: "",
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       pinCode: "",
//       landmark: "",
//     },
//     contact: {
//       phone: "",
//       alternatePhone: "",
//       email: "",
//     },
//     timing: {
//       opening: "10:00 AM",
//       closing: "10:00 PM",
//       daysOpen: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     },
//     documents: {
//       fssaiLicense: "",
//       gstNumber: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const [parent, child] = name.split(".");
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value,
//         },
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleCuisineChange = (e) => {
//     const cuisines = e.target.value.split(",").map(item => item.trim());
//     setFormData({ ...formData, cuisine: cuisines });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await registerRestaurant(formData);
    
//     if (result.success) {
//       toast.success("Restaurant registered successfully! Waiting for admin approval.");
//       navigate("/restaurant/dashboard");
//     } else {
//       toast.error(result.error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Register Your Restaurant
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Restaurant Basic Info */}
//           <div className="bg-blue-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-blue-800 mb-4">Basic Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Restaurant Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="restaurantName"
//                   value={formData.restaurantName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter restaurant name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Cuisine Types *
//                 </label>
//                 <input
//                   type="text"
//                   name="cuisine"
//                   value={formData.cuisine.join(", ")}
//                   onChange={handleCuisineChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="e.g., Italian, Chinese, Indian"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Describe your restaurant..."
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Address Section */}
//           <div className="bg-green-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-green-800 mb-4">Address</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.entries(formData.address).map(([key, value]) => (
//                 <div key={key}>
//                   <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
//                     {key.replace(/([A-Z])/g, " $1")} *
//                   </label>
//                   <input
//                     type="text"
//                     name={`address.${key}`}
//                     value={value}
//                     onChange={handleChange}
//                     required={key === "city" || key === "pinCode"}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="bg-yellow-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-yellow-800 mb-4">Contact Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {Object.entries(formData.contact).map(([key, value]) => (
//                 <div key={key}>
//                   <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
//                     {key.replace(/([A-Z])/g, " $1")} {key === "phone" && "*"}
//                   </label>
//                   <input
//                     type={key.includes("Phone") ? "tel" : "email"}
//                     name={`contact.${key}`}
//                     value={value}
//                     onChange={handleChange}
//                     required={key === "phone"}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Documents */}
//           <div className="bg-purple-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-purple-800 mb-4">Documents</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.entries(formData.documents).map(([key, value]) => (
//                 <div key={key}>
//                   <label className="block text-sm font-medium text-gray-700 mb-1 uppercase">
//                     {key}
//                   </label>
//                   <input
//                     type="text"
//                     name={`documents.${key}`}
//                     value={value}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center pt-6">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Registering..." : "Register Restaurant"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RestaurantRegister;












import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurant } from '../../context/RestaurantContext';

const RestaurantRegister = () => {
  const navigate = useNavigate();
  const { registerRestaurant, loading } = useRestaurant();
  const [formData, setFormData] = useState({
    restaurantName: '',
    description: '',
    cuisine: ['Indian'],
    address: {
      street: '',
      city: '',
      state: '',
      pinCode: '',
      landmark: '',
    },
    contact: {
      phone: '',
      alternatePhone: '',
      email: '',
    },
    timing: {
      opening: '10:00 AM',
      closing: '10:00 PM',
      daysOpen: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    documents: {
      fssaiLicense: '',
      gstNumber: '',
    },
  });

  const [errors, setErrors] = useState({});

  const cuisineOptions = [
    'Indian', 'Chinese', 'Italian', 'Mexican', 'Thai', 
    'Continental', 'Fast Food', 'Desserts', 'Beverages'
  ];

  const daysOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested objects
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCuisineToggle = (cuisine) => {
    setFormData(prev => {
      const newCuisine = prev.cuisine.includes(cuisine)
        ? prev.cuisine.filter(c => c !== cuisine)
        : [...prev.cuisine, cuisine];
      return { ...prev, cuisine: newCuisine };
    });
  };

  const handleDaysToggle = (day) => {
    setFormData(prev => {
      const newDays = prev.timing.daysOpen.includes(day)
        ? prev.timing.daysOpen.filter(d => d !== day)
        : [...prev.timing.daysOpen, day];
      return {
        ...prev,
        timing: { ...prev.timing, daysOpen: newDays }
      };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.restaurantName.trim()) newErrors.restaurantName = 'Restaurant name is required';
    if (!formData.address.city.trim()) newErrors['address.city'] = 'City is required';
    if (!formData.address.pinCode.trim()) newErrors['address.pinCode'] = 'Pincode is required';
    if (!formData.contact.phone.trim()) newErrors['contact.phone'] = 'Phone is required';
    if (formData.cuisine.length === 0) newErrors.cuisine = 'Select at least one cuisine';
    if (formData.timing.daysOpen.length === 0) newErrors.daysOpen = 'Select at least one day';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const result = await registerRestaurant(formData);
    
    if (result.success) {
      alert('Restaurant registered successfully! Waiting for admin approval.');
      navigate('/restaurant/dashboard');
    } else {
      alert(result.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Register Your Restaurant</h1>
          <p className="text-gray-600 mt-2">Fill in the details to start your restaurant journey</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          {/* Restaurant Basic Info */}
          <Section title="Basic Information">
            <InputField
              label="Restaurant Name *"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="e.g., Taste of India"
              error={errors.restaurantName}
              required
            />
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Tell customers about your restaurant..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Cuisine Types *</label>
              <div className="flex flex-wrap gap-2">
                {cuisineOptions.map(cuisine => (
                  <button
                    key={cuisine}
                    type="button"
                    onClick={() => handleCuisineToggle(cuisine)}
                    className={`px-4 py-2 rounded-full border ${
                      formData.cuisine.includes(cuisine)
                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
              {errors.cuisine && <p className="text-red-500 text-sm mt-1">{errors.cuisine}</p>}
            </div>
          </Section>

          {/* Address */}
          <Section title="Address Details">
            <InputField
              label="Street"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              placeholder="Street address"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="City *"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                placeholder="City"
                error={errors['address.city']}
                required
              />
              <InputField
                label="State"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                placeholder="State"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Pincode *"
                name="address.pinCode"
                value={formData.address.pinCode}
                onChange={handleChange}
                placeholder="Pincode"
                error={errors['address.pinCode']}
                required
              />
              <InputField
                label="Landmark"
                name="address.landmark"
                value={formData.address.landmark}
                onChange={handleChange}
                placeholder="Nearby landmark"
              />
            </div>
          </Section>

          {/* Contact */}
          <Section title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Phone Number *"
                name="contact.phone"
                value={formData.contact.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                error={errors['contact.phone']}
                required
              />
              <InputField
                label="Alternate Phone"
                name="contact.alternatePhone"
                value={formData.contact.alternatePhone}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
            
            <InputField
              label="Email"
              name="contact.email"
              type="email"
              value={formData.contact.email}
              onChange={handleChange}
              placeholder="restaurant@example.com"
            />
          </Section>

          {/* Timing */}
          <Section title="Operating Hours">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InputField
                label="Opening Time"
                name="timing.opening"
                value={formData.timing.opening}
                onChange={handleChange}
                placeholder="10:00 AM"
              />
              <InputField
                label="Closing Time"
                name="timing.closing"
                value={formData.timing.closing}
                onChange={handleChange}
                placeholder="10:00 PM"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Days Open *</label>
              <div className="flex flex-wrap gap-2">
                {daysOptions.map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDaysToggle(day)}
                    className={`px-4 py-2 rounded-lg border ${
                      formData.timing.daysOpen.includes(day)
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              {errors.daysOpen && <p className="text-red-500 text-sm mt-1">{errors.daysOpen}</p>}
            </div>
          </Section>

          {/* Documents */}
          <Section title="Documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="FSSAI License"
                name="documents.fssaiLicense"
                value={formData.documents.fssaiLicense}
                onChange={handleChange}
                placeholder="FSSAI license number"
              />
              <InputField
                label="GST Number"
                name="documents.gstNumber"
                value={formData.documents.gstNumber}
                onChange={handleChange}
                placeholder="GSTIN"
              />
            </div>
          </Section>

          {/* Submit Button */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 font-medium"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Processing...
                  </>
                ) : (
                  'Register Restaurant'
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Note: Your restaurant will be activated after admin approval.</p>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">{title}</h2>
    {children}
  </div>
);

const InputField = ({ label, name, value, onChange, type = 'text', placeholder, error, required = false }) => (
  <div className="mb-6">
    <label className="block text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default RestaurantRegister;