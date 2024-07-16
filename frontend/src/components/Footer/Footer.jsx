import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
<div className='footer-content'>
    <div className='footer-content-left'>
        <img src={assets.logo}/>
        <p>
        Discover a wide variety of fresh produce, quality groceries, and everyday essentials at unbeatable prices. Shop now and enjoy fast, reliable delivery right to your doorstep.</p>
    <div className='footer-social-icons'>
        <img src={assets.facebook_icon}/>
        <img src={assets.twitter_icon}/>
        <img src={assets.linkedin_icon}/>
    </div>
    </div>
    <div className='footer-content-center'>
    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
    </div>
    <div className='footer-content-right'>
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>+1-234-567-8990</li>
        <li>contact@grocery.com</li>
    </ul>
</div>
</div>
<hr/>
<p className='footer-copyright'>copyright 2024 © grocery.com- All Rights Reserved</p>
    </div>
  )
}

export default Footer