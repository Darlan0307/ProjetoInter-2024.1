import { useState } from 'react'
import {useProduct} from '../../../context/ProductContext'

import './style.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

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

      </section>

    </main>
  )
}

export default Products