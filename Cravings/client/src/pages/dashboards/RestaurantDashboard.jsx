// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import RestaurantSidebar from '../../components/restaurant/RestaurantSidebar';
// import RestaurantOverview from '../../components/restaurant/RestaurantOverview';
// import RestaurantOrders from '../../components/restaurant/RestaurantOrders';
// import RestaurantMenu from '../../components/restaurant/RestaurantMenu';
// import { RestaurantContext } from '../../context/RestaurantContext';

// const RestaurantDashboard = () => {
//   const { restaurantData, fetchRestaurantData } = useContext(RestaurantContext);
//   const [activeTab, setActiveTab] = useState('overview');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('restaurantToken');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchRestaurantData();
//     }
//   }, []);

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return <RestaurantOverview />;
//       case 'orders':
//         return <RestaurantOrders />;
//       case 'menu':
//         return <RestaurantMenu />;
//       default:
//         return <RestaurantOverview />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <RestaurantSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="flex-1 p-6">
//         <div className="bg-white p-6 rounded-lg shadow mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Welcome, {restaurantData?.name || 'Restaurant Owner'}
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Manage your restaurant, orders, and menu here.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantDashboard;






import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantSidebar from '../../components/restaurant/RestaurantSidebar';
import RestaurantOverview from '../../components/restaurant/RestaurantOverview';
import RestaurantOrders from '../../components/restaurant/RestaurantOrders';
import RestaurantMenu from '../../components/restaurant/RestaurantMenu';
import { useRestaurant } from '../../context/RestaurantContext';
import { useAuth } from '../../context/AuthContext';

const RestaurantDashboard = () => {
  const { restaurant, menuItems } = useRestaurant();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'restaurant') {
      navigate('/login');
    }
  }, [user, navigate]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <RestaurantOverview restaurant={restaurant} menuItems={menuItems} />;
      case 'orders':
        return <RestaurantOrders />;
      case 'menu':
        return <RestaurantMenu />;
      default:
        return <RestaurantOverview restaurant={restaurant} menuItems={menuItems} />;
    }
  };

  if (!user || user.role !== 'restaurant') {
    return <div className="p-8 text-center">Loading or redirecting...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <RestaurantSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {restaurant?.name || 'Restaurant'}
              </h1>
              <p className="text-gray-600 mt-1">
                {restaurant?.cuisineType || 'Restaurant Owner Dashboard'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Restaurant ID</p>
              <p className="font-mono text-gray-700">#{restaurant?._id?.slice(-6) || 'N/A'}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;