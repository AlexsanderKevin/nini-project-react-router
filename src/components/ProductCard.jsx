import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <Link to={`/produto/${ product.id }`}>
        <img src={ product.fotos[0].src } alt={`Foto ${ product.nome }`}/>
        <h1>{ product.nome }</h1>
      </Link>
    </div>
  )
}

export default ProductCard
