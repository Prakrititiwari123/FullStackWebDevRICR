import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Story = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-r from-pink-50 to-rose-50 flex items-center justify-center">
        <div className="w-full max-w-6xl px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-pink-500 font-semibold text-lg">OUR STORY</span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Beauty Born from Passion
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Blush and Glow started with a simple belief: every person deserves 
                to feel confident and beautiful. We create premium cosmetics that 
                celebrate your natural beauty and enhance your unique features.
              </p>
              <button className="flex items-center gap-2 text-white bg-pink-500 hover:bg-pink-600 transition px-8 py-3 rounded-full font-semibold">
                Explore Our Collections
                <GoArrowUpRight />
              </button>
            </div>

            {/* Right Image/Illustration */}
            <div className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-6xl mb-4">✨</p>
                <p className="text-2xl font-semibold">Blush & Glow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower individuals with high-quality, cruelty-free cosmetics 
              that celebrate diversity and promote self-confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Natural Ingredients
              </h3>
              <p className="text-gray-700">
                We use premium, naturally-derived ingredients that are gentle 
                on your skin and kind to the environment.
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="bg-rose-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🐰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cruelty-Free
              </h3>
              <p className="text-gray-700">
                We're committed to never testing on animals. Every product is 
                ethically made with your conscience in mind.
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="bg-pink-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-700">
                Every product undergoes rigorous testing to ensure the highest 
                standards of quality and safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2018
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Founded</h3>
                <p className="text-gray-700 text-lg">
                  Blush and Glow was founded with a vision to revolutionize 
                  the beauty industry with sustainable, cruelty-free products.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2020
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Expanded Collection
                </h3>
                <p className="text-gray-700 text-lg">
                  Launched our comprehensive range of premium cosmetics, from 
                  foundations to luxury eyeshadows, all cruelty-free.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2022
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-700 text-lg">
                  Expanded to international markets, bringing our philosophy 
                  of beauty and sustainability to customers worldwide.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2024
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Community Leader
                </h3>
                <p className="text-gray-700 text-lg">
                  Became a trusted brand with thousands of satisfied customers 
                  who believe in sustainable beauty and self-confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Beauty Revolution
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Be part of a community that celebrates natural beauty, sustainability, 
            and self-confidence. Shop our curated collection today.
          </p>
          <button className="flex items-center justify-center gap-2 mx-auto text-pink-500 bg-white hover:bg-gray-100 transition px-8 py-3 rounded-full font-semibold">
            Shop Now
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Story;
