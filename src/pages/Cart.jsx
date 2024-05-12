import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { getDeliveredCart } from '../services/getDeliveredCart'
import { ProductsContext } from '../context/ProductsContext'
import { getTotalCart } from '../services/getTotalCart'
import Footer from '../components/Footer'
export default function Cart() {
    const { cart,deleteOneProductCart,deleteAllProductCart } = useContext(ProductsContext)
    const deliveredCart = getDeliveredCart(cart)
    const total = getTotalCart(cart)
   
    return (
        <section>
            <Nav />
            <div className='min-h-[80vh]'>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-lg">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                            My Cart:
                        </h3>
                        <p className="text-gray-600 mt-2">

                        </p>
                    </div>
                    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                        <table className="w-full table-auto text-sm text-left">
                            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                <tr>
                                    <th className="py-3 px-6">Product</th>
                                    <th className="py-3 px-6">Total Price</th>
                                    <th className="py-3 px-6">Quantity</th>
                                    <th className="py-3 px-6"></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 divide-y">
                                {
                                    cart.length >= 1 ?
                                        deliveredCart.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                                    <img src={item.image} className="w-10 h-10 rounded-full" />
                                                    <div>
                                                        <span className="block text-gray-700 text-sm font-medium">{item.title}</span>
                                                        <span className="block text-gray-700 text-xs">${item.price.toFixed(2)}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">${item.totalPrice.toFixed(2)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                                                <td className=''>
                                                    <button onClick={()=>deleteOneProductCart(item)} className='text-red-400'>Delete One</button>
                                                </td>
                                                <td>
                                                    <button onClick={()=> deleteAllProductCart(item)} className='text-red-600'>Detele All</button>
                                                </td>
                                            </tr>
                                        )) :
                                        <tr>
                                            <td>No products in your cart yet</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='text-center'>
                    <h1>Total: ${total.toFixed(2)}</h1>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

