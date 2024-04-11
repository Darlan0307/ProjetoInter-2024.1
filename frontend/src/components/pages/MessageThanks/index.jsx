import { Link } from 'react-router-dom'
import AnimationLottie from '../../AnimationLottie'
import './style.css'
import { useEffect } from 'react'
import { MoveToTop } from '../../../utils/MoveToTop'
import animationData from '../../../JsonAnimate/checked.json';

const MessageThanks = () => {

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <main className='container-thanks'>
      <div className='container-animatejson'>
        <AnimationLottie animationData={animationData}/>
      </div>
      <h2>Pedido Finalizado!</h2>
      <p>Ficamos felizes por escolher os nossos produtos.</p>
      <p>Agora vamos verificar suas informações para realizarmos a entrega o mais rápido possível.</p>
      <Link to="/">Voltar ao início</Link>
    </main>
  )
}

export default MessageThanks