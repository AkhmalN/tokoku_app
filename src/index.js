import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import LandingPage from './pages/landing';
import ProductPage from './pages/product';
import Detail from './pages/detail';
import Categories from './pages/categories';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element = {<LandingPage/>}/>
      <Route path='products' element = {<ProductPage/>}/>
      <Route path='products/detail/:id' element = {<Detail/>}/>
      <Route path='products/:categori' element = {<Categories/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

