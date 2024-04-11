import { useLoader } from '../../context/LoaderContext'
import { useTutorial } from '../../utils/useTutorial'
import TutorialClothes from './TutorialClothes'
import TutorialLaisure from './TutorialLaisure'
import Welcome from './Welcome'
import './style.css'

const Tutorial = () => {

  const {
    openTutorial,
    finallyTutorial
  } = useLoader()

  const stepsTutorial = [
    <Welcome/>,
    <TutorialLaisure/>,
    <TutorialClothes/>
  ]

  const {
    currentComponent,
    currentStep,
    lastStep,
    nextStep,
    previousStep
  } = useTutorial(stepsTutorial)

  if(openTutorial == 'yes'){
    return (
      <main className='tutorial'>

        <div className='step-tutorial'>{currentComponent}</div>

        <div className='buttons-formsteps'>
        {currentStep != 0 && <button onClick={previousStep}>Voltar</button>}
        {lastStep ? (
          <button
          onClick={finallyTutorial}
          >Finalizar</button>
        ):(
          <button onClick={nextStep}>Avançar</button>
        )}
      </div>
      </main>
    )
  }
}

export default Tutorial