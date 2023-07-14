import { Link } from "react-router-dom";
import shopIcon from '../assets/Group 484.png'
import { FaCartPlus } from 'react-icons/fa'

export default function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5 ">
         <div className="container-fluid d-flex justify-content-end">
            <img className="navbar-brand" src={shopIcon} alt={shopIcon} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="text-center  navbar-collapse " id="navbarNavAltMarkup">
               <ul className="navbar-nav navbar-collapse">
                  <li className="nav-item">
                     <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to={'/products'}>Products</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to= '/about'>About</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to= '/contact'>Contact</Link>
                  </li>
               </ul>
               <button type="button" className="btn btn-light border mx-2"><FaCartPlus /></button>
                  <button type="button" className="btn btn-info mx-1">Sign In</button>
                  <button type="button" className="btn btn-light border mx-1">Log In</button>
               <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
                  
               </div>
            </nav>
         </div>
      </nav>
   )
}

