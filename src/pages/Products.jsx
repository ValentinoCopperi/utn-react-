import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import ShowProducts from '../components/products/ShowProducts'
import ProductsFilter from '../components/products/ProductsFilter'
import Footer from '../components/Footer'
export default function Products() {
  
  return (
    <div>
        <Nav/>
        <h1 className='text-center text-3xl font-semibold'>Products</h1>
        <ProductsFilter/>
        <ShowProducts/> 
        <Footer/>
    </div>
  )
}
