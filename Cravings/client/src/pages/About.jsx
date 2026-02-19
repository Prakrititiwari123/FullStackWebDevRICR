import React, { useRef, useEffect, useState } from 'react';
import { FaCheck, FaUsers, FaMotorcycle, FaStar, FaMapMarkerAlt, FaUtensils, FaHeart, FaClock, FaShieldAlt } from 'react-icons/fa';

// Hook for scroll-triggered animations
const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  
  return isInView;
};

export const About = () => {
  // Refs for scroll animations
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const howItWorksRef = useRef(null);
  const teamRef = useRef(null);

  // Check if sections are in view
  const missionInView = useInView(missionRef);
  const statsInView = useInView(statsRef);
  const valuesInView = useInView(valuesRef);
  const howItWorksInView = useInView(howItWorksRef);
  const teamInView = useInView(teamRef);
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
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleInUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-scaleInUp {
          animation: scaleInUp 0.5s ease-out forwards;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        .hero-title {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        .stat-card {
          animation: scaleInUp 0.5s ease-out forwards;
        }
        
        .stat-card:nth-child(1) { animation-delay: 0s; }
        .stat-card:nth-child(2) { animation-delay: 0.1s; }
        .stat-card:nth-child(3) { animation-delay: 0.2s; }
        .stat-card:nth-child(4) { animation-delay: 0.3s; }
        
        .value-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .value-card:nth-child(1) { animation-delay: 0s; }
        .value-card:nth-child(2) { animation-delay: 0.1s; }
        .value-card:nth-child(3) { animation-delay: 0.2s; }
        .value-card:nth-child(4) { animation-delay: 0.3s; }
        
        .step-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .step-card:nth-child(1) { animation-delay: 0s; }
        .step-card:nth-child(2) { animation-delay: 0.15s; }
        .step-card:nth-child(3) { animation-delay: 0.3s; }
        
        .team-member {
          animation: scaleInUp 0.5s ease-out forwards;
        }
        
        .team-member:nth-child(1) { animation-delay: 0s; }
        .team-member:nth-child(2) { animation-delay: 0.1s; }
        .team-member:nth-child(3) { animation-delay: 0.2s; }
        .team-member:nth-child(4) { animation-delay: 0.3s; }
      `}</style>
      
      {/* Hero Section */}
      <section className="bg-orange-400 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-5xl font-bold mb-6">Our Story</h1>
          <p className="hero-subtitle text-xl max-w-3xl mx-auto">
            Delivering happiness, one meal at a time since 2018
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className={`lg:w-1/2 transform transition-all duration-700 ${missionInView ? 'animate-fadeInLeft' : 'opacity-0'}`}>
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 duration-300">
                Order Now
              </button>
            </div>
            <div className={`lg:w-1/2 transform transition-all duration-700 ${missionInView ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Food delivery" 
                className="rounded-2xl shadow-2xl hover:shadow-orange-300/50 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 transform transition-all duration-700 ${statsInView ? 'animate-fadeInDown' : 'opacity-0'}`}>
            Numbers That Speak Volumes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card text-center p-6 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${statsInView ? 'animate-scaleInUp' : 'opacity-0'}`}
              >
                <div className="flex justify-center mb-4 text-4xl hover:scale-110 transition-transform duration-300">
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
      <section ref={valuesRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 transform transition-all duration-700 ${valuesInView ? 'animate-fadeInDown' : 'opacity-0'}`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`value-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-300 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${valuesInView ? 'animate-fadeInUp' : 'opacity-0'}`}
              >
                <div className="flex justify-center mb-4 hover:scale-125 transition-transform duration-300">
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
      <section ref={howItWorksRef} className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 transform transition-all duration-700 ${howItWorksInView ? 'animate-fadeInDown' : 'opacity-0'}`}>
            How Craving Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "1", title: "Browse & Choose", desc: "Explore hundreds of restaurants and cuisines in your area" },
              { number: "2", title: "Place Order", desc: "Customize your order and checkout securely" },
              { number: "3", title: "Enjoy Delivery", desc: "Track your order in real-time and enjoy fresh food" }
            ].map((step, idx) => (
              <div key={idx} className={`step-card text-center hover:bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${howItWorksInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-gray-800 transform transition-all duration-700 ${teamInView ? 'animate-fadeInDown' : 'opacity-0'}`}>
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-member text-center hover:bg-orange-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${teamInView ? 'animate-scaleInUp' : 'opacity-0'}`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100 hover:border-orange-500 transition-all duration-300 hover:scale-110"
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
      <section className="bg-linear-to-r from-orange-500 to-red-500 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInDown">Ready to Satisfy Your Cravings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Join millions of food lovers who trust Craving for their daily meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105 hover:shadow-lg duration-300 animate-fadeInLeft" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Download App
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105 hover:shadow-lg duration-300 animate-fadeInRight" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Join as Restaurant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About


