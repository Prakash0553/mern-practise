import React from 'react'
import Top5Products from '../products/Top5Products'
import Swipper from '../products/Swipper'
import TopPicks from '../../components/TopPicks'
import ProductList from '../products/ProductsList'


export default function HomePage() {
  return (
    <div>

       {/*  <Top5Products/>     */} 
        {/*  <ProductsList/>    */} 
        {/*   <Swipper/>   */}
      
        <Top5Products/> 
       <ProductList/>
       <TopPicks/>
       <Swipper/>
      
        
        


    </div>
  )
}
