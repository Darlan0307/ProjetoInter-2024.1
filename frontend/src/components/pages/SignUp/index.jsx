import './style.css'
import { Link } from 'react-router-dom'
import { MoveToTop } from '../../../utils/MoveToTop'
import imgIlustration from '../../../assets/img-signup.png'
import { useEffect, useState } from 'react'
import { ValidateFormUser } from '../../../utils/ValidateFormUser'
import InputField from '../../ui/Input'
import { toast } from 'react-toastify'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
const SignUp = () => {

  const { registerUser } = useAuth()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const [erros,setErros] = useState(null)

  const navigation = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      setErros(null)

    const userData = {
      name,
      email,
      password,
      confirmPassword
    }

    const objErros = ValidateFormUser(userData);

    if(Object.keys(objErros).length > 0){
      setErros(objErros)
      toast.warn("Preencha todos os campos corretamente")
      return;
    }

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    registerUser(userData)
    navigation("/")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <main className='signup'>
      <img src={imgIlustration} alt="ilustração de uma pessoa na janela" />
      <div className='content-signup'>
        <h2>Crie sua conta agora</h2>
        <p>Para ter acesso a todos os nossos recursos</p>

        <form className='form-signup' autoComplete='off' onSubmit={handleSubmit}>

        <InputField
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Nome"
          error={erros?.name}
          required
        />

        <InputField
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          error={erros?.email}
          required
        />

        <InputField
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
          error={erros?.password}
          required
        />

        <InputField
          id="confirmpassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirme a senha"
          error={erros?.confirmPassword}
          required
        />

        <button type='submit' className='btn-form'>Criar Conta</button>
        <p className='link-form'>Já tem uma conta? <Link to="/signin">Faça login</Link> </p>
        </form>
        
      </div>
    </main>
  )
}

export default SignUp