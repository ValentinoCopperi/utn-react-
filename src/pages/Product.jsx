import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ProductsContext } from '../context/ProductsContext'

export default function Product() {
  const { getProductById,addProductToCart } = useContext(ProductsContext)
  let { id } = useParams()
  const[product,setProduct] = useState({})
  console.log(product)
  useEffect(()=>{
   setProduct(getProductById(id))
  },[id])

  return (
    <div>
      <Nav />
      {
        product ?
        <section className='flex flex-col w-[90%] mx-auto items-center justify-center text-center py-10 md:flex-row '>
        <div>
          <h1 className='font-semibold'>{product.title}</h1>
          <p className='py-3'>{product.description}</p>
          <span className='text-2xl'>${product.price}</span>
        </div>
        <div className='flex flex-col items-center'>
          <img src={product.image} alt="" className='w-[70%]' />
          <button
            onClick={()=>addProductToCart(product)}
            className=" my-3 px-4 py-2.5 text-sm text-indigo-600 duration-150 bg-indigo-200 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
          >
            COMPRAR
          </button>
        </div>
      </section>
      :<h1>Hola</h1>
      }
      <Footer />
    </div>
  )
}
