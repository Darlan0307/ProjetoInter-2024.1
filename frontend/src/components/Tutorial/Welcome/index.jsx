import './style.css'
import logo from '../../../assets/logo.png'
import GsapAnimationDirection from '../../GsapAnimationDirection'

const Welcome = () => {
  return (
    <GsapAnimationDirection
      from={{ opacity: 0, y: 300 }}
      to={{ opacity: 1, y: 0 }}
      duration={1}
    >
      <section className='welcome'>
        <img src={logo} alt="logo da loja" />
        <h1>Seja Bem-vindo(a) ao <span>Império da Moda</span></h1>
        <p>Somos uma empresa <strong>séria</strong> e <strong>comprometida</strong> a atender da melhor forma, os nossos <strong>clientes</strong>.</p>
      </section>
    </GsapAnimationDirection>
  )
}

export default Welcome