import AnimationLottie from '../../AnimationLottie'
import './style.css'
import animationData from '../../../JsonAnimate/mulher-segurando-roupas.json'
import GsapAnimationDirection from '../../GsapAnimationDirection'

const TutorialClothes = () => {
  return (
    <GsapAnimationDirection
      from={{ opacity: 0, x: -300 }}
      to={{ opacity: 1, x: 0 }}
      duration={1}
    >
      <section className='clothes'>
        <div className='container-animate-clothes'>
          <AnimationLottie animationData={animationData}/>
        </div>
        <h2>Temos uma grande variedade de <span>roupas</span>, para você escolher a que achar melhor.</h2>
      </section>
    </GsapAnimationDirection>
  )
}

export default TutorialClothes