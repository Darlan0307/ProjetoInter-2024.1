import { useLoader } from '../../context/LoaderContext'
import './style.css'

const Loader = () => {

  const { isLoading } = useLoader()

  return (
    isLoading && (
      <div className='container-loader'>
        <h2>Carregando...</h2>
        <div class="container">
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>

      </div>
    )
  )
}

export default Loader