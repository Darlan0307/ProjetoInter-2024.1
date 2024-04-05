import '../globalSteps.css'
import InputField from '../../ui/Input'
import { useAuth } from '../../../context/AuthContext'
import { useEffect, useState } from 'react'
import { MoveToTop } from '../../../utils/MoveToTop'

const InfoUser = () => {

  const { user } = useAuth()

  const [infoName,setInfoName] = useState(user.name)
  const [infoEmail,setInfoEmail] = useState(user.email)
  const [infoFone,setInfoFone] = useState()

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <div className='container-form-generec'>

      <h3>Confirme seus Dados</h3>

      <InputField
          id="name"
          type="text"
          value={infoName}
          onChange={(e) => setInfoName(e.target.value)}
          label="Nome"
          error={null}
          required
          autoComplete='off'
        />

        <InputField
          id="email"
          type="text"
          value={infoEmail}
          onChange={(e) => setInfoEmail(e.target.value)}
          label="Email"
          error={null}
          required
          autoComplete='off'
        />  

      <InputField
          id="fone"
          type="text"
          value={infoFone}
          onChange={(e) => setInfoFone(e.target.value)}
          label="Telefone"
          error={null}
          required
          autoComplete='off'
      />

    </div>
  )
}

export default InfoUser