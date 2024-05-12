import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContext.jsx'
import UserContextProvider from './context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
