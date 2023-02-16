import React from 'react'
import { useParams } from 'react-router-dom'

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
      <section>
        <div>
          { produto.fotos.map( picture => (
            <img key={ picture.src } src={ picture.src } alt={ picture.titulo } />
          ))}
        </div>
        <div>
          <h1>{ produto.nome }</h1>
          <label>R${ produto.preco }</label>
          <p>{ produto.descricao }</p>
        </div>
      </section>
    ): <h1>Loading...</h1>}
    </>
  )
}

export default Product
