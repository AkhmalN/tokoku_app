import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/card'
import Loading from '../components/load'

export default function ProductPage() {

   const [products, setProduct] = useState([])
   const [loading, setLoading] = useState(false)


   const getProducts = async () => {
      try { 
         setLoading(true)
         let result = await axios.get(`https://fakestoreapi.com/products`)
         setProduct(result.data)
         setLoading(false)
      } catch (error) {
         setLoading(false)
         console.log(error)
      }
   }

   useEffect(() => {
      getProducts()
   },[])


   return (
      <>
         {loading ? <Loading/> : <div className='container d-flex flex-wrap'>
            {products.map((product, id) => {
               return (
                  <Card
                     products={product}
                     key={id}
                  />
               )
            })}
         </div>}
      </>
   )
}
