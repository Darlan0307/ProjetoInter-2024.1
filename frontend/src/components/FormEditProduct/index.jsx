import './style.css'
import { useProduct } from '../../context/ProductContext'
import { IoIosCloseCircle } from 'react-icons/io'
import InputField from '../ui/Input'
import { useState } from 'react'
import { MoveToTop } from '../../utils/MoveToTop'

const FormEditProduct = () => {

  
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
    // console.log(productUpdated);
    setProductEditSelected(null)
    MoveToTop()
  }

  return (
     (
      <div className='model-edit-product'>

      <button className='close-container-product-edit' onClick={()=>setProductEditSelected(null)}>
          <IoIosCloseCircle/>
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
          <InputField
            id="descricao"
            type="text"
            value={productUpdated.description}
            onChange={(e) => handleAtributeProduct("description",e.target.value)}
            label="Descrição"
            error={null}
            required
          />
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

          <InputField
            id="preco"
            type="text"
            value={productUpdated.price}
            onChange={(e) => {
              let value = e.target.value

              let valueFormated = value.replace(",",".")

              handleAtributeProduct("price",valueFormated)
            }}
            label="Preço"
            error={null}
            required
          />

          <InputField
            id="quantidade"
            type="text"
            value={productUpdated.quantity}
            onChange={(e) => handleAtributeProduct("quantity",e.target.value)}
            label="Quantidade"
            error={null}
            required
          />

          <button className='btn-edit' type='submit'>
            Atualizar
          </button>
        </form> 

        <div className='close-model-edit' onClick={()=>setProductEditSelected(null)}></div>
      </div>
    )
  )
}

export default FormEditProduct