
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import CategoryWrap from './CategoryWrap';
import Card from '../../components/Header/Card';

const DB_API = import.meta.env.VITE_API_BASE_URL;

function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${DB_API}api/categories/${category}`);
        setItems(response.data);
      } catch (e) {
        setError('Failed to fetch category data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50 px-6 lg:px-12 py-10">
<h1 className="text-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-orange-600 capitalize font-serif transition duration-300 ease-in-out transform hover:scale-110 hover:text-shadow-xl"
 style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' }}
>
  {category}
</h1>


      <CategoryWrap />
      <div className="px-6 lg:px-12 py-10">
        {loading ? (
          <div className="text-center text-lg text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : items.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500">No items found in this category.</div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
