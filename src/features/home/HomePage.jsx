import React from 'react'
import ProductsList from '../products/ProductsList'
import Top5Products from '../products/Top5Products'

export default function HomePage() {
  return (
    <div>

        <Top5Products/>
        <ProductsList/>

    </div>
  )
}
