import './style.css'

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
            <input type="text" className='input' id='name'/>
            <label htmlFor="name">Nome</label>
          </div>
          <div className='wrap-input'>  
            <input type="text" className='input' id='email'/>
            <label htmlFor="email">Email</label>
          </div>
          <div className='wrap-input'>  
            <input type="password" className='input' id='password'/>
            <label htmlFor="password">Senha</label>
          </div>
          <div className='wrap-input'>  
            <input type="confirmpassword" className='input' id='confirmpassword'/>
            <label htmlFor="confirmpassword">Confirme a senha</label>
          </div>
        </form>
        
      </div>
    </main>
  )
}

export default SignUp