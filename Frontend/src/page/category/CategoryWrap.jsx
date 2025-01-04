// import React from 'react'
// import { Link } from 'react-router-dom';
// function CategoryItem({name,href,backgroundColor,color}){
//   const style={
//     backgroundColor:backgroundColor,
//     color:color,
//     boarderColor:color,
//   }
//     return(<>
//     <div>
//       <Link to={href} className="rounded-full">
//       <div className=' uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
//       </Link>
//     </div>
//     </>
// )
// }


// function CategoryList(){

//     return(<>
//     <div className='flex flex-wrap items-center justify-center gap-8'>
//     <CategoryItem name="entrees" href='/categories/entrees' backgroundColor="#f0f5c4" color="#59871f"/>
//     <CategoryItem name="breakfast" href='/categories/breakfast' backgroundColor="#f0f5c4" color="#59871f"/>
//     <CategoryItem name="lunch" href='/categories/lunch' backgroundColor="#f0f5c4" color="#59871f"/>
//     <CategoryItem name="dessart" href='/categories/dessart' backgroundColor="#f0f5c4" color="#59871f"/>
//     <CategoryItem name="drinks" href='/categories/drinks' backgroundColor="#f0f5c4" color="#59871f"/>
//     <CategoryItem name="sides" href='/categories/sides' backgroundColor="#f0f5c4" color="#59871f"/>
    
//     </div>

//     </>
// )
// }



// const CategoryWrap=()=> {


//   return (
//     <div>
//       <CategoryList />
//     </div>
//   )
// }
// export default CategoryWrap





// import React from 'react';
// import { Link } from 'react-router-dom';

// function CategoryItem({ name, href, backgroundColor, color }) {
//   const style = {
//     backgroundColor: backgroundColor,
//     color: color,
//     borderColor: color,
//   };

//   return (
//     <div>
//       <Link to={href} className="rounded-full">
//         <div
//           className="uppercase px-6 py-3 text-center rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
//           style={style}
//         >
//           {name}
//         </div>
//       </Link>
//     </div>
//   );
// }

// function CategoryList() {
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-8">
//       <CategoryItem
//         name="entrees"
//         href="/categories/entrees"
//         backgroundColor="#fef3c7"
//         color="#d97706"
//       />
//       <CategoryItem
//         name="breakfast"
//         href="/categories/breakfast"
//         backgroundColor="#d1fae5"
//         color="#10b981"
//       />
//       <CategoryItem
//         name="lunch"
//         href="/categories/lunch"
//         backgroundColor="#cffafe"
//         color="#06b6d4"
//       />
//       <CategoryItem
//         name="dessert"
//         href="/categories/dessert"
//         backgroundColor="#fce7f3"
//         color="#ec4899"
//       />
//       <CategoryItem
//         name="drinks"
//         href="/categories/drinks"
//         backgroundColor="#ede9fe"
//         color="#8b5cf6"
//       />
//       <CategoryItem
//         name="sides"
//         href="/categories/sides"
//         backgroundColor="#fef2f2"
//         color="#f43f5e"
//       />
//     </div>
//   );
// }

// const CategoryWrap = () => {
//   return (
//     <div className="py-10">
//       <CategoryList />
//     </div>
//   );
// };

// export default CategoryWrap;


import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    border: `2px solid ${color}`,
  };

  return (
    <Link to={href} className="block">
      <div
        className="uppercase px-6 py-3 text-center rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        style={style}
      >
        {name}
      </div>
    </Link>
  );
}

function CategoryList() {
  const categories = [
    { name: 'Entrees', href: '/categories/entrees', backgroundColor: '#fef3c7', color: '#d97706' },
    { name: 'Breakfast', href: '/categories/breakfast', backgroundColor: '#d1fae5', color: '#10b981' },
    { name: 'Lunch', href: '/categories/lunch', backgroundColor: '#cffafe', color: '#06b6d4' },
    { name: 'Dessert', href: '/categories/dessert', backgroundColor: '#fce7f3', color: '#ec4899' },
    { name: 'Drinks', href: '/categories/drinks', backgroundColor: '#ede9fe', color: '#8b5cf6' },
    { name: 'Sides', href: '/categories/sides', backgroundColor: '#fef2f2', color: '#f43f5e' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      {categories.map((category) => (
        <CategoryItem key={category.name} {...category} />
      ))}
    </div>
  );
}

const CategoryWrap = () => {
  return (
    <div className="py-10">
      <CategoryList />
    </div>
  );
};

export default CategoryWrap;
