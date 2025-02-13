
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Header/Card';
import { Link } from 'react-router-dom';
const DB_API = import.meta.env.VITE_API_BASE_URL;
function Latest() {
const [items, setItems] = useState([]);

useEffect(() => {
  const getItem = async () => {
    try {
      const response = await axios.get(`${DB_API}api/allitem`);
      const allItems = response.data;

      const randomItems = allItems
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0,4); 

      setItems(randomItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  getItem();
}, []);

  return (
    <>

      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 mb-8 text-shadow-md transition duration-500 ease-in-out transform hover:scale-105">
        Latest Recipes
      </h1>

      
      <div className="container carousel carousel-center rounded-box max-w space-x-4 flex-col lg:flex-row bg-gray-50 shadow-lg rounded-lg mb-8 p-10">
        {items.map((item) => (
          <div className="carousel-item" key={item._id}>
            <Card item={item} />
          </div>
        ))}
      </div>

      <Link to="/allReceipe" className="flex items-center justify-center mt-6 mb-10">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          View All Recipes
        </button>
      </Link>
    </>
  );
}

export default Latest;
