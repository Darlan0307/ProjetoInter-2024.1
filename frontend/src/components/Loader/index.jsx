import { useState } from 'react'
import { useLoader } from '../../context/LoaderContext'
import './style.css'
import { useEffect } from 'react'

const Loader = () => {

  const { isLoading } = useLoader()

  const [openMsg,setOpenMsg] = useState(false)

  useEffect(()=>{

    setOpenMsg(false)
    
    const id = setTimeout(()=>{
      setOpenMsg(true)
    },5000)

    return () => clearTimeout(id)
  },[isLoading])

  return (
    isLoading && (
      <div className='container-loader'>
        <h2>Carregando...</h2>
        <div className="container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
        {
          openMsg && <p>Só demora um pouco na primeira requisição.</p>
        }
      </div>
    )
  )
}

export default Loader