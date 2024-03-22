import { useEffect, useState } from 'react'
import {useProduct} from '../../../context/ProductContext'
import { useMediaQuery } from 'react-responsive';
import './style.css'
import { IoIosArrowDown,IoIosArrowUp,IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { FaRegSadCry } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const Products = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const {
    products,
    page,
    nextPage,
    prevPage,
    filters,
    handleNameFilterChange,
    handleGenderFilterChange,
    handleCategoryFilterChange,
    handleCleanFilterChange
  } = useProduct()

  const [textProduct,setTextProduct] = useState("")
  const [openFiltros,setOpenFiltros] = useState(!isMobile)

  let timeoutId = null;

  const handleSearchChange = (e) => {
    setTextProduct(e.target.value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      handleNameFilterChange(textProduct);
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      handleNameFilterChange(textProduct);
    }, 1000);
  }, [textProduct]);

  return (
    <main className='products-page'>
      <section className='section-filter-product'>
        <input 
        type="text"
        onChange={handleSearchChange}
        value={textProduct}
        className='input-search'
        placeholder='Buscar produto...'
        />

        {
          isMobile && (
            <button 
        className='btn-view-filtros'
        onClick={()=> setOpenFiltros( !openFiltros )}
        >
          <span>Ver mais filtros</span> 
          {openFiltros ? <IoIosArrowUp/>: <IoIosArrowDown/>}
        </button>
          )
        }

        {
          openFiltros && (
            <div className='other-filters'>

              <div className='filter-gender'>
                <div>
                  <input type="radio" name='genero' id='masculino' value="M"
                  onChange={(e)=>handleGenderFilterChange(e)}
                  checked={filters.gender  === 'M' ? true : false}
                  />
                  <label htmlFor="masculino">masculino</label>
                </div>
                <div>
                  <input type="radio" name='genero' id='feminino' value="F"
                  onChange={(e)=>handleGenderFilterChange(e)}
                  checked={filters.gender  === 'F' ? true : false}
                  />
                  <label htmlFor="feminino">feminino</label>
                </div>
              </div>

              <select className='selected-category-filter'
              onChange={handleCategoryFilterChange}
              value={filters.category}
              >
                <option value="" disabled selected>Categoria</option>
                <option value="camiseta">camiseta</option>
                <option value="blusa">blusa</option>
                <option value="calca">calça</option>
                <option value="short">short</option>
                <option value="bermuda">bermuda</option>
                <option value="saia">saia</option>
                <option value="vestido">vestido</option>
              </select>

              <button className='btn-clean-filtros'
              onClick={()=>{
                handleCleanFilterChange()
                setTextProduct("")
              }}
              >Limpar Filtros</button>
            </div>
          )
        }
      </section>
          
      <section className='section-products-filtred'>
          <h2 className='section-products-subtitle'>{
            textProduct ? `Resultados para  "${textProduct}"` : 'Todos os produtos'
          }</h2>

          <div className='cards-products'>
            {products.length > 0 ? (
              <>
              {products.map((product)=>(
                <article className='card-product' key={product.id}>
                  <img src={product.urlImage} alt={product.name} />
                  <h3>{product.name}</h3>
                  <span><FaCirclePlus/></span>
                </article>
              ))}
              </>
            ):(
              <h3><span>Sem resultados</span> <FaRegSadCry/></h3>
            )}
          </div>
      </section>

      <section className='section-pagination'>
        {page > 1 && (
          <button 
          className="custom-prev-button"
          onClick={prevPage}
          >
            <span>Anterior</span>
            <IoIosArrowBack/>
        </button>
        )}
          
        {products.length > 8 && (
          <button 
          className="custom-next-button"
          onClick={nextPage}
          >
            <span>Próximo</span>
            <IoIosArrowForward/>
          </button>
        )}
      </section>

    </main>
  )
}

export default Products