import '../globalSteps.css'
import InputField from '../../ui/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoader } from '../../../context/LoaderContext'
import { toast } from 'react-toastify'
import GsapAnimationDirection from '../../GsapAnimationDirection'

const InfoLocation = () => {

  const {
    setIsLoading
  } = useLoader()

  const [infoCep,setInfoCep] = useState("")
  const [infoRua,setInfoRua] = useState("")
  const [infoBairro,setInfoBairro] = useState("")
  const [infoCidade,setInfoCidade] = useState("")
  const [infoEstado,setInfoEstado] = useState("")
  const [infoComplemento,setInfoComplemento] = useState("")
  const [infoNumCasa,setInfoNumCasa] = useState("")

  const queryDataCep = async() => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://cep.awesomeapi.com.br/json/${infoCep}`)

      setInfoRua(response.data.address)
      setInfoBairro(response.data.district)
      setInfoCidade(response.data.city)
      setInfoEstado(response.data.state)
      setTimeout(()=>{
        toast.success("CEP encontrado!")
      },2000)
    } catch (error) {
      setTimeout(()=>{
        toast.error(error.response.data.message)
      },2000)
    }finally{
      setTimeout(()=>{
        setIsLoading(false)
      },2000)
    }
  }
  
  useEffect(()=>{

    if(infoCep.length == 8){
      queryDataCep()
    }

  },[infoCep])

  return (
    <GsapAnimationDirection
      from={{ opacity: 0, x: 300 }}
      to={{ opacity: 1, x: 0 }}
      duration={.6}
    >
      <div className='container-form-generec'>

      <h3>Para onde vamos enviar?</h3>

      <InputField
          id="cep"
          type="text"
          value={infoCep}
          onChange={(e) => setInfoCep(e.target.value)}
          label="CEP"
          error={null}
          required
          autoComplete='off'
      />

      <div className='group-input'>
      <InputField
          id="estado"
          type="text"
          value={infoEstado}
          onChange={(e) => setInfoEstado(e.target.value)}
          label="Estado"
          error={null}
          required
          autoComplete='off'
      />

      <InputField
          id="cidade"
          type="text"
          value={infoCidade}
          onChange={(e) => setInfoCidade(e.target.value)}
          label="Cidade"
          error={null}
          required
          autoComplete='off'
      />
      </div>

      <InputField
          id="bairro"
          type="text"
          value={infoBairro}
          onChange={(e) => setInfoBairro(e.target.value)}
          label="Bairro"
          error={null}
          required
          autoComplete='off'
      />

      <InputField
          id="rua"
          type="text"
          value={infoRua}
          onChange={(e) => setInfoRua(e.target.value)}
          label="Rua"
          error={null}
          required
          autoComplete='off'
      />

      <div className='group-input'>
      <InputField
            id="complemento"
            type="text"
            value={infoComplemento}
            onChange={(e) => setInfoComplemento(e.target.value)}
            label="Complemento"
            error={null}
            required
            autoComplete='off'
        />
        <InputField
            id="numCasa"
            type="text"
            value={infoNumCasa}
            onChange={(e) => setInfoNumCasa(e.target.value)}
            label="Nº Casa"
            error={null}
            required
            autoComplete='off'
        />
      </div>

      </div>
    </GsapAnimationDirection>
  )
}

export default InfoLocation