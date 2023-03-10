import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/Product.css'
import '../css/Animation.css'
import Head from '../components/Head'

const Product = () => {
  const [ produto, setProduto ] = React.useState()
  const params = useParams()

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${ params.id }`)
      .then( res => res.json() )
      .then( json => setProduto( json ))
  }, [ params ])

  console.log( produto )
  
  return (
    <>
    { produto ? (
      <section className='product-section animeleft'>
        <Head
          title='Produto' 
        />
        <div className='product-pic-container'>
          { produto.fotos.map( picture => (
            <img className='product-pic' key={ picture.src } src={ picture.src } alt={ picture.titulo } />
          ))}
        </div>
        <div className='product-info-container'>
          <h1>{ produto.nome }</h1>
          <label 
            className={`product-price-label ${ produto.vendido === 'true' && 'sold'}`}
          >
            R$ { produto.preco }</label>
          <p>{ produto.descricao }</p>
        </div>
      </section>
    ): <div className='loading'></div> }
    </>
  )
}

export default Product
