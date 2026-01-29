import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RestaurantSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', path: '/restaurant/dashboard' },
    { id: 'orders', label: 'Orders', icon: '📦', path: '/restaurant/dashboard#orders' },
    { id: 'menu', label: 'Menu', icon: '🍽️', path: '/restaurant/dashboard#menu' },
    { id: 'profile', label: 'Profile', icon: '👤', path: '/restaurant/profile' },
    { id: 'analytics', label: 'Analytics', icon: '📈', path: '/restaurant/analytics' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Set active tab based on URL hash or path
  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'orders' || hash === 'menu') {
      setActiveTab(hash);
    } else if (location.pathname.includes('/profile')) {
      setActiveTab('profile');
    }
  }, [location, setActiveTab]);

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black text-white h-screen p-6 flex flex-col">
      {/* Logo/Header */}
      <div className="mb-10">
        <Link to="/restaurant/dashboard" className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <span className="text-2xl">🍽️</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Restaurant Panel</h1>
            <p className="text-xs text-gray-400">Manage your business</p>
          </div>
        </Link>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <Link
                  to={tab.path}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'hover:bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-800 space-y-4">
        {/* Quick Stats */}
        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs text-gray-400">Quick Links</p>
          <div className="flex justify-between mt-2">
            <Link 
              to="/" 
              className="text-sm hover:text-blue-400 transition"
            >
              🏠 Home
            </Link>
            <Link 
              to="/restaurant/help" 
              className="text-sm hover:text-blue-400 transition"
            >
              ❓ Help
            </Link>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 p-3 bg-red-600 hover:bg-red-700 rounded-xl transition font-medium"
        >
          <span>🚪</span>
          Logout
        </button>

        {/* Status Badge */}
        <div className="text-center text-xs text-gray-500 mt-4">
          <p>Restaurant Panel v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSidebar;