import React from "react";
import { useState,useEffect,createContext } from "react";
import getProducts from "../services/productService";
import { getCartFromStorage } from "../services/CartServices";
export const ProductsContext = createContext();

export default function ProductsContextProvider({children}){
    const[cart,setCart] = useState(getCartFromStorage())
    const[products,setProducts] = useState([])
    const[error,setError] = useState(null)
    const[sortMax,setSortMax] = useState(false)
    const[maxPrice,setMaxPrice] = useState(1000)
    const[query,setQuery] = useState('')

    const getProductById =  (id) => {
         return products.find(prod => prod.id == id)
    }

    const deleteAllProductCart = (item) => {
        const newCart = cart.filter(prod => prod.id != item.id)
        setCart(newCart)
        window.localStorage.setItem("cart" , JSON.stringify(newCart))
    }

    const deleteOneProductCart = (product) => {
        const newCart = [...cart]
        var index = newCart.map(prod => prod.id).indexOf(product.id)
        newCart.splice(index,1)
        setCart(newCart)
        window.localStorage.setItem("cart" , JSON.stringify(newCart))
    }
   
    const searchProduct = (value) => setQuery(value)
    const handleMaxPrice = (price) => setMaxPrice(price)

    const addProductToCart = (product) => {
        
        setCart((prev) =>[...prev,product])
        const newCart = [...cart,product]
        window.localStorage.setItem('cart',JSON.stringify(newCart))

    }

    const handleSort = () => {
        if(sortMax) {
            const sortedProducts = products.toSorted((a,b) => a.price - b.price)
            setProducts(sortedProducts)
        }else{
            const sortedProducts = products.toSorted((a,b) => b.price - a.price)
            setProducts(sortedProducts)
        }

        setSortMax(!sortMax)
    }

    const getAllProducts = async () => {
        try {
            const data = await getProducts()
            if(data.error) return setError(true)
            setProducts(data.data)

        } catch (error) {
            setError(true)
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])
    return (
        <ProductsContext.Provider
        value={{
            products,
            error,
            sortMax,
            handleSort,
            maxPrice,
            handleMaxPrice,
            query,
            searchProduct,
            addProductToCart,
            cart,
            deleteOneProductCart,
            deleteAllProductCart,
            getProductById}}>

            {children}

        </ProductsContext.Provider>
    )
}