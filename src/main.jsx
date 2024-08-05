import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from '/src/home/Home.jsx';
import Blog from '/src/blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import Cartpage from './shop/Cartpage.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import ContactPage from './contactpage/ContactPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: "/",element:<Home/>},
      {path: "/blog",element:<Blog/>},
      {path: "/shop",element:<Shop/>},
      {path: "shop/:id",element:<SingleProduct/>},
      {path: "blog/:id",element:<SingleBlog/>},
      {path: "/cart-page",element:<Cartpage/>},
      {path: "/about",element:<About/>},
      {path: "/contact",element:<ContactPage/>},
    ],
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
