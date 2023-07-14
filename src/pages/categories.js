
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/load'
import Card from '../components/card'

function Categories() {

   const params = useParams()
   const categories = params.categori

   const [loading, setLoading] = useState(false)
   const [categori, setCategori] = useState([])
   
   

   useEffect(() => {
      const getCategoriProducts = async () => {
         try {
            setLoading(true)
            let responseCategories = await axios.get(`https://fakestoreapi.com/products/category/${categories}`)
            setCategori(responseCategories.data)
            setLoading(false)
         } catch (error) {
            console.log(error)
            setLoading(false)
         }
      }
      getCategoriProducts()
   }, [categories])

   return (
      <>
      {loading ? <Loading/> : 
      <div className='container'>
         {categori.map((categories, id)=>{
            return(
               <Card products={categories} key={id}/>
            )
         })}
      </div>
      }
      </>
   )
}

export default Categories
