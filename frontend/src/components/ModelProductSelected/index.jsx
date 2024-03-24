import { useProduct } from '../../context/ProductContext';
import  './style.css'
import { toast } from "react-toastify";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
const ModelProductSelected = () => {

  const {
    productSelected,
    setProductSelected
  } = useProduct()

  const {
    signed
  } = useAuth()

  const navigation = useNavigate()

  return (
    productSelected && (
     <div className='model-container-product'>
       <div className='container-product'>
        <button className='close-container-product' onClick={()=>setProductSelected(null)}>
          <IoIosCloseCircle/>
        </button>
        <article 
        className='card-product-selected' 
        >
          <img src={productSelected.urlImage} alt={productSelected.name} />
          <div className='card-product-selected-info'>
            <h2 className='title-product-selected'>{productSelected.name}</h2>
            <p className='price-product-selected'>R${productSelected.price}</p>
            <div className='amounts-product-selected'>
              <p className='quantity-product-selected'><span>Quandidade:</span>{productSelected.quantity}</p>
              <p className='gender-product-selected'><span>Gênero:</span>{productSelected.gender}</p>
            </div>
            <div className='size-product-selected'>
              <div>
                <input type="radio" name="size" id="p" />
                <label htmlFor="p">P</label>
              </div>
              <div>
                <input type="radio" name="size" id="m"/>
                <label htmlFor="m">M</label>
              </div>
              <div>
                <input type="radio" name="size" id="g" />
                <label htmlFor="g">G</label>
              </div>
            </div>
            <p className='description-product-selected'>{productSelected.description}
            </p>
            <button className='add-cart'
            onClick={()=>{
              setProductSelected(null)
              if(!signed){
                toast.warn("Faça Login primeiro")
                navigation("/signin")
                return;
              }

              toast.warn("Produto adicionado ao carrinho")
            }}
            ><span>Adicionar ao carrinho</span> <FaCartArrowDown/></button>
          </div>
        </article>
      </div>

      <div className='close-model' onClick={()=>setProductSelected(null)}></div>
     </div>
    )
  )
}

export default ModelProductSelected