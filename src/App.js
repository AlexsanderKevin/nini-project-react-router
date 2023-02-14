import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import Header from './views/Header';
import Home from './views/Home';
import Product from './views/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/contato' element={ <Contact/> } />
        <Route path='/produto/:id' element={ <Product/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
