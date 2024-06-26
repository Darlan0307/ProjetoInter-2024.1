import './style.css'
import InputField from '../../ui/Input'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";
import { useState } from 'react';
import { api } from '../../../services/api'
import { toast } from 'react-toastify'
import { useLoader } from '../../../context/LoaderContext'

const FormRegisterProduct = () => {

  const [image, setImage] = useState(null);
  const [nameImage,setNameImage] = useState('')

  const {
    setIsLoading
  } = useLoader()

  const navigate = useNavigate()

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setNameImage(e.target.files[0].name)
  };

  const formatValue = (value) => {
    let valueFormated = value.replace(/[^0-9]/g,"");

    return valueFormated
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData()
    formData.append("imageProduct",image)
    formData.append("name",e.target.name.value)
    formData.append("gender",e.target.gender.value)
    formData.append("category",e.target.category.value)
    formData.append("price",formatValue(e.target.price.value))
    formData.append("quantity",formatValue(e.target.quantity.value))
    formData.append("description",e.target.description.value)

    try {
      const response = await api.post("/product",formData)

      toast.success(response.data);
      navigate("/adm")
    } catch (error) {
      toast.warn(error.response.data.error)
    }finally{
      setIsLoading(false)
    }

  }


  return (
    <main className='container-register-product'>

      <button onClick={()=>navigate("/adm")} className='back-container-product-edit'>
          <RiArrowGoBackLine/>
          <span>Voltar</span>
      </button>

      <h2>Cadastro de um novo produto</h2>

      <form className='form-register-product' onSubmit={handleSubmit} autoComplete='off'>

      <div className='container-input-image-product'>
        <label className={`custum-file-upload ${nameImage ? "isImage" : ''}`} htmlFor="file">
        <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
        </div>
        <div className="text">
          <span>{nameImage ? nameImage : "Click para Colocar Imagem"}</span>
          </div>
          <input type="file" id="file" onChange={handleImageChange} required/>
        </label>
      </div>

        <InputField
          id="name"
          type="text"
          name="name"
          label="Nome"
          error={null}
          required
        />

        <div className='gender-register-product'>
          <p>Gênero:</p>
          <div>
            <input type="radio" name='gender' id='masculino' value="M" required/>
            <label htmlFor="masculino">masculino</label>
          </div>
          <div>
            <input type="radio" name='gender' id='feminino' value="F" required/>
            <label htmlFor="feminino">feminino</label>
          </div>
        </div>

        <select className='category-register-product' name='category' required>
          <option value="" disabled selected>Categoria</option>
          <option value="camiseta">camiseta</option>
          <option value="blusa">blusa</option>
          <option value="calca">calça</option>
          <option value="short">short</option>
          <option value="bermuda">bermuda</option>
          <option value="saia">saia</option>
          <option value="vestido">vestido</option>
        </select>

        <InputField
          id="price"
          type="text"
          name="price"
          label="Preço"
          error={null}
          required
        />

        <InputField
          id="quantity"
          type="text"
          name="quantity"
          label="Quantidade"
          error={null}
          required
        />

        <div className='description-register-product'>
          <textarea name="description" id='description' required></textarea>
          <label htmlFor="description">Descrição do produto</label>
        </div>

        <button className='btn-register-product' type='submit'>Cadastrar</button>
      </form>

    </main>
  )
}

export default FormRegisterProduct