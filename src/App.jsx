import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home/Home'
import About from './component/About/About'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import Notfound from './component/Notfond/Notfound'


const routers = createBrowserRouter([
  {
    path: '/Start-Framework/', // تأكد من أن المسار الأساسي هنا
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);

function App() {
  return <>
   <RouterProvider router={routers} />
  </>
   
  
}

export default App;