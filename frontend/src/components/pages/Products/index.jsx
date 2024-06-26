import { useEffect, useState,useRef } from 'react'
import {useProduct} from '../../../context/ProductContext'
import { useMediaQuery } from 'react-responsive';
import { MoveToTop } from '../../../utils/MoveToTop'
import './style.css'
import { IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import { FaRegSadCry } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import ModelProductSelected from '../../ModelProductSelected';
import PaginationProducts from '../../ui/PaginationProducts';
import InputSearch from '../../ui/InputSearch';
import gsap from 'gsap';
const Products = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const {
    products,
    filters,
    handleNameFilterChange,
    handleGenderFilterChange,
    handleCategoryFilterChange,
    handleCleanFilterChange,
    handleProductSelected
  } = useProduct()

  const [textProduct,setTextProduct] = useState("")
  const [openFiltros,setOpenFiltros] = useState(!isMobile)

  const containerAnimate = useRef(null)

  const animate = () => {
    gsap.fromTo(containerAnimate.current.querySelectorAll('.card-product'), {
      opacity: 0,
      y: window.innerHeight,
    }, {
      y: 0, // Largura da tela para mover o elemento para fora da tela,
      opacity: 1,
      ease: "back.inOut",
      duration: 2,
      stagger: 0.2,
    }); 
  }

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
    MoveToTop()
    animate()
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

        <InputSearch
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

          <div className='cards-products' ref={containerAnimate}>
            {products.length > 0 ? (
              <>
              {products.map((product)=>(
                <article className='card-product' key={product.id}
                onClick={()=>{
                  handleProductSelected(product.id)
                }}
                >
                  <img src={product.urlImage} alt={product.name} />
                  <h3>{product.name}</h3>
                  <span><FaCirclePlus/></span>
                </article>
              ))}
              </>
            ):(
              <h3 className='msg-notfilter'><span>Sem resultados</span> <FaRegSadCry/></h3>
            )}
          </div>
      </section>

      <PaginationProducts/>

      <ModelProductSelected/>
    </main>
  )
}

export default Products