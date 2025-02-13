
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../components/Header/Card';
// import { Link } from 'react-router-dom';
// const DB_API = import.meta.env.VITE_API_BASE_URL;
// function Latest() {
//   // const [items, setItems] = useState([]);

//   // useEffect(() => {
//   //   const getItem = async () => {
//   //     const response = await axios.get(`${DB_API}api/allitem`);
//   //     setItems(response.data);
//   //   };
//     getItem();
//   // }, []);
// const [items, setItems] = useState([]);

// useEffect(() => {
//   const getItem = async () => {
//     try {
//       const response = await axios.get(`${DB_API}api/allitem`);
//       const allItems = response.data;

//       // Shuffle the array and take only 6 random items
//       const randomItems = allItems
//         .sort(() => 0.5 - Math.random()) // Shuffle array
//         .slice(0, 6); // Take first 6 items

//       setItems(randomItems);
//     } catch (error) {
//       console.error("Error fetching items:", error);
//     }
//   };

//   getItem();
// }, []);

//   return (
//     <>

//       <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 mb-8 text-shadow-md transition duration-500 ease-in-out transform hover:scale-105">
//         Latest Recipes
//       </h1>

      
//       <div className="container carousel carousel-center rounded-box max-w space-x-4 flex-col lg:flex-row bg-gray-50 shadow-lg rounded-lg mb-8 p-10">
//         {items.map((item) => (
//           <div className="carousel-item" key={item._id}>
//             <Card item={item} />
//           </div>
//         ))}
//       </div>

//       <Link to="/allReceipe" className="flex items-center justify-center mt-6 mb-10">
//         <button
//           type="button"
//           className="text-white bg-gradient-to-r from-cyan-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           View All Recipes
//         </button>
//       </Link>
//     </>
//   );
// }

// export default Latest;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Header/Card";
import { Link } from "react-router-dom";

const DB_API = import.meta.env.VITE_API_BASE_URL;

function Latest() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(`${DB_API}api/allitem`);

        // Shuffle and get only 6 random recipes
        const randomItems = response.data
          .sort(() => 0.5 - Math.random())
          .slice(0, 6);

        setItems(randomItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    getItem();
  }, []);

  return (
    <>
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 mb-6">
        Latest Recipes
      </h1>

      {/* Carousel Wrapper - Keeps everything inside screen */}
      <div className="flex justify-center w-full">
        <div
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 p-4 
                     w-[98%] max-w-[1200px] mx-auto 
                     md:max-w-4xl 
                     sm:max-w-[90%] sm:px-2"
          style={{
            scrollbarWidth: "none", // Hide scrollbar (Firefox)
            WebkitOverflowScrolling: "touch", // Smooth scrolling (iOS)
          }}
        >
          {items.map((item) => (
            <div
              key={item._id}
              className="snap-center shrink-0 w-[180px] h-[280px] sm:w-[160px] sm:h-[260px] bg-white rounded-lg shadow-md"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* View All Recipes Button */}
      <div className="flex justify-center mt-6 mb-10">
        <Link to="/allReceipe">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Recipes
          </button>
        </Link>
      </div>
    </>
  );
}

export default Latest;
