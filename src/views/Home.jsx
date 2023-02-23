import React from 'react'
import ProductCard from '../components/ProductCard'
import '../css/Home.css'
import '../css/Animation.css'

const Home = () => {
  const [ products, setProducts ] = React.useState()

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then( res => res.json() )
      .then( json => {
        setProducts( json )
        console.log(json)
      })
  }, [])

  return (
    <section className='productsSection animeleft'>
      { products ? products.map( product => (
        <ProductCard key={ product.id } product={ product } />
      )) :
        <h1>Loading ...</h1>
      }
    </section>
  )
}

export default Home
