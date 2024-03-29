import { Link } from 'react-router-dom'
import AnimationLottie from '../../AnimationLottie'
import './style.css'

const MessageThanks = () => {
  return (
    <main className='container-thanks'>
      <div className='container-animatejson'>
        <AnimationLottie/>
      </div>
      <h2>Pedido Finalizado!</h2>
      <p>Ficamos felizes por escolher os nossos produtos.</p>
      <p>Agora vamos verificar suas informações para realizarmos a entrega o mais rápido possível.</p>
      <Link to="/">Voltar ao início</Link>
    </main>
  )
}

export default MessageThanks