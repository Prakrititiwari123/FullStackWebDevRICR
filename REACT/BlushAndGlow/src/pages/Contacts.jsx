import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage, MdLocationOn } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "What is Blush & Glow's return policy?",
      answer:
        "We offer a 30-day return policy on all unopened products. If you're not satisfied with your purchase, simply contact our customer service team with your order number for a full refund.",
    },
    {
      id: 2,
      question: "Are Blush & Glow products safe for sensitive skin?",
      answer:
        "Yes! All our products are hypoallergenic and dermatologically tested. We use natural, gentle ingredients suitable for sensitive skin. If you have specific concerns, please consult with a dermatologist.",
    },
    {
      id: 3,
      question: "How do I know which products are suitable for my skin type?",
      answer:
        "Each product description includes recommended skin types. You can also take our skin type quiz on our website or contact our beauty consultants for personalized recommendations.",
    },
    {
      id: 4,
      question: "Are Blush & Glow products available in physical stores?",
      answer:
        "Currently, we operate online exclusively, but we partner with select retailers. Check our store locator on the website or contact us for information about authorized retailers in your area.",
    },
    {
      id: 5,
      question: "Which payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and buy-now-pay-later options through Klarna and Afterpay.",
    },
    {
      id: 6,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive an email with a tracking number. You can also log into your account and view order status anytime. International orders take 7-14 business days.",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl">
            We'd love to hear from you. Contact us anytime with questions or feedback.
          </p>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you think..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <GoArrowUpRight />
                </button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 border-2 border-pink-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 text-white p-4 rounded-full">
                    <IoCallOutline size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700 mb-2">Monday - Friday, 9AM - 6PM</p>
                    <p className="text-pink-600 font-semibold text-lg hover:text-pink-700 cursor-pointer">
                      +(1) 480-555-0103
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 border-2 border-pink-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white p-4 rounded-full">
                    <MdOutlineMessage size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700 mb-2">We'll respond within 24 hours</p>
                    <p className="text-rose-600 font-semibold text-lg hover:text-rose-700 cursor-pointer">
                      support@blushandglow.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 border-2 border-pink-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 text-white p-4 rounded-full">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700 mb-1">Blush & Glow HQ</p>
                    <p className="text-gray-700 mb-1">6391 Elgin Street</p>
                    <p className="text-gray-700">Celina, Delaware 10299</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 border-2 border-pink-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 text-white p-4 rounded-full">
                    <MdAccessTime size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Business Hours
                    </h3>
                    <p className="text-gray-700 text-sm space-y-1">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div>Saturday: 10:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                      <div className="mt-2 text-rose-600 font-semibold">EST</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-pink-100 to-rose-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">20+</div>
              <p className="text-xl font-semibold text-gray-700">Countries Served</p>
              <p className="text-gray-600 mt-2">
                Delivering beauty to customers worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-rose-600 mb-2">95%</div>
              <p className="text-xl font-semibold text-gray-700">Satisfaction Rate</p>
              <p className="text-gray-600 mt-2">
                Trusted by thousands of happy customers
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">24/7</div>
              <p className="text-xl font-semibold text-gray-700">Customer Support</p>
              <p className="text-gray-600 mt-2">
                Always here to help with your questions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-pink-300 transition"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(
                      expandedFaq === faq.id ? null : faq.id
                    )
                  }
                  className="w-full px-8 py-6 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between font-semibold text-gray-900 text-lg"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transition transform ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-8 py-6 bg-white text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
