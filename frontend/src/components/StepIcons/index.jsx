import './style.css'
import {FaUser} from 'react-icons/fa'
import { FaMapLocationDot,FaMoneyCheckDollar } from "react-icons/fa6";

const StepIcons = ({currentStep}) => {
  return (
    <div className='icons-steps'>
     
        <div className='active'>
            <FaUser/>
            <span>Identificação</span>
        </div>
        <div className={currentStep >= 1 ? 'active' : 'nan'} >
            <FaMapLocationDot/>
            <span>Localização</span>
        </div>
        <div className={currentStep >= 2 ? 'active': 'nan'}>
            <FaMoneyCheckDollar/>
            <span>Pagamento</span>
        </div>
      
    </div>
  )
}

export default StepIcons