import React, { useState } from "react";
import { GoArrowUpRight, GoSearch } from "react-icons/go";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "10 Beauty Tips for Glowing Skin",
      category: "Skincare",
      date: "Feb 10, 2026",
      author: "Sarah Johnson",
      image: "✨",
      excerpt:
        "Discover the top 10 beauty secrets that will transform your skincare routine and give you that coveted glow.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Sustainable Beauty: The Future is Now",
      category: "Sustainability",
      date: "Feb 8, 2026",
      author: "Emma Davis",
      image: "🌿",
      excerpt:
        "Learn how to make eco-friendly choices in your beauty routine without compromising on quality.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Foundation Match Guide: Finding Your Perfect Shade",
      category: "Makeup",
      date: "Feb 5, 2026",
      author: "Lisa Martinez",
      image: "🧴",
      excerpt:
        "Master the art of choosing the right foundation shade for your skin tone with our comprehensive guide.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Bold Lips: Colors and Tips for Every Occasion",
      category: "Makeup",
      date: "Feb 1, 2026",
      author: "Jessica Lee",
      image: "💋",
      excerpt:
        "Explore the latest lip color trends and learn how to rock bold lips with confidence.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "The Science Behind Cruelty-Free Beauty",
      category: "Sustainability",
      date: "Jan 30, 2026",
      author: "Michael Chen",
      image: "🐰",
      excerpt:
        "Understanding why cruelty-free beauty matters and how it impacts both ethics and quality.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Eye Makeup for Beginners: Step-by-Step Tutorial",
      category: "Makeup",
      date: "Jan 27, 2026",
      author: "Anna Wilson",
      image: "✨",
      excerpt:
        "A complete beginner's guide to creating beautiful eye makeup looks with simple steps.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Natural Beauty: Less is More",
      category: "Skincare",
      date: "Jan 24, 2026",
      author: "Rachel Green",
      image: "🌱",
      excerpt:
        "Embrace your natural beauty with minimalist makeup routines that enhance rather than hide.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "6 min read",
    },
    {
      id: 8,
      title: "Top 5 Ingredients to Look for in Products",
      category: "Skincare",
      date: "Jan 21, 2026",
      author: "David Taylor",
      image: "🌿",
      excerpt:
        "Learn about the most beneficial ingredients for your skin and how to read product labels like a pro.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "7 min read",
    },
    {
      id: 9,
      title: "Contouring for Beginners: Sculpt Your Features",
      category: "Makeup",
      date: "Jan 18, 2026",
      author: "Sophie Brown",
      image: "🎭",
      excerpt:
        "Master the art of contouring with easy-to-follow techniques that work for every face shape.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readTime: "6 min read",
    },
  ];

  // Filter blogs
  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    "Makeup",
    "Skincare",
    "Sustainability",
    "Beauty Tips",
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Beauty Blog</h1>
          <p className="text-xl">
            Expert tips, trends, and insights for your beauty journey
          </p>
        </div>
      </div>

      {/* Main Blog Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-pink-500 transition pl-14"
              />
              <GoSearch className="absolute left-5 top-4 text-gray-400 text-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                        selectedCategory === category
                          ? "bg-pink-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-8 text-gray-600">
                <p>
                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1 ? "article" : "articles"} found
                </p>
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {/* Blog Image */}
                        <div className="bg-gradient-to-br from-pink-100 to-rose-100 h-64 md:h-auto flex items-center justify-center text-6xl">
                          {blog.image}
                        </div>

                        {/* Blog Content */}
                        <div className="md:col-span-2 p-8 flex flex-col justify-between">
                          {/* Category Badge */}
                          <div>
                            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                              {blog.category}
                            </span>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                              {blog.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                              {blog.excerpt}
                            </p>
                          </div>

                          {/* Meta Info and Button */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="text-sm text-gray-500 space-y-1">
                              <p className="font-semibold">{blog.author}</p>
                              <p>
                                {blog.date} • {blog.readTime}
                              </p>
                            </div>
                            <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold transition">
                              Read More
                              <GoArrowUpRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-xl p-12 text-center shadow-md">
                    <p className="text-2xl text-gray-600 mb-4">
                      No articles found
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                      className="text-pink-500 hover:text-pink-600 font-semibold"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for weekly beauty tips and exclusive content.
          </p>
          <div className="flex gap-4 md:flex-row flex-col max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none text-gray-900"
            />
            <button className="flex items-center justify-center gap-2 bg-white text-pink-500 hover:bg-gray-100 transition px-8 py-3 rounded-full font-semibold whitespace-nowrap">
              Subscribe
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
