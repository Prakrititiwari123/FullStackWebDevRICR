import React from 'react';
import { FaCheck, FaUsers, FaMotorcycle, FaStar, FaMapMarkerAlt, FaUtensils, FaHeart, FaClock, FaShieldAlt } from 'react-icons/fa';

export const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: <FaUsers className="text-orange-500" /> },
    { number: "5K+", label: "Restaurant Partners", icon: <FaUtensils className="text-orange-500" /> },
    { number: "100+", label: "Cities Served", icon: <FaMapMarkerAlt className="text-orange-500" /> },
    { number: "24/7", label: "Customer Support", icon: <FaClock className="text-orange-500" /> },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We partner with top-rated restaurants to ensure you get the best quality food.",
      icon: <FaStar className="text-2xl text-orange-500" />
    },
    {
      title: "Fast Delivery",
      description: "Our riders are trained to deliver your food hot and fresh in record time.",
      icon: <FaMotorcycle className="text-2xl text-orange-500" />
    },
    {
      title: "Safety & Hygiene",
      description: "We maintain strict safety protocols for both food preparation and delivery.",
      icon: <FaShieldAlt className="text-2xl text-orange-500" />
    },
    {
      title: "Customer Love",
      description: "Your satisfaction is our priority. We're always here to help.",
      icon: <FaHeart className="text-2xl text-orange-500 " />
    },
  ];

  const teamMembers = [
    { name: "Sarah Chen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" },
    { name: "Michael Rodriguez", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-150&h=150&fit=crop" },
    { name: "Priya Sharma", role: "Head of Technology", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-150&h=150&fit=crop" },
    { name: "David Kim", role: "Marketing Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delivering happiness, one meal at a time since 2018
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Mission: <span className="text-orange-500">Feed Your Cravings</span>
              </h2>
              <p className="text-gray-600 mb-4">
                At Craving, we believe that great food should be accessible to everyone, anytime, anywhere. 
                What started as a simple idea to connect local restaurants with food lovers has grown into 
                a platform serving thousands of customers daily.
              </p>
              <p className="text-gray-600 mb-6">
                We're more than just a delivery service - we're a community of food enthusiasts, 
                dedicated restaurant partners, and passionate delivery riders working together to 
                create unforgettable dining experiences.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Order Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Food delivery" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Numbers That Speak Volumes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-300 transition">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How Craving Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Browse & Choose</h3>
              <p className="text-gray-600">
                Explore hundreds of restaurants and cuisines in your area
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Place Order</h3>
              <p className="text-gray-600">
                Customize your order and checkout securely
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Enjoy Delivery</h3>
              <p className="text-gray-600">
                Track your order in real-time and enjoy fresh food
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  Passionate about food technology and customer experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Satisfy Your Cravings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of food lovers who trust Craving for their daily meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition">
              Download App
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold text-lg transition">
              Join as Restaurant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About


