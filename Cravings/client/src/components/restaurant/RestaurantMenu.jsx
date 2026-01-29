import React, { useState } from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import MenuItemForm from './MenuItemForm';
import MenuItemCard from './MenuItemCard';

const RestaurantMenu = () => {
  const { menuItems, addMenuItem, deleteMenuItem, updateMenuItem } = useRestaurant();
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = async (newItem) => {
    const result = await addMenuItem(newItem);
    if (result.success) {
      setShowForm(false);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleUpdateItem = async (updatedItem) => {
    if (editingItem) {
      await updateMenuItem(editingItem._id, updatedItem);
      setEditingItem(null);
      setShowForm(false);
    }
  };

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await deleteMenuItem(itemId);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">🍽️ Menu Management</h2>
          <p className="text-gray-600">Total {menuItems.length} items in your menu</p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            setShowForm(!showForm);
          }}
          className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 flex items-center gap-2 font-medium"
        >
          {showForm ? '❌ Cancel' : '➕ Add New Item'}
        </button>
      </div>

      {showForm && (
        <MenuItemForm
          onSubmit={editingItem ? handleUpdateItem : handleAddItem}
          initialData={editingItem}
          isEditing={!!editingItem}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}

      {menuItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-bold text-gray-700">No menu items yet</h3>
          <p className="text-gray-500 mt-2">Start by adding your first dish!</p>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create First Item
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Category Filter (Optional) */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', 'Main Course', 'Appetizer', 'Dessert', 'Beverage', 'Snack']
                .map(category => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 whitespace-nowrap"
                  >
                    {category}
                  </button>
                ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuItemCard
                key={item._id}
                item={item}
                onEdit={() => handleEditItem(item)}
                onDelete={() => handleDelete(item._id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;