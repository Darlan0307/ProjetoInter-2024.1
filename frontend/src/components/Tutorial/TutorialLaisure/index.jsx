import AnimationLottie from '../../AnimationLottie'
import './style.css'
import animationData from '../../../JsonAnimate/mulher-no-note.json'
import GsapAnimationDirection from '../../GsapAnimationDirection'

const TutorialLaisure = () => {
  return (
    <GsapAnimationDirection
      from={{ opacity: 0, x: -300 }}
      to={{ opacity: 1, x: 0 }}
      duration={1}
    >
      <section className='laisure'>
        <div className='container-animate-note'>
          <AnimationLottie animationData={animationData}/>
        </div>
        <h2>Aqui na <span>Império</span>, você pode encontrar suas roupas preferidas de casa.</h2>
      </section>
    </GsapAnimationDirection>
  )
}

export default TutorialLaisure