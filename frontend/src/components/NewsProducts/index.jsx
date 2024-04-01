import { useProduct } from '../../context/ProductContext'
import './style.css'
import {Link} from 'react-router-dom'

const NewsProducts = () => {

  const {
    products
  } = useProduct()

  let ultimoProduto =  products[products.length -1]
  let penultimoProduto = products[products.length -8]

  return (
    <section className='news-products'>
      <h2 className='news-products-title'>Mais Vendidos</h2>
      <div className='product-container'>
        <article className='new-product'>
          <div className='new-product-content'>
            <h3>{ultimoProduto?.name}</h3>
            <p>{ultimoProduto?.description}</p>
            <Link to="/products">Descubra Mais</Link>
          </div>
          <img src={ultimoProduto?.urlImage} alt={ultimoProduto?.name} />

        </article>
        <article className='new-product'>
          <div className='new-product-content'>
          <h3>{penultimoProduto?.name}</h3>
          <p>{penultimoProduto?.description}</p>
          <Link to="/products">Descubra Mais</Link>
          </div>
          <img src={penultimoProduto?.urlImage} alt={penultimoProduto?.name} />
        </article>
      </div>

    </section>
  )
}

export default NewsProducts