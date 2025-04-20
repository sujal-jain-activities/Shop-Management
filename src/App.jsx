import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import AppLayout from './Components/Layouts/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import Shopping from './Pages/Shopping'
import Contact from './Pages/Contact'



const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/Shopping',
        element:<Shopping/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },
  
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
