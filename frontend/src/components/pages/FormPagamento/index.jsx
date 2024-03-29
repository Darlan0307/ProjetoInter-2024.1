import InfoUser from '../../StepsFormPagamento/InfoUser'
import InfoPagamento from '../../StepsFormPagamento/InfoPagamento'
import InfoLocation from '../../StepsFormPagamento/InfoLocation'
import './style.css'
import { useForm } from '../../../utils/useForm'
import StepIcons from '../../StepIcons'


const FormPagamento = () => {

  const steps = [
    <InfoUser/>,
    <InfoLocation/>,
    <InfoPagamento/>
  ]

  const {
    currentStep
    ,currentComponent
    ,nextStep
    ,previousStep
    ,lastStep
  } = useForm(steps)

  return (
    <main>
      <h2>Formulário de Compra</h2>
      <StepIcons currentStep={currentStep}/>

      <div>{currentComponent}</div>

      <div className='buttons-formsteps'>
        {currentStep != 0 && <button onClick={previousStep}>Voltar</button>}
        {lastStep ? (
          <button >Finalizar</button>
        ):(
          <button onClick={nextStep}>Avançar</button>
        )}
      </div>
    </main>
  )
}

export default FormPagamento