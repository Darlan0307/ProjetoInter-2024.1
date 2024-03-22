import './styles.css'
import imgIlustration from "../../../assets/img-signin.png"
import { Link } from 'react-router-dom'
import { MoveToTop } from '../../../utils/MoveToTop'
import { useEffect } from 'react'

const SignIn = () => {

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <main className='signin'>
      <img src={imgIlustration} alt="ilustração de uma pessoa na janela" />
      <div className='content-signin'>
        <h2>Faça login</h2>
        <p>Para ter acesso a todos os nossos recursos</p>
        <form className='form-signin' autoComplete='off'>
          <div className='wrap-input'>  
            <input type="email" className='input' id='email' min={10} required/>
            <label className='label' htmlFor="email">Email</label>
          </div>
          <div className='wrap-input'>  
            <input type="password" className='input' id='password' min={6} required/>
            <label className='label' htmlFor="password">Senha</label>
          </div>
          <button type='submit' className='btn-form'>Entrar</button>
          <p className='link-form'>Não tem uma conta? <Link to="/signup">Crie agora</Link> </p>
        </form>
        
      </div>
    </main>
  )
}

export default SignIn