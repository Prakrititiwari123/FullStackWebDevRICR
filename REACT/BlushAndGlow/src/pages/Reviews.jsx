import React, { useState } from "react";
import { GoArrowUpRight, GoStar, GoStarFill } from "react-icons/go";

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Customer Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "Feb 10, 2026",
      title: "Absolutely Love It!",
      text: "The Radiant Glow Foundation is absolutely amazing! It blends perfectly and lasts all day. I couldn't ask for a better foundation. Highly recommend!",
      product: "Radiant Glow Foundation",
      verified: true,
      helpful: 234,
    },
    {
      id: 2,
      name: "Emily Chen",
      rating: 5,
      date: "Feb 8, 2026",
      title: "Best Purchase Ever!",
      text: "All the products I ordered are incredible. The quality is outstanding and the prices are fair. Will definitely be a loyal customer!",
      product: "Rose Blush Palette",
      verified: true,
      helpful: 189,
    },
    {
      id: 3,
      name: "Jessica Lee",
      rating: 4,
      date: "Feb 5, 2026",
      title: "Great Quality, Great Price",
      text: "Very satisfied with my purchase. The mascara is long-lasting and doesn't clump. Great value for money!",
      product: "Lash Volumizer Mascara",
      verified: true,
      helpful: 156,
    },
    {
      id: 4,
      name: "Amanda Martinez",
      rating: 5,
      date: "Feb 1, 2026",
      title: "Love the Formula",
      text: "The lipstick stays put all day and feels comfortable on the lips. Not drying at all. Perfect shade selection!",
      product: "Velvet Matte Lipstick",
      verified: true,
      helpful: 203,
    },
    {
      id: 5,
      name: "Michael Brown",
      rating: 4,
      date: "Jan 30, 2026",
      title: "Awesome Experience",
      text: "Fast shipping and excellent packaging. The products are exactly as described. Very happy with my order!",
      product: "Shimmer Eye Shadow",
      verified: true,
      helpful: 142,
    },
    {
      id: 6,
      name: "Rachel Williams",
      rating: 5,
      date: "Jan 27, 2026",
      title: "Perfect for Sensitive Skin",
      text: "I have very sensitive skin and was worried, but these products work amazingly for me. No irritation whatsoever!",
      product: "Radiant Glow Foundation",
      verified: true,
      helpful: 278,
    },
    {
      id: 7,
      name: "David Taylor",
      rating: 5,
      date: "Jan 24, 2026",
      title: "Cruelty-Free and Quality",
      text: "Impressed by the commitment to cruelty-free products without compromising on quality. Definitely buying again!",
      product: "Rose Blush Palette",
      verified: true,
      helpful: 195,
    },
    {
      id: 8,
      name: "Luna Davis",
      rating: 4,
      date: "Jan 21, 2026",
      title: "Great Everyday Makeup",
      text: "Perfect for everyday wear. The colors are beautiful and the staying power is impressive. Worth every penny!",
      product: "Contour Palette",
      verified: true,
      helpful: 128,
    },
    {
      id: 9,
      name: "Sophie Anderson",
      rating: 5,
      date: "Jan 18, 2026",
      title: "Customer Service is Top Notch",
      text: "Had a question about my order and the customer service team responded immediately. The products are fantastic too!",
      product: "Primer Setting Spray",
      verified: true,
      helpful: 267,
    },
  ];

  // Filter reviews
  const filteredReviews = reviews.filter((review) => {
    const matchesRating =
      selectedRating === "All" || review.rating === parseInt(selectedRating);
    return matchesRating;
  });

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "helpful") return b.helpful - a.helpful;
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return 0;
  });

  // Calculate average rating
  const averageRating =
    (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  // Rating distribution
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            {i < rating ? (
              <GoStarFill className="text-yellow-400" size={18} />
            ) : (
              <GoStar className="text-gray-300" size={18} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <div className="bg-pink-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl">See what thousands of happy customers are saying about us</p>
        </div>
      </div>

      {/* Main Review Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Rating Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 bg-gray-50 rounded-xl p-8">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-500 mb-2">
                {averageRating}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="md:col-span-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-4 mb-3">
                  <span className="w-12 text-sm font-medium text-gray-700">
                    {rating} star
                  </span>
                  <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all"
                      style={{
                        width: `${(ratingDistribution[rating] / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600 text-right">
                    {ratingDistribution[rating]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 justify-between items-start md:items-center">
            {/* Rating Filter */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Filter by:</span>
              <div className="flex gap-2">
                {["All", "5", "4", "3", "2", "1"].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                      selectedRating === rating
                        ? "bg-pink-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {rating === "All" ? "All" : `${rating}★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              >
                <option value="newest">Newest</option>
                <option value="helpful">Most Helpful</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {sortedReviews.length > 0 ? (
              sortedReviews.map((review) => (
                <div
                  key={review.id}
                  className="border-2 border-gray-200 rounded-xl p-8 hover:border-pink-300 hover:shadow-md transition"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {review.name}
                        </h3>
                        {review.verified && (
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {renderStars(review.rating)}
                      <span className="text-xs text-gray-500">
                        {review.product}
                      </span>
                    </div>
                  </div>

                  {/* Review Content */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {review.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.text}
                  </p>

                  {/* Helpful Footer */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <button className="text-gray-500 hover:text-pink-500 transition text-sm font-medium">
                      👍 Helpful ({review.helpful})
                    </button>
                    <button className="text-gray-500 hover:text-pink-500 transition text-sm font-medium">
                      👎 Not Helpful
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No reviews found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg mb-8">
            Have you tried our products? We'd love to hear your feedback!
          </p>
          <button className="flex items-center justify-center gap-2 mx-auto text-pink-500 bg-white hover:bg-gray-100 transition px-8 py-3 rounded-full font-semibold">
            Write a Review
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
