import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [ products, setProducts ] = React.useState()

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then( res => res.json() )
      .then( json => setProducts( json ))
  }, [])

  return (
    <section>
      { products ? products.map( product => (
        <ProductCard key={ product.id } product={ product }/>
      )) :
        <h1>Loading ...</h1>
      }
    </section>
  )
}

export default Home
