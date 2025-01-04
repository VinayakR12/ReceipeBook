import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-gray-800">

      {/* Header Section */}
      <header className="py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight text-white mb-4">Welcome to the Recipe Book Web App</h1>
          <p className="text-xl font-light text-white max-w-3xl mx-auto">Your gateway to exploring delicious recipes, cooking tips, and sharing culinary creativity! Let's create something amazing together in the kitchen.</p>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-10 px-10 md:px-12 bg-gradient-to-r from-white to-orange-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-blue-700 mb-6">About Us</h2>

          {/* Card for About Us */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 mx-auto max-w-4xl hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
            <p className="text-lg text-gray-700 mb-4">
              At Recipe Book Web App, we are passionate about food, cooking, and sharing delicious recipes with the world. Our platform is built with the goal of making the process of discovering, creating, and sharing recipes as easy and enjoyable as possible. Whether you're an amateur home cook or an experienced chef, our app is designed to inspire and empower you to get creative in the kitchen.
            </p>
            <p className="text-lg text-gray-700">
              We believe that food is more than just sustenance; it's a way to connect with others, celebrate culture, and express creativity. That's why we've created a platform where you can find a wide variety of recipes – from quick weeknight dinners to gourmet meals – all shared by a community of passionate cooks who love to experiment with new ingredients and flavors.
            </p>
          </div>

          {/* Card for Our Story */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 mx-auto max-w-4xl hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Story</h3>
            <p className="text-lg text-gray-700">
              The idea for Recipe Book Web App was born from a simple desire to make cooking fun, easy, and accessible for everyone. As food lovers ourselves, we wanted to build a space where people could find new recipes, discover different cooking techniques, and share their own culinary creations. Our platform is not just about following recipes; it's about sparking creativity and inspiring people to experiment with food in their own unique way.
            </p>
          </div>

          {/* Card for What We Offer */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 mx-auto max-w-4xl hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-700 mb-4">
              Recipe Book Web App offers a vast collection of recipes for every taste and skill level. Whether you're looking for vegan options, gluten-free dishes, or indulgent comfort foods, we have something for you. Our recipes are curated to provide step-by-step instructions, detailed ingredient lists, and tips for making each dish a success.
            </p>
            <p className="text-lg text-gray-700">
              In addition to a rich recipe collection, our platform allows you to save your favorite dishes, create personalized cookbooks, and share recipes with friends and family. Join a community of like-minded food enthusiasts and become part of a global network of cooks who are passionate about food and creativity.
            </p>
          </div>

          {/* Vision and Values Section */}
          <div className="flex flex-wrap justify-center gap-8">

            {/* Vision Card */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                We strive to bring people together through food. Our vision is to provide a platform where cooking becomes more than just a task – it’s a joyful experience. From easy weeknight meals to gourmet creations, we aim to make every cook feel like a pro.
              </p>
            </div>

            {/* Values Card */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Our Values</h3>
              <p className="text-gray-700">
                At the heart of our platform are three core values: Creativity, Inclusivity, and Passion for Cooking. We believe everyone should have the opportunity to explore, create, and share the love of food. Let’s embrace diversity in the kitchen, share our culinary experiences, and celebrate food as an expression of joy.
              </p>
            </div>

          </div>

        </div>
      </section>

     
    </div>
  );
}

export default AboutPage;
