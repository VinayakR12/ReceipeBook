import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx'; // Import the AuthProvider
import App from './App.jsx';
import Home from './page/Home.jsx';
import Register from './page/Register.jsx';
import Login from './page/Login.jsx';
import Add from './page/Add.jsx';
import CategoryPage from './page/category/CategoryPage.jsx';
import AllRecipes from './page/allReceipe.jsx';
import ProductInfo from './page/Product/ProductInfo.jsx'
import Error from './components/Header/Error.jsx'
import Search from './page/search.jsx';
import AboutPage from './page/AboutPAGE.jsx';
const DB_API = import.meta.env.VITE_API_BASE_URL;

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/add", element: <Add /> },
      { path: "/categories/:category", element: <CategoryPage /> },
      { path: "/AllReceipe", element: <AllRecipes /> },
      { path:"/items/:id",
                          element:<ProductInfo/>,
                          loader:({params})=>fetch(`${DB_API}api/items/${params.id}`)
        },
       { path:"/search",element:<Search />},
       { path:"/AboutPage",element:<AboutPage />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={route} />
  </AuthProvider>
);
