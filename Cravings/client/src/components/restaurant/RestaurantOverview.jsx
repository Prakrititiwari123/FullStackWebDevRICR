import React from 'react';

const RestaurantOverview = ({ restaurant, menuItems }) => {
  // Calculate stats
  const stats = {
    totalMenuItems: menuItems?.length || 0,
    availableItems: menuItems?.filter(item => item.isAvailable)?.length || 0,
    averageRating: restaurant?.averageRating || 0,
    totalOrders: restaurant?.totalOrders || 0,
  };

  const statCards = [
    {
      title: 'Total Menu Items',
      value: stats.totalMenuItems,
      icon: '🍽️',
      color: 'blue',
      desc: 'Items in your menu',
    },
    {
      title: 'Available Items',
      value: stats.availableItems,
      icon: '✅',
      color: 'green',
      desc: 'Currently available',
    },
    {
      title: 'Average Rating',
      value: stats.averageRating.toFixed(1),
      icon: '⭐',
      color: 'yellow',
      desc: 'Out of 5',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: '📦',
      color: 'purple',
      desc: 'All time orders',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Restaurant Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.desc}</p>
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">ℹ️ Restaurant Information</h3>
          <div className="space-y-3">
            <InfoRow label="Name" value={restaurant?.name} />
            <InfoRow label="Email" value={restaurant?.email} />
            <InfoRow label="Phone" value={restaurant?.phone} />
            <InfoRow label="Address" value={restaurant?.address} />
            <InfoRow label="Cuisine Type" value={restaurant?.cuisineType} />
            <InfoRow label="Opening Hours" value={restaurant?.openingHours} />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Quick Actions</h3>
          <div className="space-y-4">
            <ActionButton
              icon="➕"
              label="Add New Menu Item"
              description="Add a new dish to your menu"
              onClick={() => window.location.hash = '#menu'}
            />
            <ActionButton
              icon="📊"
              label="View Orders"
              description="Check and manage orders"
              onClick={() => window.location.hash = '#orders'}
            />
            <ActionButton
              icon="✏️"
              label="Edit Profile"
              description="Update restaurant details"
              onClick={() => window.location.href = '/restaurant/profile'}
            />
            <ActionButton
              icon="📋"
              label="View Menu"
              description="See your complete menu"
              onClick={() => window.location.hash = '#menu'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-800">{value || 'Not set'}</span>
  </div>
);

const ActionButton = ({ icon, label, description, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition group"
  >
    <div className="flex items-center">
      <span className="text-2xl mr-3">{icon}</span>
      <div>
        <p className="font-bold text-gray-800">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="ml-auto text-gray-400 group-hover:text-blue-500">→</span>
    </div>
  </button>
);

export default RestaurantOverview;