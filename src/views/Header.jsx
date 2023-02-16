import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <nav className='headerNav'>
      <NavLink to="/" end>Produtos</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  )
}

export default Header
