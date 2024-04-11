import { useLoader } from '../../context/LoaderContext'
import { useTutorial } from '../../utils/useTutorial'
import TutorialClothes from './TutorialClothes'
import TutorialLaisure from './TutorialLaisure'
import StepIcons from  '../StepIcons'
import Welcome from './Welcome'
import './style.css'
import {MoveToTop} from '../../utils/MoveToTop'

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
        <StepIcons currentStep={currentStep} step1={true} step2={true} step3={true}/>

        <div className='step-tutorial'>{currentComponent}</div>

        <div className='buttons-formsteps'>
        {currentStep != 0 && <button onClick={previousStep}>Voltar</button>}
        {lastStep ? (
          <button
          onClick={()=>{
            finallyTutorial()
            MoveToTop()
          }}
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