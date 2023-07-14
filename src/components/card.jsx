
import '../styles/global.css'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

export default function Card({ products }) {



   return (
      <Link to={`/products/detail/${products.id}`}
         style={{ textDecoration: 'none' }}>
         <div className="card fs-14 text-center  rounded-4" style={{ width: '300px', height: '440px', color: 'black' }} >
            <img src={products.image} className="card-images mx-auto d-block" alt={products.title} />
            <div className="card-body">
               <p className='card-text mb-1'>{products.title}</p>
               <p className='text-center fw-bold fs-12 mb-1' >{products.category}</p>
               <h6 className='card-text fw-bold mb-1'>${products.price}</h6>
               <div
                  className='rating'
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                  }}>
                  <span style={{ marginBottom: '10px', marginLeft: '6px' }}>
                     <StarRatings
                        rating={products.rating.rate}
                        starRatedColor="#F2BE22"
                        starDimension="20px"
                        starSpacing='0.5px' />
                  </span>
                  <p className='card-text' style={{ marginLeft: '6px' }}>({products.rating.count})</p>
               </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom :'10px' }}>
               <Link>
                  <button style={{ borderRadius: '20px' }} type="button" className="btn btn-secondary">Add to cart</button>
               </Link>
               <Link>
                  <button style={{ borderRadius: '20px' }} type="button" className="btn btn-light">Go to cart</button>
               </Link>
            </div>

         </div>
      </Link>
   )
}
