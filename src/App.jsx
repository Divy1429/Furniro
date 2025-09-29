import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Shop from "./components/Shop/Shop.jsx" // Make sure to import Shop component
import Header from './components/Header/Header.jsx'

import "./App.css"
import Description from './components/Shop/Description/Description.jsx';
import Compare from './components/Compare/Compare';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <div className="bg-white mx-auto w-full max-w-screen min-h-screen overflow-hidden">
        <div className="container max-w-screen w-full mx-auto my-0 p-0 font-['poppins'] bg-white">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
             <Route path="/product/:id" element={<Description />} />
             <Route path="/compare" element={<Compare />} />
             <Route path="/cart" element={<Cart />} />

          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
