import './style.css'
import Logo from '../../assets/logo.png'

const ComponentFooter = () => {
  return (
    <footer className='footer'>
      <article >
        <h2>Receba novidades pelo E-mail.</h2>
       <div>
        <input type="text" />
          <button>
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