import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../components/DetailCard'
import Loading from '../components/load'

export default function Detail() {

   const URL = useParams()
   const ID = URL.id

   const [loading, setLoading] = useState([])
   const [details, setDetails] = useState([])
   
   const getDetails = async() => {
      let response = await axios.get(`https://fakestoreapi.com/products/${ID}`)
      setDetails(response.data)
      setLoading(false)
   }

   useEffect( () => {
      getDetails()
   })

   return (
      <>
         {loading ? 
         <Loading/>
         :
         <div>
            <DetailCard details={ details}/>
         </div>
         }
      </>
   )
}
