import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import Header from './views/Header';
import Home from './views/Home';
import Product from './views/Product';
import './css/Global.css'

function App() {
  return (
    <BrowserRouter>
      <section className='container'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/contato' element={ <Contact/> } />
        <Route path='/produto/:id' element={ <Product/> } />
      </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
