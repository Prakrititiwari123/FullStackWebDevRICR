import api from "./config/api";

// Register as Restaurant Owner
export const registerRestaurant = async (data) => {
  const response = await api.post("/restaurant/register", data);
  return response.data;
};

// Get Restaurant Profile
export const getRestaurantProfile = async () => {
  const response = await api.get("/restaurant/profile");
  return response.data;
};

// Update Restaurant Profile
export const updateRestaurantProfile = async (data) => {
  const response = await api.put("/restaurant/profile", data);
  return response.data;
};

// Menu Items API
export const createMenuItem = async (data) => {
  const response = await api.post("/menu", data);
  return response.data;
};

export const getMenuItems = async () => {
  const response = await api.get("/menu");
  return response.data;
};

export const updateMenuItem = async (id, data) => {
  const response = await api.put(`/menu/${id}`, data);
  return response.data;
};

export const deleteMenuItem = async (id) => {
  const response = await api.delete(`/menu/${id}`);
  return response.data;
};