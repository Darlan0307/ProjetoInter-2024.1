import './style.css'
import logo from '../../../assets/logo.png'

const Welcome = () => {
  return (
    <section className='welcome'>
      <img src={logo} alt="logo da loja" />
      <h1>Seja Bem-vindo(a) ao <span>Império da Moda</span></h1>
      <p>Somos uma empresa <strong>séria</strong> e <strong>comprometida</strong> a atender da melhor forma, os nossos <strong>clientes</strong>.</p>
    </section>
  )
}

export default Welcome