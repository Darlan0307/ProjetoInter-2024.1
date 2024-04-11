import AnimationLottie from '../../AnimationLottie'
import './style.css'
import animationData from '../../../JsonAnimate/mulher-segurando-roupas.json'

const TutorialClothes = () => {
  return (
    <section className='clothes'>
      <div className='container-animate-clothes'>
        <AnimationLottie animationData={animationData}/>
      </div>
      <h2>Temos uma grande variedade de <span>roupas</span>, para você escolher a que achar melhor.</h2>
    </section>
  )
}

export default TutorialClothes