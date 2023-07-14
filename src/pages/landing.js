import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import '../styles/global.css'
import { Link } from 'react-router-dom'
import Loading from '../components/load'
import Categories from './categories'



export default function LandingPage() {
   const [products, setProduct] = useState([])
   const [categories, setCategories] = useState([])
   const [loading, setLoading] = useState(false)


   const getProducts = async () => {
      try {
         setLoading(true)
         let getResponseProduct = await axios.get(`https://fakestoreapi.com/products?limit=4`)
         setProduct(getResponseProduct.data)
         setLoading(false)
      } catch (error) {
         console.log(error)
         setLoading(false)
      }
   }

   useEffect(() => {
      getProducts()
   }, [])

   const getCategoriesProduct = async () => {
      try {

         let getResponseCategories = await axios.get(`https://fakestoreapi.com/products/categories`)
         setCategories(getResponseCategories.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getCategoriesProduct()
   }, [])

   const handleOnClick = () => {
      return <Categories/>
   }

   return (
      <>
         {loading ? <Loading/> :
            <div className='container'>
               <div className='categori-wrapper'>
                  {categories.map((categori, id) => {
                     return (
                        
                           <Link
                              key={id}
                              to={`products/${categori}`}
                              onClick = {handleOnClick}
                              style={{ textDecoration: 'none' }}
                           >
                              
                              <button style={{ borderRadius: '20px' }} type="button" className="btn btn-light">{categori.toUpperCase()}</button>
                           </Link>
                     )
                  })}
               </div>
               <div className='product-wrapper'>
                  {products.map((product, id) => {
                     return (
                        <Card
                           products={product}
                           key={id}
                        />
                     )
                  })}
               </div>
            </div>}
      </>
   )
}
