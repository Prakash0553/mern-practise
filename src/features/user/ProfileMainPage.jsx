import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from './UserProfile.jsx';
import OrderPage from '../orders/OrderPage.jsx';

export default function ProfileMainPage() {

  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className='flex sm:justify-center md:justify-center lg:justify-items-end my-16'>
    <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 '>

      <UserProfile user={user} />
      <OrderPage user={user} />

    </div>
    </div>
  )
}