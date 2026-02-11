import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaHeadset, FaClock } from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../config/Api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "Order & Delivery",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "24/7 Customer Support",
      buttonText: "Call Now",
      color: "bg-white text-orange-700 border-orange-200",
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "WhatsApp",
      details: "+1 (555) 123-4568",
      description: "Instant chat support",
      buttonText: "Start Chat",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Us",
      details: "support@craving.com",
      description: "Response within 2 hours",
      buttonText: "Send Email",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "Live Chat",
      details: "Available 8 AM - 11 PM",
      description: "Instant assistance",
      buttonText: "Start Chat",
     color: "bg-orange-100 text-orange-700 border-orange-200",
    },
  ];

  const subjectOptions = [
    "Order & Delivery",
    "Payment & Refunds",
    "Account Issues",
    "Restaurant Partner",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "Order & Delivery",
      message: "",
    });
  };

  const handleContactMethodClick = (method) => {
    switch(method) {
      case 'call':
        window.location.href = 'tel:+15551234567';
        break;
      case 'whatsapp':
        window.open('https://wa.me/15551234568', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:support@craving.com';
        break;
      case 'chat':
        toast.success('Live chat opening soon!');
        break;
      default:
        break;
    }
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
    <div className="min-h-screen bg-orange-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Our Support Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us. We're here to help you with any questions or concerns.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Quick Contact Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`border rounded-xl p-6 ${method.color} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {method.icon}
                  <h3 className="font-bold text-lg">{method.title}</h3>
                </div>
                <p className="text-xl font-semibold mb-2">{method.details}</p>
                <p className="text-sm mb-4 text-opacity-90">{method.description}</p>
                <button 
                  onClick={() => handleContactMethodClick(method.title.toLowerCase().replace(' ', ''))}
                  className="w-full py-2.5 bg-orange-100 hover:bg-orange-300 rounded-lg font-medium transition-colors"
                >
                  {method.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-orange-100 rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaClock className="text-3xl text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-800">Support Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-orange-700">Phone & WhatsApp</h4>
              <p className="text-orange-600">24/7 Available</p>
              <p className="text-sm text-orange-500 mt-1">Immediate response</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-orange-700">Live Chat</h4>
              <p className="text-orange-600">8:00 AM - 11:00 PM (Local Time)</p>
              <p className="text-sm text-orange-500 mt-1">Daily except holidays</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-orange-700">Email Response</h4>
              <p className="text-orange-600">Within 2 hours during business hours</p>
              <p className="text-sm text-orange-500 mt-1">Mon-Fri: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-orange-100 rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Form Side */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} onReset={handleClearForm}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition disabled:cursor-not-allowed disabled:bg-orange-100"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition disabled:cursor-not-allowed disabled:bg-orange-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile Number *"
                        maxLength="10"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition disabled:cursor-not-allowed disabled:bg-orange-100"
                      />
                    </div>
                    <div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition disabled:cursor-not-allowed disabled:bg-orange-100"
                      >
                        {subjectOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder="Your Message *"
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition disabled:cursor-not-allowed disabled:bg-orange-100"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-200">
                  <button
                    type="reset"
                    disabled={isLoading}
                    className="flex-1 bg-blue-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-lg disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Message"
                    )}
                  </button>
                </div>
              </form>

              <p className="text-center text-gray-600 mt-6 text-sm">
                * All fields are required. We respect your privacy and will never share your information.
              </p>
            </div>

            {/* Info Side */}
            <div className="md:w-1/2 bg-orange-400 text-white p-8 md:p-12">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Support?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>24/7 Customer Support Available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Average Response Time: Under 2 Hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Trained Support Representatives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Multiple Contact Channels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Privacy & Data Protection Guaranteed</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/30">
                  <h4 className="font-bold mb-2">Emergency Support</h4>
                  <p className="text-sm opacity-90">
                    For urgent order-related issues, call our priority line: 
                    <span className="font-bold ml-1">+1 (555) 123-4569</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
//       </div>

//       <div className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {contactMethods.map((method, index) => (
//             <div
//               key={index}
//               className={`border rounded-xl p-6 ${method.color}`}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 {method.icon}
//                 <h3 className="font-bold text-lg">{method.title}</h3>
//               </div>
//               <p className="text-xl font-semibold mb-2">{method.details}</p>
//               <p className="text-sm mb-4">{method.description}</p>
//               <button className="w-full py-2 bg-white hover:bg-gray-50 rounded-lg font-medium">
//                 {method.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Support Hours */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex items-center gap-3 mb-4">
//             <FaClock className="text-2xl text-orange-500" />
//             <h3 className="text-xl font-bold">Support Hours</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h4 className="font-semibold mb-2">Phone & WhatsApp</h4>
//               <p className="text-gray-600">24/7 Available</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Live Chat</h4>
//               <p className="text-gray-600">8:00 AM - 11:00 PM (Local Time)</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Email Response</h4>
//               <p className="text-gray-600">
//                 Within 2 hours during business hours
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Subject</label>
//               <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none">
//                 <option>Select an issue</option>
//                 <option>Order & Delivery</option>
//                 <option>Payment & Refunds</option>
//                 <option>Account Issues</option>
//                 <option>Restaurant Partner</option>
//                 <option>Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Message</label>
//               <textarea
//                 rows="4"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
