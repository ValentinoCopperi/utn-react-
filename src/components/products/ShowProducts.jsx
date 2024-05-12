import React, { useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
export default function ShowProducts() {
  const {user} = useContext(UserContext)
  const { products, error, query, maxPrice,addProductToCart } = useContext(ProductsContext)
  const[warning,setWarning] = useState(null)
  if(warning){
    alert(warning)
  }
  return (
    <div className='flex flex-col  w-[90%] mx-auto flex-wrap md:flex-row'>
      {
        error || products.length < 1 ?
          <h1 className='text-center text-3xl font-semibold'>Error on getting data</h1>
          :
          products
            .filter((prod) => {
              return (
                prod.price <= maxPrice
                &&
                prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
              )
            })
            .map((prod,idx) => {
              return (
                
                <article key={idx} className='w-[80%] md:w-[30%] min-h-[200px] mx-auto border border-gray-300 p-3 m-3 text-center flex flex-col justify-center items-center hover:bg-gray-300 transition-all duration-300 '>
                  <h1 className='font-semibold'>{prod.title}</h1>
                  <img src={prod.image} alt={prod.title} className='w-[35%]' />
                  <h5 className='py-3 text-2xl'>${prod.price}</h5>
                  <div className='flex justify-evenly w-full'>
                    <Link to={`/product/${prod.id}`}  className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">Ver mas</Link>
                    <button 
                     className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"
                    onClick={()=>{
                      user ? 
                      addProductToCart(prod)
                      :
                      setWarning('You must be logged in to buy products')
                    }}
                    >Comprar</button>
                  </div>
                </article>
              )
            })
      }
    </div>
  )
}
