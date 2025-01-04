import React from 'react'

function Subscription() {
  return (
 
 <section class="bg-gray-100 px-6 py-10 rounded shadow-md mb-8">
  <h1 class="text-3xl font-bold text-center mb-4">Join Our Recipe Revolution!</h1>
  <p class="text-gray-700 text-justify mb-4">
    Want to transform your kitchen into a haven of delicious creations? Look no further! Sign up for our free weekly newsletter and embark on a culinary adventure with us.
 
    Fresh, Delicious Inspiration Every Week, Dive into a world of diverse recipes, from classic comfort food to global culinary delights. We cater to all skill levels, so whether you're a seasoned cook or just starting out, you'll find something to tantalize your taste buds.
    Expert Tips & Tricks, Master culinary techniques like a pro! Our newsletters are packed with valuable cooking advice, ingredient substitutions, and time-saving hacks to elevate your cooking game.
    </p>
    <div className="container justify-center flex p-5">
    <div className="flex justify-center items-center space-x-4">
  <input
    id="email"
    type="email"
    className="mt-1 block w-full sm:w-80 h-12 focus:shadow-md rounded-md py-2 px-4 text-gray-700 placeholder-gray-500"
    required
    autoComplete="username"
    placeholder="email@email.com"
  />
  <a
    href="#"
    className="w-[120px] sm:w-30 h-12 flex items-center justify-center bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 hover:shadow-lg transition duration-300"
  >
    Subscribe
  </a>
</div>

    
</div>

</section>
  )
}

export default Subscription
