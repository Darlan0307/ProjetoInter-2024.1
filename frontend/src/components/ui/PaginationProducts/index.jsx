import { useProduct } from '../../../context/ProductContext'
import { MoveToTop } from '../../../utils/MoveToTop'
import './style.css'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const PaginationProducts = () => {

  const {
    products,
    page,
    nextPage,
    prevPage
  } = useProduct()

  return (
    <section className='section-pagination'>
        {page > 1 && (
          <button 
          className="custom-prev-button"
          onClick={()=>{
            MoveToTop()
            prevPage()
          }}
          >
            <span>Anterior</span>
            <IoIosArrowBack/>
        </button>
        )}
          
        {products.length > 8 && (
          <button 
          className="custom-next-button"
          onClick={()=>{
            MoveToTop()
            nextPage()
          }}
          >
            <span>Próximo</span>
            <IoIosArrowForward/>
          </button>
        )}
      </section>
  )
}

export default PaginationProducts