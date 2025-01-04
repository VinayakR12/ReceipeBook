import { useState } from 'react'
export default function Top() {
  

  return (

<div className="px-5 xl:10px md:w-1/2 mx-auto mb-10 text-center">
  <h1 style={{ lineHeight: '1.2' }}className="mt-6 mb-10 text-4xl xl:text-5xl text-center font-bold text-black leading-normal ">
    A Blog template made for Food <span className="text-orange-500">Influencers</span>
  </h1>
  <form action="/Search">
    <div className="flex items-center mx-auto">
      <input type="text" name='query' required className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search..." />
      <button type="submit" className="ml-2 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">Search</button>
    </div>
  </form>
</div>

  )
}
