// import React from 'react'
// import { Link } from 'react-router-dom'


// function Card({item}) {
//   return (
// <div> 
// <div className="container w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-500 ">
// <Link to={`/items/${item._id}`}>
//   <div className="relative">
//     <img className="p-2 rounded-t-lg" src={item?.thumbnail_image} alt="product image" />
//     <div className="absolute top-3 right-3 bg-blue-500 text-white rounded px-3 py-1">
//       {item?.more.difficulty}
//     </div>
//   </div>
//   <div className="px-5 pb-5">
//     <a href="#">
//       <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item?.name}</h3>
//     </a>
//     <br /><br />
//     <div className="flex items-center justify-between">
//       <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item?.category}</p>
//       <p className="">{item?.more.prep_time}</p>
//     </div>
//   </div>
// </Link>
// </div>

// </div>

//   )
// }

// export default Card





import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div>
      <div className="container w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 dark:bg-gray-900 dark:border-gray-700">
        <Link to={`/items/${item._id}`}>
          <div className="relative">
            <img
              className="p-2 rounded-t-lg object-cover h-48 w-full"
              src={item?.thumbnail_image}
              alt="product image"
            />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-bold rounded px-4 py-1 shadow-md">
              {/* {item?.more.difficulty || "Easy"} */}
              {item?.more?.difficulty ?? "Easy"}
            </div>
          </div>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white hover:text-blue-600 transition duration-300">
                {item?.name}
              </h3>
            </a>
            <br />
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full px-4 py-1 shadow-md">
                {item?.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {/* Prep Time: {item?.more.prep_time || "10 Min" } */}
                Prep Time: {item?.more?.prep_time ?? "10 Min"}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
