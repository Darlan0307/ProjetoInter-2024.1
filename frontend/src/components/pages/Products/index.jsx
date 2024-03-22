import { useState } from 'react'
import {useProduct} from '../../../context/ProductContext'

import './style.css'
import { IoIosArrowDown,IoIosArrowUp,IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
const Products = () => {

  const {
    products,
    page,
    nextPage,
    prevPage,
    handleNameFilterChange,
    handleGenderFilterChange,
    handleCategoryFilterChange
  } = useProduct()

  const [textProduct,setTextProduct] = useState("")
  const [openFiltros,setOpenFiltros] = useState(false)

  return (
    <main className='products-page'>
      <section className='section-filter-product'>
        <input 
        type="text"
        onChange={(e)=> setTextProduct(e.target.value)}
        value={textProduct}
        className='input-search'
        placeholder='Buscar produto...'
        />

        <button 
        className='btn-view-filtros'
        onClick={()=> setOpenFiltros( !openFiltros )}
        >
          <span>Ver mais filtros</span> 
          {openFiltros ? <IoIosArrowUp/>: <IoIosArrowDown/>}
        </button>

        {
          openFiltros && (
            <div className='other-filters'>

              <div className='filter-gender'>
                <div>
                  <input type="radio" name='genero' id='masculino' value="M"/>
                  <label htmlFor="masculino">masculino</label>
                </div>
                <div>
                  <input type="radio" name='genero' id='feminino' value="F"/>
                  <label htmlFor="feminino">feminino</label>
                </div>
              </div>

              <select className='selected-category-filter'>
                <option value="" disabled selected>Categoria</option>
                <option value="camiseta">camiseta</option>
                <option value="blusa">blusa</option>
                <option value="calca">calça</option>
                <option value="short">short</option>
                <option value="bermuda">bermuda</option>
                <option value="saia">saia</option>
                <option value="vestido">vestido</option>
              </select>

              <button className='btn-clean-filtros'>Limpar Filtros</button>
            </div>
          )
        }
      </section>
          
      <section className='section-products-filtred'>
          <h2 className='section-products-subtitle'>{
            textProduct ? `Resultados para  "${textProduct}"` : 'Todos os produtos'
          }</h2>

          <div className='cards-products'>
            {products.map((product)=>(
              <article className='card-product' key={product._id}>
                <img src={product.urlImage} alt={product.name} />
                <h3>{product.name}</h3>
                <span><FaCirclePlus/></span>
              </article>
            ))}
          </div>
      </section>

      <section className='section-pagination'>
        <button 
        className="custom-prev-button"
        disabled = {page === 1? true: false}
        >
          <span>Anterior</span>
          <IoIosArrowBack/>
        </button>
        <button 
        className="custom-next-button"
        // disabled={products.length == 9 ? false : true}
        >
          <span>Próximo</span>
          <IoIosArrowForward/>
        </button>
      </section>

    </main>
  )
}

export default Products