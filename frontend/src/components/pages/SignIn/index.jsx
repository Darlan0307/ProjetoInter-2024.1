import './styles.css'
import imgIlustration from "../../../assets/img-signin.png"
import { Link } from 'react-router-dom'
import { MoveToTop } from '../../../utils/MoveToTop'
import { useEffect, useState } from 'react'
import InputField from '../../ui/Input'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
const SignIn = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigate()
  const {authenticateUser} = useAuth()

  useEffect(()=>{
    MoveToTop()
  },[])

  const handleSubmit = async(event) => {
    event.preventDefault()
  
    const sucess = await authenticateUser({email, password})
    
    if (sucess) navigation("/");
 
  }
  
  return (
    <main className='signin'>
      <img src={imgIlustration} alt="ilustração de uma pessoa na janela" />
      <div className='content-signin'>
        <h2>Faça login</h2>
        <p>Para ter acesso a todos os nossos recursos</p>
        <form className='form-signin' autoComplete='off' onSubmit={handleSubmit}>
          <InputField
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          error={null}
          required
        />

        <InputField
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Senha"
          error={null}
          required
        />
          <button type='submit' className='btn-form'>Entrar</button>
          <p className='link-form'>Não tem uma conta? <Link to="/signup">Crie agora</Link> </p>
        </form>
        
      </div>
    </main>
  )
}

export default SignIn