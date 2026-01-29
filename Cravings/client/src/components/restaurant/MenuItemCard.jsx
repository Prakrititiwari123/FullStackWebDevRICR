import React, { useState } from 'react';

const MenuItemCard = ({ item, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format price with INR symbol
  const formatPrice = (price) => {
    return `₹${parseInt(price).toLocaleString('en-IN')}`;
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Main Course': 'bg-red-100 text-red-800',
      'Appetizer': 'bg-blue-100 text-blue-800',
      'Dessert': 'bg-pink-100 text-pink-800',
      'Beverage': 'bg-green-100 text-green-800',
      'Snack': 'bg-yellow-100 text-yellow-800',
      'Breakfast': 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image || 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500'}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(item.category)}`}>
            {item.category}
          </span>
        </div>
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-bold text-xl bg-red-600 px-4 py-2 rounded-lg">
              OUT OF STOCK
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Name & Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 truncate">{item.name}</h3>
          <span className="text-2xl font-bold text-green-600">{formatPrice(item.price)}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              ⭐ {item.rating || 'New'}
            </span>
            <span className={`flex items-center gap-1 ${item.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
              {item.isAvailable ? '✅ Available' : '❌ Unavailable'}
            </span>
          </div>
          {item.preparationTime && (
            <span className="flex items-center gap-1">
              ⏱️ {item.preparationTime} min
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onEdit(item)}
            className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-medium"
          >
            <span>✏️</span>
            Edit
          </button>
          <button
            onClick={() => onDelete(item._id)}
            className="flex-1 bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 font-medium"
          >
            <span>🗑️</span>
            Delete
          </button>
        </div>

        {/* Hover Actions (Optional) */}
        {isHovered && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-xs text-gray-500">
              <span>ID: #{item._id?.slice(-6)}</span>
              <span>Added: {new Date(item.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;