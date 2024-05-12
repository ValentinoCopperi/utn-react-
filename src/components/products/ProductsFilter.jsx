import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
export default function ProductsFilter() {
  const { sortMax,handleSort, maxPrice, handleMaxPrice, searchProduct } = useContext(ProductsContext)
  return (
    <section className='flex flex-col w-[90%] mx-auto text-center'>
      <div className="max-w-md px-4 mx-auto mt-12">
        <h1>Buscar Producto</h1>
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            onChange={(e) => searchProduct(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-col w-[40%] mx-auto py-10'>
        <h1>Filtrar Por Precio:</h1>
        <input
          type="range"
          name='maxPrice'
          step={5}
          min={0}
          max={1000}
          value={maxPrice}
          onChange={(e) => handleMaxPrice(Number(e.target.value))}
        />
        <span>Max price: ${maxPrice}</span>
      </div>
      <div>
        <h1>Ordenar Por Precio</h1>
        <button onClick={handleSort}>
          {
            sortMax ?"↓" :  "↑"
          }
        </button>
      </div>
    </section>
  )
}
