import AnimationLottie from '../../AnimationLottie'
import './style.css'
import animationData from '../../../JsonAnimate/mulher-no-note.json'

const TutorialLaisure = () => {
  return (
    <section className='laisure'>
      <div className='container-animate-note'>
        <AnimationLottie animationData={animationData}/>
      </div>
      <h2>Aqui na <span>Império</span>, você pode encontrar suas roupas preferidas de casa.</h2>
    </section>
  )
}

export default TutorialLaisure