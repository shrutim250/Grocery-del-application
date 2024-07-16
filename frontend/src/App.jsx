import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'



const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
<Navbar setShowLogin={setShowLogin}/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/PlaceOrder' element={<PlaceOrder/>} />
  <Route path='/order' element={<PlaceOrder/>}/>
  <Route path='/myorders' element={<MyOrders/>}/>
</Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App