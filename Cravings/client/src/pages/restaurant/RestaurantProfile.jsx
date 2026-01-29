// src/pages/restaurant/RestaurantProfile.jsx
import React, { useState, useEffect } from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { updateRestaurantProfile } from '../../config/restaurantApi';

const RestaurantProfile = () => {
  const { restaurant, refreshData } = useRestaurant();
  const [formData, setFormData] = useState({
    restaurantName: '',
    description: '',
    cuisine: [],
    address: {
      street: '',
      city: '',
      state: '',
      pinCode: '',
      landmark: '',
    },
    contact: {
      phone: '',
      alternatePhone: '',
      email: '',
    },
    timing: {
      opening: '10:00 AM',
      closing: '10:00 PM',
      daysOpen: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fill form when restaurant data loads
  useEffect(() => {
    if (restaurant) {
      setFormData({
        restaurantName: restaurant.restaurantName || '',
        description: restaurant.description || '',
        cuisine: restaurant.cuisine || [],
        address: {
          street: restaurant.address?.street || '',
          city: restaurant.address?.city || '',
          state: restaurant.address?.state || '',
          pinCode: restaurant.address?.pinCode || '',
          landmark: restaurant.address?.landmark || '',
        },
        contact: {
          phone: restaurant.contact?.phone || '',
          alternatePhone: restaurant.contact?.alternatePhone || '',
          email: restaurant.contact?.email || '',
        },
        timing: {
          opening: restaurant.timing?.opening || '10:00 AM',
          closing: restaurant.timing?.closing || '10:00 PM',
          daysOpen: restaurant.timing?.daysOpen || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      });
    }
  }, [restaurant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCuisineChange = (e) => {
    const values = e.target.value.split(',').map(v => v.trim()).filter(v => v);
    setFormData(prev => ({
      ...prev,
      cuisine: values
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await updateRestaurantProfile(formData);
      setMessage('Profile updated successfully!');
      refreshData(); // Refresh context data
    } catch (error) {
      setMessage('Failed to update profile: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  if (!restaurant) {
    return <div className="p-8 text-center">Loading restaurant profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Restaurant Profile</h1>
          <p className="text-gray-600 mt-2">Manage your restaurant details and information</p>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            restaurant.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : restaurant.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            Status: {restaurant.status?.toUpperCase()}
          </span>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 ${
            message.includes('successfully') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          {/* Restaurant Basic Info */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Basic Information</h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Restaurant Name *</label>
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Describe your restaurant..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Cuisine Types (comma separated)</label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine.join(', ')}
                onChange={handleCuisineChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Indian, Chinese, Italian"
              />
              <p className="text-sm text-gray-500 mt-1">Current: {formData.cuisine.join(', ') || 'None'}</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Address Details</h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Street</label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Pincode *</label>
                <input
                  type="text"
                  name="address.pinCode"
                  value={formData.address.pinCode}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Landmark</label>
                <input
                  type="text"
                  name="address.landmark"
                  value={formData.address.landmark}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Nearby landmark"
                />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="text"
                  name="contact.phone"
                  value={formData.contact.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Alternate Phone</label>
                <input
                  type="text"
                  name="contact.alternatePhone"
                  value={formData.contact.alternatePhone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="contact.email"
                value={formData.contact.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Timing */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Operating Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Opening Time</label>
                <input
                  type="text"
                  name="timing.opening"
                  value={formData.timing.opening}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="10:00 AM"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Closing Time</label>
                <input
                  type="text"
                  name="timing.closing"
                  value={formData.timing.closing}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="10:00 PM"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Days Open</label>
              <input
                type="text"
                name="timing.daysOpen"
                value={formData.timing.daysOpen.join(', ')}
                onChange={(e) => {
                  const days = e.target.value.split(',').map(d => d.trim());
                  setFormData(prev => ({
                    ...prev,
                    timing: { ...prev.timing, daysOpen: days }
                  }));
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Mon, Tue, Wed, Thu, Fri, Sat, Sun"
              />
              <p className="text-sm text-gray-500 mt-1">Current: {formData.timing.daysOpen.join(', ')}</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Updating...
                  </>
                ) : (
                  'Update Profile'
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Restaurant Info Summary */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-4">Restaurant Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Restaurant ID</h4>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded">{restaurant._id}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Owner</h4>
              <p>{restaurant.owner?.fullName || 'Not specified'}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Registration Date</h4>
              <p>{new Date(restaurant.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Last Updated</h4>
              <p>{new Date(restaurant.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ IMPORTANT: Add this default export
export default RestaurantProfile;