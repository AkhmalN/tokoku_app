import { useEffect, useState } from 'react'
import '../styles/global.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Loading from './load'
import StarRatings from 'react-star-ratings'


export default function DetailCard({ details }) {

   const URL = useParams()
   const ID = URL.id
   const [rating, setRating] = useState([])
   const [loading, setLoading] = useState('false')

   const getRating = async () => {
      setLoading(true)
      let response = await axios.get(`https://fakestoreapi.com/products/${ID}`)
      setRating(response.data)
      setLoading(false)
   }

   useEffect(() => {
      getRating()
   },[])


   return (
      <>
         {loading ? <Loading /> : <div className='container'>
            <div className="detail-card card rounded-4" style={{ maxWidth: '700px', maxHeight: '450px' }} >
               <div className='card-body'>
               <img src={details.image} className="card-images mx-auto d-block" style={{ width: '300px', height: '350px' }} alt={details.title} />
               </div>
               <div className="card-body">
                  <h2 className='card-text'>{details.category.toUpperCase()}</h2>
                  <p className='card-text'>{details.title}</p>
                  <h5 className='card-text fw-bold'>${details.price}</h5>
                  <p className='card-text'>{details.description.slice(0, 158)}...</p>
                  <div style={{
                     display: 'flex',
                     justifyContent: 'start',
                     alignItems : 'center'
                  }}>
                     <span style={{marginBottom : '10px', marginLeft : '6px'}}>
                        <StarRatings 
                           rating={details.rating.rate}
                           starRatedColor="#F2BE22"
                           starDimension="20px"
                           starSpacing='0.5px'/>
                     </span>
                     <p className='card-text' style={{ marginLeft : '6px'}}>({details.rating.count} reviews)</p>
                  </div>
                  <button style={{ borderRadius: '10px', marginRight: '10px' }} type="button" className="btn btn-dark">Add to cart</button>
                  <button style={{ borderRadius: '10px' }} type="button" className="btn btn-light">Go to cart  </button>
               </div>
            </div>
         </div>}
      </>
   )
}
