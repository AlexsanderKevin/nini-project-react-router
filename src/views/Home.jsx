import React from 'react'
import ProductCard from '../components/ProductCard'
import '../css/Home.css'
import '../css/Animation.css'
import Head from '../components/Head'

const Home = () => {
  const [ products, setProducts ] = React.useState()

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then( res => res.json() )
      .then( json => setProducts( json ))
  }, [])

  return (
    <section className='productsSection animeleft'>
      <Head
        title='Home'
      />
      { products ? products.map( product => (
        <ProductCard key={ product.id } product={ product } />
      )) :
        <div className='loading'></div>
      }
    </section>
  )
}

export default Home
