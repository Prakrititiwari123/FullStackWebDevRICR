// src/pages/restaurant/RestaurantAnalytics.jsx
import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const RestaurantAnalytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  const salesData = [1200, 1900, 1500, 2200, 1800, 2500, 3000];
  const ordersData = [15, 22, 18, 25, 20, 28, 32];
  const categoryData = [30, 25, 20, 15, 10];
  const categoryLabels = ['Main Course', 'Appetizer', 'Dessert', 'Beverage', 'Snack'];

  // Sales Chart Data
  const salesChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales (₹)',
        data: salesData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
      },
    ],
  };

  // Orders Chart Data
  const ordersChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: ordersData,
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1,
      },
    ],
  };

  // Category Distribution Data
  const categoryChartData = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Restaurant Performance',
      },
    },
  };

  const stats = {
    totalRevenue: 12500,
    totalOrders: 85,
    avgOrderValue: 147,
    popularItem: 'Butter Chicken',
    revenueChange: 12,
    orderChange: 8,
    aovChange: 5,
  };

  const topItems = [
    { name: 'Butter Chicken', revenue: 3200, quantity: 45 },
    { name: 'Biryani', revenue: 2800, quantity: 38 },
    { name: 'Paneer Tikka', revenue: 2100, quantity: 52 },
    { name: 'Naan', revenue: 1800, quantity: 120 },
    { name: 'Lassi', revenue: 1500, quantity: 75 },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">📈 Analytics Dashboard</h2>
          <p className="text-gray-600">Monitor your restaurant performance</p>
        </div>
        <div className="flex gap-2">
          {['day', 'week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg capitalize ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          change={stats.revenueChange}
          icon="💰"
          color="green"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          change={stats.orderChange}
          icon="📦"
          color="blue"
        />
        <StatCard
          title="Avg Order Value"
          value={`₹${stats.avgOrderValue}`}
          change={stats.aovChange}
          icon="📊"
          color="purple"
        />
        <StatCard
          title="Popular Item"
          value={stats.popularItem}
          icon="🔥"
          color="red"
          isText
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-4">Sales Trend (Last 7 Days)</h3>
          <div className="h-64">
            <Line data={salesChartData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-4">Orders Trend (Last 7 Days)</h3>
          <div className="h-64">
            <Bar data={ordersChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-4">Category Distribution</h3>
          <div className="h-64">
            <Pie data={categoryChartData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-4">Top Selling Items</h3>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.quantity} sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">₹{item.revenue}</p>
                  <p className="text-sm text-gray-500">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">📋 Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Best Day</p>
            <p className="text-xl font-bold">Sunday</p>
            <p className="text-sm text-green-600">₹3,000 revenue</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Peak Time</p>
            <p className="text-xl font-bold">7-9 PM</p>
            <p className="text-sm text-blue-600">Most orders</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Avg Preparation</p>
            <p className="text-xl font-bold">25 mins</p>
            <p className="text-sm text-purple-600">Per order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Stats Card
const StatCard = ({ title, value, change, icon, color, isText = false }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAnalytics;