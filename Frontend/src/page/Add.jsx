import React, { useState, useContext } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const DB_API = import.meta.env.VITE_API_BASE_URL;

const AddItemForm = () => {
  const { isAuthenticated } = useContext(AuthContext); // Check if the user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  // State to manage form data
  const [formData, setFormData] = useState({
    menuId: "",
    name: "",
    thumbnail_image: "",
    category: "",
    instructions: "",
    tags: "",
    ingredients: [{ name: "", quantity: "" }],
    comments: [{ user: "", comment: "" }],
  });

  // Handle input changes for simple fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle changes for ingredient fields
  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][name] = value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  // Handle changes for comment fields
  const handleCommentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedComments = [...formData.comments];
    updatedComments[index][name] = value;
    setFormData({ ...formData, comments: updatedComments });
  };

  // Add a new ingredient field
  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: "", quantity: "" }],
    });
  };

  // Add a new comment field
  const addComment = () => {
    setFormData({
      ...formData,
      comments: [...formData.comments, { user: "", comment: "" }],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform tags into an array
    const postData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()),  // Trim to remove extra spaces
    };

    try {
      const response = await axios.post(`${DB_API}api/add-item`, postData);
      alert("Item added successfully!");
      console.log("Response from server:", response.data);

      // Clear the form
      setFormData({
        menuId: "",
        name: "",
        thumbnail_image: "",
        category: "",
        instructions: "",
        tags: "",
        ingredients: [{ name: "", quantity: "" }],
        comments: [{ user: "", comment: "" }],
      });
    } catch (error) {
      alert("Failed to add item. Please check your input.");
      console.error("Error from server:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-400 to-orange-300 border rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Add New Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Menu ID */}
        <div>
          <label className="block text-white font-medium mb-2">Menu ID</label>
          <input
            type="number"
            name="menuId"
            value={formData.menuId}
            onChange={handleChange}
            placeholder="Enter Menu ID"
            className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-white font-medium mb-2">Item Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Item Name"
            className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-white font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="thumbnail_image"
            value={formData.thumbnail_image}
            onChange={handleChange}
            placeholder="Enter Image URL"
            className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Category */}
        <div>
  <label className="block text-white font-medium mb-2">Category</label>
  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    
    className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    required
  >
    <option value="" className="text-gray-600" disabled>Select a Category</option>
    <option value="Entrees">Entrees</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dessert">Dessert</option>
    <option value="Drinks">Drinks</option>
    <option value="Sides">Sides</option>
  </select>
</div>


        {/* Instructions */}
        <div>
          <label className="block text-white font-medium mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Enter Instructions"
            className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-white font-medium mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Enter Tags (comma-separated)"
            className="w-full border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-white font-medium mb-2">Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                name="name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, e)}
                placeholder="Ingredient Name"
                className="w-1/2 border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, e)}
                placeholder="Quantity"
                className="w-1/2 border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Add Ingredient
          </button>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-white font-medium mb-2">Comments</label>
          {formData.comments.map((comment, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                name="user"
                value={comment.user}
                onChange={(e) => handleCommentChange(index, e)}
                placeholder="User"
                className="w-1/2 border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="comment"
                value={comment.comment}
                onChange={(e) => handleCommentChange(index, e)}
                placeholder="Comment"
                className="w-1/2 border-2 border-blue-600 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addComment}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
          >
            Add Comment
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded-md w-full hover:bg-orange-600 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
