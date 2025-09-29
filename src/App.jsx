import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Header from './components/Header/Header.jsx'
import AddToCart from './components/AddToCart/AddToCart.jsx' // Import the cart sidebar
import { CartProvider, useCart } from './components/Context/CartContext.jsx' // Import cart context

import "./App.css"
import Description from './components/Shop/Description/Description.jsx';
import Compare from './components/Compare/Compare';
import Cart from './components/Cart/Cart';
import CheckOut from './components/Checkout/CheckOut';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

// Inner App Component that has access to cart context
const AppContent = () => {
  const { isCartOpen } = useCart();

  return (
    <Router>
      <div className="  w-full max-w-screen  flex justify-center overflow-x-hidden">
        
        {/* Main Container - Opacity decreases when cart is open */}
        <div className={`container w-full  max-w-screen  font-['poppins']  transition-opacity duration-300 ${isCartOpen ? 'bg-[cccccc] opacity-50 contrast-90' : 'opacity-100'}`}>
          
          
          
          <Header /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Description />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
          <Footer />
        </div>
        
        {/* Cart Sidebar - Always full opacity, positioned above faded content */}
        <AddToCart />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <CartProvider> {/* Wrap entire app with CartProvider */}
      <AppContent /> {/* Inner component that uses cart context */}
    </CartProvider>
  )
}

export default App
