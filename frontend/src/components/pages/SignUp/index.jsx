import './style.css'
import { Link } from 'react-router-dom'

import imgIlustration from '../../../assets/img-signup.png'

const SignUp = () => {
  return (
    <main className='signup'>
      <img src={imgIlustration} alt="ilustração de uma pessoa na janela" />
      <div className='content-signup'>
        <h2>Crie sua conta agora</h2>
        <p>Para ter acesso a todos os nossos recursos</p>

        <form className='form-signup' autoComplete='off'>
          <div className='wrap-input'>  
            <input type="text" className='input' id='name' min={3} required/>
            <label className='label' htmlFor="name">Nome</label>
          </div>
          <div className='wrap-input'>  
            <input type="email" className='input' id='email' min={10} required/>
            <label className='label' htmlFor="email">Email</label>
          </div>
          <div className='wrap-input'>  
            <input type="password" className='input' id='password' min={6} required/>
            <label className='label' htmlFor="password">Senha</label>
          </div>
          <div className='wrap-input'>  
            <input type="password" className='input' id='confirmpassword'  min={6} required/>
            <label className='label' htmlFor="confirmpassword">Confirme a senha</label>
          </div>
          <button type='submit' className='btn-form'>Criar Conta</button>
          <p className='link-form'>Já tem uma conta? <Link to="/signin">Faça login</Link> </p>
        </form>
        
      </div>
    </main>
  )
}

export default SignUp