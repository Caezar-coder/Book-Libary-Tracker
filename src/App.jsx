import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import SplashScreen from './Pages/SplashScreen/SplashScreen'

const App = () => {

  const router = createBrowserRouter([
    {
      path: 'HomePage',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    },
    {
      path: '',
      element: <SplashScreen />
    },
    {
      path: 'Login',
      element: <Login />
    },
    {
      path: 'SignUp',
      element: <SignUp />
    }
   ])
  return  <RouterProvider router={router} />
   
  
}

export default App
