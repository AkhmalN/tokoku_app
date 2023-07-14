import React, { useState } from 'react'
import shopImageAbout from '../assets/discount-shopping-season-with-sale.jpg'
import { Link } from 'react-router-dom'



function About() {

   const [loading, setLoading] = useState(true)
   

   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <img src={shopImageAbout} className="img-fluid" alt='' style={{borderRadius : '10px'}}/>
               </div>
               <div className="col-md-6">
                  <h1>About Our Store</h1>
                  <p>We are an online retail store that specializes in selling high-quality products at affordable prices. We take pride in the quality of our merchandise and the satisfaction of our customers.</p>
                  <h2>Our Story</h2>
                  <p>Our store was founded in 2005 by a group of friends who shared a passion for ecommerce. We started out with just a few products, but quickly grew our inventory to include a wide variety of goods.</p>
                  <p>Today, we are one of the leading online retailers in the industry, and we continue to provide our customers with top-notch products and excellent service.</p>
                  <p>so what are you waiting for, please visit our website and find the product you want</p>
                  <Link to= '/products'>
                     <button className="btn btn-primary">Shop Now</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
