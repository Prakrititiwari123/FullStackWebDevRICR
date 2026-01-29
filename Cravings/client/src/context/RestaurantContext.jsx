import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as restaurantApi from "../config/restaurantApi.js";

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
  const { user } = useAuth();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.role === "restaurant") {
      fetchRestaurantProfile();
      fetchMenuItems();
    }
  }, [user]);

  const fetchRestaurantProfile = async () => {
    try {
      const response = await restaurantApi.getRestaurantProfile();
      setRestaurant(response.restaurant);
    } catch (error) {
      console.error("Failed to fetch restaurant profile:", error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await restaurantApi.getMenuItems();
      setMenuItems(response.menuItems || []);
    } catch (error) {
      console.error("Failed to fetch menu items:", error);
    }
  };

  const registerRestaurant = async (data) => {
    setLoading(true);
    try {
      const response = await restaurantApi.registerRestaurant(data);
      setRestaurant(response.restaurant);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || "Registration failed" };
    } finally {
      setLoading(false);
    }
  };

  const addMenuItem = async (data) => {
    try {
      const response = await restaurantApi.createMenuItem(data);
      setMenuItems([...menuItems, response.menuItem]);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || "Failed to add item" };
    }
  };

  const updateMenuItem = async (id, data) => {
    try {
      const response = await restaurantApi.updateMenuItem(id, data);
      setMenuItems(menuItems.map(item => 
        item._id === id ? response.menuItem : item
      ));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || "Failed to update item" };
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await restaurantApi.deleteMenuItem(id);
      setMenuItems(menuItems.filter(item => item._id !== id));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || "Failed to delete item" };
    }
  };

  const value = {
    restaurant,
    menuItems,
    loading,
    registerRestaurant,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    refreshData: () => {
      fetchRestaurantProfile();
      fetchMenuItems();
    },
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};