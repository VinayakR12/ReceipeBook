import React from 'react'
import { Link } from 'react-router-dom'
function FeaturedSection() {
  return (
    <div className="hero bg-base-200 p-3 bg-yellow-100  rounded-xl h-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://as1.ftcdn.net/v2/jpg/01/22/24/10/1000_F_122241049_qnN9k2gBz9WG8QZUauiAyrI3xtr7NmB4.jpg"
      className="w-120 h-60 p-1 rounded-lg shadow-2xl" />

    <div>
      <h1 className="text-5xl font-bold">Supreme Symphony Pizza</h1>
      
      <p className="py-6">
      A burst of fresh flavors with ripe tomatoes, creamy mozzarella, and fragrant basil.Spicy pepperoni slices, tangy tomato sauce, and a generous layer of melted cheese.
      A harmonious blend of savory meats, crisp vegetables, and rich cheese.
      </p>
      <Link to='/allReceipe'>
      <button className="btn btn-outline btn-yellow">View Receipe</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default FeaturedSection
