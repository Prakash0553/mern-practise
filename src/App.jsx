import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Login from './features/authentication/Login'
import SignUp from './features/authentication/SignUp'
import HomePage from './features/home/HomePage'
import AdminPage from './features/admin/AdminPage'
import ProductAddForm from './features/admin/ProductAddForm'
import ProductEdit from './features/admin/ProductEdit'
import Product from './features/products/Product'
import CartPage from './features/carts/cartPage'
import ProfileMainPage from './features/user/ProfileMainPage'
import OrderDetail from './features/orders/OrderDetail'
import AdminRoute from './components/AdminRoute'
import { useSelector } from 'react-redux'
import UserRoute from './components/UserRoute'



export default function App () {

  const { user } = useSelector((state) => state.userSlice);

  const router =createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
   
      { path: 'login', element: user ? <Navigate too="/" /> : <Login /> },// login nai xa ani feri login garna khojyo vani homepage ma pathaidinxa
      { path: 'sign-up', element: user ? <Navigate to="/" /> : <SignUp /> },

      // Admin Routes
       {
          element: <AdminRoute/>,
          children: [
            { path: 'admin/dashboard', element: <AdminPage /> },
            { path: 'admin/products/add', element: <ProductAddForm /> },
            { path: 'admin/products/edit/:id', element: <ProductEdit /> },
          ]
        },

      // Product & Cart
      { path: 'products/:id', element: <Product /> },

      {
          element: <UserRoute />,
          children: [
            { path: 'carts', element: <CartPage /> },
            // User Profile
            { path: 'user/profile', element: <ProfileMainPage /> },
          ]
        },

      // Orders
      { path: 'orders/:id', element: <OrderDetail /> },
    ],
  },
]);

   
  return<RouterProvider router={router}/>

}
