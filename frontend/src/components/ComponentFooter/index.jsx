import './style.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { MoveToTop } from '../../utils/MoveToTop'

function validarEmail(email) {
  // Expressão regular para validação de email
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Retorna true se o email for válido, false caso contrário
  return regexEmail.test(email);
}

const ComponentFooter = () => {

  const [emailTemp,setEmailTemp] = useState('')

  const handleClick = () => {

    if(!validarEmail(emailTemp)){
      toast.error("Email inválido!")
      return;
    }

    MoveToTop()
    toast.success("Mandaremos as novidades para o seu email")
    setEmailTemp('')
  }

  return (
    <footer className='footer'>
      <article >
        <h2>Receba novidades pelo E-mail.</h2>
       <div>
        <input
        value={emailTemp}
        type="text"
        onChange={(e)=>setEmailTemp(e.target.value)}
        />
        <button
        onClick={handleClick}
        >
          <p>Quero Receber</p>
        </button>
       </div>
      </article>

      <section className="top">
        <img src={Logo} alt='logo da loja' />
        <ul>
          <li>
            <h3>Produtos</h3>
            <a href='/products'>Camisa</a>
            <a href='/products'>Blusa</a>
            <a href='/products'>Vestido</a>
            <a href='/products'>Saia</a>
          </li>
          <li>
            <h3>Parcerias</h3>
            <a href='https://pt.newchic.com/' target='_blank'>Yoins</a>
            <a href='https://amiclubwear.com/pages/fashion-blogger-program' target='_blank'>AmiClubWear</a>
            <a href='https://www.banggood.com/read-policy-1.html' target='_blank'>Bang Good</a>
          </li>
          <li>
            <h3>Fornecedores</h3>
            <a href='https://www.kaisan.com.br/' target='_blank'>Kaisan</a>
            <a href='https://renillu.com.br/' target='_blank'>Renillu</a>
          </li>
          <li>
            <h3>Código Livre</h3>
            <a href='https://github.com/Darlan0307/ProjetoInter-2024.1' target='_blank'>GitHub</a>
          </li>
          
        </ul>
      </section>

      <section className="bottom">© 2024 Império da Moda</section>
    </footer>
  )
}

export default ComponentFooter