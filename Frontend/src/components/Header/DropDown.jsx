import React from 'react'
import { Link } from 'react-router-dom';
function DropDown({data}) {
    var data1=data
  return (
    <div className='bg-blue-500 text-center'>
        
        {data1.map((item,index) => (
            <p key={index} className="">
              <Link to={item} className="text-white hover:text-gray-400">
                {item}
              </Link>
            </p> 
          ))}<p>
           <Link to='' className="text-white hover:text-gray-400">
                Log In
              </Link></p>
              <Link to='' className="text-white hover:text-gray-400">
                Log Out
              </Link>  
             
       
    </div>
  )
}

export default DropDown
