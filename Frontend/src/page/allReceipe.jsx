import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Header/Card';
const DB_API = import.meta.env.VITE_API_BASE_URL;

function AllRecipes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const response = await axios.get(`${DB_API}api/allitem`);
      setItems(response.data);
    };
    getItem();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F0FFFF] via-[#7DF9FF] to-white py-10">
    {/* Heading with dark text and large font size with hover effect */}
    <h1 className="text-6xl font-extrabold text-blue-800 text-center mb-10 hover:text-[#00008B] transition duration-500 ease-in-out transform hover:scale-110">
      All Recipes
    </h1>




      {/* Carousel/Recipe Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-3 hover:bg-gradient-to-br from-blue-600 to-orange-400 p-6">
            <Card item={item} />
          </div>
        ))}
      </div>

    
    </div>
  );
}



export default AllRecipes;
