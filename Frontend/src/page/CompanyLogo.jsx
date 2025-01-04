import React from 'react'
import Food1 from '../public/Food1.jpg'
import Food2 from '../public/Food2.jpg'
function CompanyLogo() {
  return (
    <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
        <h3 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Trusted by the World's most innovative teams</h3>
        <div class="container flex items-center justify-center">
          <img src={Food1} alt="Food 1"  style={{width:'50%', height: '20%p'}}/>
          <img src={Food2} alt="Food 2"  style={{width:'50%', height: '20%'}} />
        </div>
      </div>
    </section>
  </div>
  )
}

export default CompanyLogo
