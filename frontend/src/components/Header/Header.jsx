import React from 'react'
import "./Header.css"
import { Padding } from '@mui/icons-material'
function Header() {
  return (
    <div className='header'>
        <div className='header-contents'>
        <h2> Order Your Grocery Here</h2>
        <p> Ordering grocery materials online involves selecting items from a virtual catalog, adding them to your cart, and proceeding to checkout for delivery or pickup, ensuring convenience and efficiency in stocking essentials.</p>
        <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header