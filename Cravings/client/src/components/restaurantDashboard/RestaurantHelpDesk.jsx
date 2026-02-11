// import React from "react";

// const RestaurantHelpDesk = () => {
//   return (
//     <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto">
//       <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Help Desk & Support</h2>
//         <div className="text-center text-gray-500 py-12">
//           <p className="text-lg">Support tickets and help desk features will be displayed here</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantHelpDesk;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export const RestaurantHelpDesk = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ Data by Category
  const faqCategories = {
    all: [
      {
        question: "How do I track my order?",
        answer:
          "You can track your order in real-time through the 'My Orders' section in our app or website. You'll receive live GPS updates from the moment your order is prepared until it arrives at your doorstep.",
        category: "delivery",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards (Visa, MasterCard, American Express), digital wallets (Apple Pay, Google Pay), PayPal, and cash on delivery in select areas.",
        category: "payments",
      },
      {
        question: "How can I cancel my order?",
        answer:
          "You can cancel your order within 5 minutes of placing it through the 'My Orders' section. After 5 minutes, please contact our support team for assistance.",
        category: "orders",
      },
      {
        question: "Do you offer contactless delivery?",
        answer:
          "Yes! We offer 100% contactless delivery. You can specify delivery instructions during checkout, including 'leave at door' options.",
        category: "delivery",
      },
      {
        question: "How do I apply a promo code?",
        answer:
          "Add your items to cart, proceed to checkout, and you'll find a 'Apply Promo Code' field where you can enter your code. Click apply to see the discount reflected in your total.",
        category: "account",
      },
      {
        question: "What are your delivery hours?",
        answer:
          "Delivery hours vary by restaurant, but most are available from 10 AM to 11 PM. You can check specific restaurant hours on their menu page.",
        category: "delivery",
      },
      {
        question: "How do I report a missing item?",
        answer:
          "Please contact our support team immediately through the app/website or call our helpline. We'll investigate and resolve the issue promptly.",
        category: "issues",
      },
      {
        question: "Can I schedule an order for later?",
        answer:
          "Yes! During checkout, you can select a 'Schedule for Later' option and choose your preferred delivery time up to 48 hours in advance.",
        category: "orders",
      },
    ],
    delivery: [
      {
        question: "What is your delivery radius?",
        answer:
          "Delivery radius varies by restaurant, typically 5-7 kilometers. You can check availability by entering your delivery address.",
      },
      {
        question: "How long does delivery usually take?",
        answer:
          "Average delivery time is 30-45 minutes, depending on restaurant preparation time, traffic, and distance.",
      },
      {
        question: "Can I change my delivery address after ordering?",
        answer:
          "Please contact support immediately if you need to change your delivery address. We'll do our best to accommodate changes before the rider picks up your order.",
      },
    ],
    payments: [
      {
        question: "Is my payment information secure?",
        answer:
          "Yes! We use bank-level encryption and never store your full payment details. All transactions are PCI-DSS compliant.",
      },
      {
        question: "Why was my payment declined?",
        answer:
          "Common reasons include insufficient funds, incorrect card details, or your bank's security restrictions. Please check with your bank or try another payment method.",
      },
    ],
    orders: [
      {
        question: "Can I modify my order after placing it?",
        answer:
          "Contact support immediately for order modifications. We'll check if the restaurant can accommodate your request.",
      },
      {
        question: "How do I reorder a previous order?",
        answer:
          "Go to 'Order History' in your account, find the order, and click 'Reorder'. All items will be added to your cart automatically.",
      },
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page. We'll send a reset link to your registered email address.",
      },
      {
        question: "Can I have multiple delivery addresses?",
        answer:
          "Yes! You can save multiple addresses in your account for quick checkout.",
      },
    ],
    issues: [
      {
        question: "What if my food arrives cold or damaged?",
        answer:
          "Please contact our support team immediately. We'll investigate the issue and provide a refund or replacement as per our quality guarantee policy.",
      },
      {
        question: "How do I report wrong items in my order?",
        answer:
          "Use the 'Report Issue' feature in your order history or contact our support team with your order number and details of the incorrect items.",
      },
    ],
  };

  // Get all filtered FAQs
  const filteredFAQs = faqCategories[activeCategory].filter(
    (item) =>
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Header */}
      <div className="bg-orange-400 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Find answers to common questions about Craving food delivery
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm">Popular searches:</span>
              {[
                "track order",
                "cancel order",
                "refund",
                "promo code",
                "delivery time",
              ].map((term) => (
                <button
                  key={term}
                  className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All Questions" },
              { id: "delivery", label: "Delivery" },
              { id: "payments", label: "Payments" },
              { id: "orders", label: "Orders" },
              { id: "account", label: "Account" },
              { id: "issues", label: "Issues" },
            ].map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-orange-300 hover:shadow-sm"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Results */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === "all"
                ? "All Questions"
                : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Questions`}
            </h2>
            <span className="text-gray-600">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1 ? "question" : "questions"}
            </span>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-orange-200 transition-colors"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector(".arrow");
                      content.classList.toggle("hidden");
                      arrow.classList.toggle("rotate-90");
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        {faq.category && activeCategory === "all" && (
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                            {faq.category}
                          </span>
                        )}
                        <span className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                    <FaArrowRight className="arrow text-orange-500 transform transition-transform duration-300 ml-4 flex-shrink-0" />
                  </button>
                  <div className="hidden px-6 pb-4 animate-fadeIn">
                    <div className="pl-4 border-l-2 border-orange-300">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-3">
                          Was this answer helpful?
                        </p>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg transition-colors">
                            <FaCheckCircle /> Yes
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg transition-colors">
                            <FaTimesCircle /> No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">?</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-500">
                  Try searching with different keywords or browse another
                  category
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Still Need Help Section */}
        <div className="bg-linear-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-100">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here
              to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
                Contact Support
              </button> */}
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Support
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold border border-gray-300 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHelpDesk;
