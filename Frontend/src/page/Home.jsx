import React from 'react'
import Top from '../components/Top'
import CategoryWrap from './category/CategoryWrap'
import FeaturedSection from './FeaturedSection'
import Latest from './Latest'
import NewsLetter from './NewsLetter'
import About from './About'
import CompanyLogo from './CompanyLogo'
import Subscription from './Subscription'
import Add from './Add'
export default function Home() {
  return (
   <div className="container mx-auto flex items-center justify-center">
      <div className="centered-component flex flex-col">
        <div className="content-wrapper"><Top /></div>
    
      <CategoryWrap/> 
      <div className='p-10 h-100px'><FeaturedSection/></div>
     
      <Latest/>
      {/* <NewsLetter/> */}
    <About/>
    <CompanyLogo/>
    <Subscription/>
      </div>
</div>
   

  )
}
