import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay, FaHeart, FaUtensils, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaUtensils className="text-3xl text-orange-500" />
              <h2 className="text-3xl font-bold text-orange-500">Craving</h2>
            </div>
            <p className="text-gray-300">Delivering happiness, one meal at a time</p>
            
            <div className="space-y-3">
              <p className="font-medium">Download our app</p>
              <div className="flex space-x-3">
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  <FaApple className="mr-2" />
                  App Store
                </button>
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  <FaGooglePlay className="mr-2" />
                  Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition">Contact Us</a></li>
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-300 hover:text-orange-400 transition">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-orange-400 transition">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-orange-400 transition">Cookie Policy</a></li>
              <li><a href="/safety" className="text-gray-300 hover:text-orange-400 transition">Safety Center</a></li>
              <li><a href="/compliance" className="text-gray-300 hover:text-orange-400 transition">Compliance</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span className="text-gray-300">123 Food Street, City, Country</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-orange-500" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-orange-500" />
                  <span className="text-gray-300">support@craving.com</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Newsletter</h3>
              <p className="text-gray-300 mb-3">Subscribe for exclusive offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-semibold mb-3">We Accept</h4>
              <div className="flex space-x-2">
                <div className="bg-white p-2 rounded">
                  <span className="font-bold text-gray-800">VISA</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-bold text-blue-600">PayPal</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-bold text-yellow-500">MasterCard</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="font-bold text-green-600">Apple Pay</span>
                </div>
              </div>
            </div>

            {/* Partner Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Partner With Us</h4>
              <div className="flex space-x-4">
                <a href="/restaurant-signup" className="text-orange-400 hover:text-orange-300 transition">
                  Add Restaurant
                </a>
                <a href="/driver-signup" className="text-orange-400 hover:text-orange-300 transition">
                  Become a Driver
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Craving -- Food Delivery. All rights reserved. 
            Made with <FaHeart className="inline text-red-500" /> for food lovers.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            24/7 Customer Support • 100+ Cities • 5000+ Restaurants
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer



