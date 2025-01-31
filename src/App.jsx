import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { WishlistProvider } from './Pages/WishlistPage/WishlistContext';
import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Hero from './Components/Hero/Hero';
import BookDetail from './Pages/BookDetails/BookDetails';


const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <SplashScreen />, 
    },
    {
      path: 'Landing-page',
      element: <Layout />, 
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: 'Home',
          element: <HomePage />,
        },
        {
          path: 'Category',
          element: <CategoryPage />,
        },
        {
          path: 'wishList',
          element: <WishlistPage />,
        },
        {
          path: 'Hero',
          element: <Hero />, 
        },
        {
          path: 'book/:id', 
          element: <BookDetail />,
        },
      ],
    },
    {
      path: 'Login',
      element: <Login />,
    },
    {
      path: 'SignUp',
      element: <SignUp />,
    },
    {
      path: '*', // Fallback for unmatched routes
      element: <div>404: Page Not Found</div>,
    },
  ]);

  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
};

export default App;
