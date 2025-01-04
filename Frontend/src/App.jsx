import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Header/Footer'

function App() {

  return (
    // <div>
  <div className='w-full mx-auto' > 
  <Header/>
  <div className='min-h-[calc(100vh-136px)]'>
   <Outlet/>
   </div>
   <Footer/>
   </div>
  )
}
    


export default App
