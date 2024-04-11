import './style.css'
import {FaUser} from 'react-icons/fa'
import { FaMapLocationDot,FaMoneyCheckDollar } from "react-icons/fa6";

const StepIcons = ({currentStep,step1,step2,step3}) => {
  return (
    <div className='icons-steps'>
     
        <div className='active'>
            {!step1 ? (
              <>
                <FaUser/>
                <span>Identificação</span>
              </>
            ):(
              <div className='step-active'></div>
            )}
            
        </div>
        <div className={currentStep >= 1 ? 'active' : 'nan'}>
            {!step2 ? (
              <>
                <FaMapLocationDot/>
                <span>Localização</span>
              </>
            ):(
              <div className={currentStep >= 1 ? 'step-active' : ''}></div>
            )}
        </div>
        <div className={currentStep >= 2 ? 'active': 'nan'}>
            {!step3 ? (
              <>
                <FaMoneyCheckDollar/>
                <span>Pagamento</span>
              </>
            ):(
              <div id='stepfinal' className={currentStep >= 2 ? 'step-active' : ''}></div>
            )}
            
        </div>
      
    </div>
  )
}

StepIcons.defaultProps ={
  step1:false,
  step2:false,
  step3:false
}

export default StepIcons