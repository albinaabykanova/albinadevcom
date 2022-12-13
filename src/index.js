import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume  from './components/Resume/Resume';
import Blogs from './components/Blogs/Blogs';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout >
         <Home/>
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout >
         <About/>
      </Layout>
    ),
  },
  {
    path: "/project",
    element: (
      <Layout >
         <Projects/>
      </Layout>
    ),
  },
  {
    path: "/resume",
    element: (
      <Layout >
         <Resume/>
      </Layout>
    ),
  },
  {
    path: "/blog",
    element: (
      <Layout >
         <Blogs/>
      </Layout>
    ),
  },
]); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

