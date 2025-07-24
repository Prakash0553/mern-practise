import React from 'react'
import ProductsList from '../products/ProductsList'
import Top5Products from '../products/Top5Products'
import Footer from '../../components/Footer'
import Swipper from '../products/Swipper'
import TopPicks from '../../components/TopPicks'

export default function HomePage() {
  return (
    <div>

       {/*  <Top5Products/>     */} 
        {/*  <ProductsList/>    */} 
        {/*   <Swipper/>   */}
        <Swipper/>
       <TopPicks/>
        
        


    </div>
  )
}
