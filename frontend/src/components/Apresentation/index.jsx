import './style.css'
import banner from '../../assets/banner.png'

const Apresentation = () => {
  return (
    <section className='apresentation'>
      <div className='content'>
      <h1 className='title'>Imperio da Moda</h1>
      <h2 className='subtitle'>Está pensando em ficar estiloso? você veio ao lugar certo.</h2>
      </div>
      <img className='banner' src={banner} alt="banner" />
    </section>
  )
}

export default Apresentation