import { useEffect, useMemo } from 'react'
import { useProduct } from '../../../context/ProductContext'
import './style.css'
import { Link } from 'react-router-dom'
import { FaPlus,FaMinus } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { MoveToTop } from '../../../utils/MoveToTop'

const Handbag = () => {

  const {
    priceTotal,
    productsHandbag,
    removeProductHandbag,
    plusQtdItemHandbag,
    minusQtdItemHandbag
  } = useProduct()


  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <main className='page-handbag'>
      <h2>Sua Bolsa</h2>
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
                    >
                      <FaPlus/>
                    </button>
                    <span>{product.qtdItem}</span>
                    <button
                    onClick={()=> minusQtdItemHandbag(product.id)}
                    >
                      <FaMinus/>
                    </button>
                  </div>
                  <button
                  onClick={()=>removeProductHandbag(product.id)}
                  id='remove-product-handbag'
                  >
                    <IoTrashBinSharp/>  
                  </button>  
                </article>
              ))}
            </section>

            <section className='price-total'>
              <p>Valor Total: <span>R${priceTotal},00</span></p>
            </section>

            <Link to="/formsteps" className='btn-handgab'>
              Comprar Tudo
            </Link>
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