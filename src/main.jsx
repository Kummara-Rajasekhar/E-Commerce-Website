import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'swiper/css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



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
import PrivateRouter from './privaterouter/PrivateRouter.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
 

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
{
  path:"/login",
  element:<Login/>
},
{
  path:"sign-up",
  element:<Signup/>
},
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>

   <RouterProvider router={router} />
   </AuthProvider>  
)
