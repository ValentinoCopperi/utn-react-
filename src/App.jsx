import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { UserContext } from "./context/UserContext"
import { useContext, useEffect } from "react"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
function App() {
  const{userCheckExist} = useContext(UserContext)
  useEffect(()=>{
    userCheckExist()
  },[])

  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id"  element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
