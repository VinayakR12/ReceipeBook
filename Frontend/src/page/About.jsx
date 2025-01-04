import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (

     <div id="About" class=" dark:bg-gray-900  hero bg-base-200 p-1 bg-yellow-100  rounded-xl h-auto">
    <div class="grid max-w-screen-xl px-5 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-14 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-8"> 
            <h6 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">Foodie Who Loves to Experiment with Reciepes </h6>
            <p class="max-w-2xl p-3 text-justify mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I believe that cooking should be fun and accessible to everyone. My recipes are designed to be easy to follow, delicious, and satisfying. Whether you're a seasoned home cook or just starting out, you'll find something to inspire you here.
Join me as I explore different cuisines, experiment with flavors, and create mouthwatering dishes. From quick and easy weeknight meals to impressive dinner party recipes, I've got you covered.
.</p>
            
            {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"> */}
            <Link to="/allReceipe">
  <button
    type="button"
    className="inline-flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    View Recipe
  </button>
</Link>


        </div>
        <div class=" lg:mt-0 lg:col-span-2 w-80 h-50 lg:flex">
            <img src="https://img.freepik.com/free-photo/view-cartoon-boy-chef-with-delicious-3d-pizza_23-2151017666.jpg" alt="mockup" className="p-1 rounded-lg shadow-2xl"/>
        </div>                
    </div>

    </div>
  )
}

export default About
