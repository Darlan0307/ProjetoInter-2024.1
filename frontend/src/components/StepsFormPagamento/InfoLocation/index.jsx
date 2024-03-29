import '../globalSteps.css'
import InputField from '../../ui/Input'
import { useState } from 'react'

const InfoLocation = () => {

  const [infoCep,setInfoCep] = useState("")
  const [infoRua,setInfoRua] = useState("")
  const [infoBairro,setInfoBairro] = useState("")
  const [infoCidade,setInfoCidade] = useState("")
  const [infoEstado,setInfoEstado] = useState("")


  return (
    <div>

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
          id="cidade"
          type="text"
          value={infoCidade}
          onChange={(e) => setInfoCidade(e.target.value)}
          label="Cidade"
          error={null}
          required
          autoComplete='off'
      />

      <InputField
          id="estado"
          type="text"
          value={infoEstado}
          onChange={(e) => setInfoEstado(e.target.value)}
          label="estado"
          error={null}
          required
          autoComplete='off'
      />

    </div>
  )
}

export default InfoLocation