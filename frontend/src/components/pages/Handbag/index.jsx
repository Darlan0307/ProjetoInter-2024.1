import { useMemo } from 'react'
import { useProduct } from '../../../context/ProductContext'
import './style.css'
import { Link } from 'react-router-dom'

const Handbag = () => {

  const {
    productsHandbag,
    removeProductHandbag,
    plusQtdItemHandbag,
    minusQtdItemHandbag
  } = useProduct()

  const priceTotal = useMemo(()=>{

    let value = 0

    productsHandbag.forEach(product => {

      let valueProduct = product.price * product.qtdItem

      value += valueProduct
    })

    return value
  },[productsHandbag])

  return (
    <main className='page-handbag'>
      <h2>Bolsa</h2>

        {productsHandbag.length > 0 ? (
          <>
            <section className='container-products-handbag'>
              {productsHandbag.map((product)=>(
                <article key={product.id} className='card-handbag'>
                  <img src={product.urlImage} alt={product.name} />
                  <div className='card-handbag-content'>
                    <h3>{product.name}</h3>
                    <p>R${product.price},00</p>
                  </div>
                  <div className='card-handbag-actions'>
                    <button
                    onClick={()=>plusQtdItemHandbag(product.id)}
                    >plus</button>
                    <span>{product.qtdItem}</span>
                    <button
                    onClick={()=> minusQtdItemHandbag(product.id)}
                    >minuos</button>
                  </div>
                  <button
                  onClick={()=>removeProductHandbag(product.id)}
                  >remove</button>  
                </article>
              ))}
            </section>

            <section className='price-total'>
              <p>Valor Total: <span>R${priceTotal},00</span></p>
            </section>

            <button className='btn-handgab'>
              Comprar Tudo
            </button>
          </>
        ):(
          <div className='handbag-empty'>
            <h3>Você ainda não escolheu nenhum produto</h3>
            <Link to="/products">Escolha agora!</Link>
          </div>
        )}
     
    </main>
  )
}

export default Handbag