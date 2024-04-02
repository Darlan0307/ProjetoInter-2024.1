import './style.css'
import { useProduct } from '../../context/ProductContext'
import InputField from '../ui/Input'
import { useEffect, useState } from 'react'
import { MoveToTop } from '../../utils/MoveToTop'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";

const FormEditProduct = () => {

  const navigate = useNavigate()

  const {
    productEditSelected,
    setProductEditSelected,
    updateProduct
  } = useProduct()
  
  const [productUpdated,setProductUpdated] = useState(productEditSelected)

  const handleAtributeProduct = (atribute,value) => {
    setProductUpdated((prev) =>{
      return{
        ...prev,
        [atribute]:value,
      }
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    updateProduct(productUpdated.id,productUpdated)
    setProductEditSelected(null)
    navigate("/adm")
  }

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
     (
      <div className='model-edit-product'>

      <button onClick={()=>navigate("/adm")} className='back-container-product-edit'>
          <RiArrowGoBackLine/>
          <span>Voltar</span>
      </button>

        <h2 className='subtitle-model-edit-product'>Editando o produto: <span>{productEditSelected.name}</span></h2>

        <form autoComplete='off' className='form-edit-product' onSubmit={handleSubmit}>
          <InputField
            id="name"
            type="text"
            value={productUpdated.name}
            onChange={(e) => handleAtributeProduct("name",e.target.value)}
            label="Name"
            error={null}
            required
          />

          <div className='filter-gender'>
                <div>
                  <input type="radio" name='genero' id='masculino' value="M"
                  onChange={(e) => handleAtributeProduct("gender",e.target.value)}
                  checked={productUpdated.gender  === 'M' ? true : false}
                  />
                  <label htmlFor="masculino">masculino</label>
                </div>
                <div>
                  <input type="radio" name='genero' id='feminino' value="F"
                  onChange={(e) => handleAtributeProduct("gender",e.target.value)}
                  checked={productUpdated.gender  === 'F' ? true : false}
                  />
                  <label htmlFor="feminino">feminino</label>
                </div>
          </div>
          
          <select className='selected-category-filter'
              onChange={(e) => handleAtributeProduct("category",e.target.value)}
              value={productUpdated.category}
              >
                <option value="camiseta">camiseta</option>
                <option value="blusa">blusa</option>
                <option value="calca">calça</option>
                <option value="short">short</option>
                <option value="bermuda">bermuda</option>
                <option value="saia">saia</option>
                <option value="vestido">vestido</option>
          </select>
          

          <InputField
            id="preco"
            type="text"
            value={productUpdated.price}
            onChange={(e) => {
              let valueFormated = e.target.value.replace(",",".")
              let onlyNumbers = valueFormated.replace(/[^0-9.]/g,"");
              
              handleAtributeProduct("price",Number(onlyNumbers))
            }}
            label="Preço"
            error={null}
            required
          />

          <InputField
            id="quantidade"
            type="text"
            value={productUpdated.quantity}
            onChange={(e) => {
              let valueQuantity = e.target.value
              let onlyNumbers = valueQuantity.replace(/[^0-9]/g,"");

              handleAtributeProduct("quantity",Number(onlyNumbers))
            }}
            label="Quantidade"
            error={null}
            required
          />
        <div className='description-register-product'>
          <textarea
           name="description"
           id='description'
           value={productUpdated.description}
           onChange={(e) => handleAtributeProduct("description",e.target.value)}
           required></textarea>
          <label htmlFor="description">Descrição do produto</label>
        </div>

          <button className='btn-edit' type='submit'>
            Atualizar
          </button>
        </form> 
      </div>
    )
  )
}

export default FormEditProduct