import './style.css'
import InputSearch from '../../ui/InputSearch';
import { useProduct } from '../../../context/ProductContext';
import { useEffect, useState,useRef } from 'react';
import PaginationProducts from '../../ui/PaginationProducts';
import { FaRegSadCry,FaRegEdit } from 'react-icons/fa';
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { MoveToTop } from '../../../utils/MoveToTop'
import gsap from 'gsap';
const Admin = () => {

  const [textProduct,setTextProduct] = useState("")

  const {
    products,
    handleNameFilterChange,
    handleProductEditSelected,
    handleCleanFilterChange,
    removeProduct
  } = useProduct()

  let timeoutId

  const containerAnimate = useRef(null)

  const animate = () => {
    gsap.fromTo(containerAnimate.current.querySelectorAll('.product-adm'), {
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

  const handleSearchChange = (e) => {
    setTextProduct(e.target.value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      handleNameFilterChange(textProduct);
    }, 1000);
  };

  useEffect(()=>{
    MoveToTop()
    animate()
    handleCleanFilterChange()
  },[])

  return (
    <main className='adm-page'>
      <div className='container-search-add'>
      <InputSearch
        type="text"
        onChange={handleSearchChange}
        value={textProduct}
        className='input-search'
        placeholder='Buscar produto...'
        />

        <Link to="/newproduct" className='add-product'>
          <span>
            Adicionar Produto
          </span>
          <CiCirclePlus/>
        </Link>
      </div>

      <h2 className='section-products-subtitle'>{
            textProduct ? `Resultados para  "${textProduct}"` : 'Todos os produtos'
          }
      </h2> 

      <section className='container-products-adm' ref={containerAnimate}>
          {products.length > 0 ? (
            <>
              {products.map((produto)=>(
            <article className='product-adm' key={produto.id}>
              <p className='id-product-adm'>
                <span>ID:</span>{produto.id}
              </p>
              <img className='img-product-adm' src={produto.urlImage} alt={produto.name} />
              <h3 className='name-product-adm'>{produto.name}</h3>
              <div className='action-product-adm'>
                <Link to={`/product/${produto.id}`} className='edit-product' onClick={()=>handleProductEditSelected(produto.id)}>
                  <FaRegEdit/>
                </Link>
                <button className='remove-product' onClick={()=>removeProduct(produto.id)}>
                  <IoTrashBinOutline/>
                </button>
              </div>
            </article>
          ))}
            </>
          ):(
            <h3 className='msg-notfilter'><span>Sem resultados</span> <FaRegSadCry/></h3>
          )}
      </section>
      
      <PaginationProducts/>
    </main>
  )
}

export default Admin