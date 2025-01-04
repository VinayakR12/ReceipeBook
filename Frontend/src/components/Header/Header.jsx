
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { AuthContext } from '../../AuthContext.jsx';  // Import AuthContext

const navigationData = ['Home', 'Recipes', 'About', 'Search', 'Register'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, username } = useContext(AuthContext);  // Access context
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-white text-3xl font-bold">RecipeBook</a>
          <Link to="/" className="text-white text-4xl font-bold"></Link>

          <ul className="flex space-x-4 sm:space-x-2 md:space-x-4 py-2 items-center"> 
            {/* Responsive spacing */}
            {navigationData.map((item, index) => (
              <li key={index} className="hidden sm:block md:block lg:block"> {/* Hide on small screens */}
                <Link
                  to={item === "Recipes" ? "/AllReceipe" : item === "Home" ? "/" : item === "About" ? "/AboutPage": `${item}`}
                  className="text-white mt-0 hover:text-orange-400 hover:font-bold hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
            
            {/* Conditional Rendering for Login / Logout / User Info */}
            {isAuthenticated ? (
              <>
                
                <li>
                  {/* <Link to="/add" className="btn bg-green-600 text-white hover:bg-green-700 rounded-md px-4 py-2">
                    Add Recipe
                  </Link> */}
                   <Link
                  to="/add"
                  className="text-white mt-0 hover:text-orange-400 hover:font-bold hover:underline"
                >
                 Add Recipe
                </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="btn bg-red-600 text-white hover:bg-red-700 rounded-md px-4 py-2"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="btn bg-blue-800 text-white hover:bg-blue-900 rounded-md px-4 py-2"
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile menu toggle button */}
          <button
            className="sm:hidden block text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
        </div>
        
        {/* Mobile menu */}
        <ul
          className={`absolute top-full left-0 w-full bg-gray-800 py-4 px-6 sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && <DropDown data={navigationData} />}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;







