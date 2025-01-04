

import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ProductInfo() {
    const item = useLoaderData();

    const totaltime = (s) => {
        let timeArray = s?.split(" ");
        return parseInt(timeArray[0]) || 0; // Default to 0 if the value is invalid
    };

    const prepTimeMinutes = item?.more?.prep_time ? totaltime(item.more.prep_time) : 0;
    const cookTimeMinutes = item?.more?.cook_time ? totaltime(item.more.cook_time) : 0;
    const Total = prepTimeMinutes + cookTimeMinutes;

    function Instructions() {
        const instructions = item?.instructions || ''; // Ensure instructions exist
        const combinedText = instructions.split(". ").reduce((combined, sentence, index) => {
            if (index % 2 === 0) {
                combined.push(sentence);
            } else {
                combined[combined.length - 1] += ` ${sentence}\n`;
            }
            return combined;
        }, []).join("");
        return (
            <pre className="text-lg text-gray-600">{combinedText}</pre>
        );
    }

    return (<>
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-white py-10">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Recipe Header */}
                <div className="text-center mb-10">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text pb-4 bg-gradient-to-r from-yellow-400 to-red-600 mb-4">
                        {item?.name || 'Recipe Name'}
                    </h1>
                    <p className="text-2xl text-gray-900 pt-4">
    Enjoy a delicious and nourishing experience with dishes that are perfect for any time of day. Recipe is carefully crafted to bring out the best in flavor, nutrition, and satisfaction, ensuring you have the perfect meal to suit any occasion or craving.
</p>

                </div>

                {/* Recipe Image */}
                <div className="mb-10 flex justify-center">
                    <div className="relative">
                        <img
                            src={item?.thumbnail_image || '/default-image.jpg'} // Default fallback image
                            alt="Food"
                            className="rounded-xl shadow-xl max-w-full h-[400px] object-cover transform transition duration-500 hover:scale-105 hover:shadow-2xl border-amber-700"
                        />
                    </div>
                </div>

                {/* Ingredients and Preparation Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Ingredients */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ingredients</h2>
                        <ul className="space-y-3">
                            {item?.ingredients?.map((ingredient, index) => (
                                <li key={index} className="flex justify-between text-lg text-gray-700">
                                    <span className="font-medium text-gray-600">{ingredient?.name}:</span>
                                    <span className="font-bold text-gray-800">{ingredient?.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Preparation Time */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Preparation Time</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-lg text-gray-700">
                                <span className="font-medium text-gray-600">Total Time:</span>
                                <span className="font-bold text-gray-800">{Total || "25"} Minutes</span>
                            </li>
                            <li className="flex justify-between text-lg text-gray-700">
                                <span className="font-medium text-gray-600">Preparation Time:</span>
                                <span className="font-bold text-gray-800">{item?.more?.prep_time || "15 Minutes"}</span>
                            </li>
                            <li className="flex justify-between text-lg text-gray-700">
                                <span className="font-medium text-gray-600">Cooking Time:</span>
                                <span className="font-bold text-gray-800">{item?.more?.cook_time || "10 Minutes"}</span>
                            </li> 
                        </ul>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-2">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Instructions</h2>
                    <div className="text-gray-700">{Instructions()}</div>
                </div>
            </div>
        </div>
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-white py-4 pb-0 mb-0">
            <div className="max-w-screen-xl mx-auto px-6">
                
                {/* Comments Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-1 hover:shadow-2xl transition duration-300">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">User Reviews</h2>

                    {/* Comments List */}
                    <ul className="space-y-6">
                        {item?.comments?.map((comments, index) => (
                            <li key={index} className="flex items-center space-x-6 text-lg text-gray-800 hover:bg-gray-100 rounded-lg p-4 transition duration-300 ease-in-out">
                               
                                <img
                                    src={comments?.userImage || 'https://ui-avatars.com/api/?name=User'} 
                                    alt="User"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 hover:border-indigo-700 transition duration-300"
                                />

                                {/* Comment Details */}
                                <div className="flex flex-col">
                                    <span className="font-semibold text-indigo-600">{comments?.user}:</span>
                                    <span className="font-medium text-gray-700">{comments?.comment}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
               
        </>
    );
}

export default ProductInfo;
