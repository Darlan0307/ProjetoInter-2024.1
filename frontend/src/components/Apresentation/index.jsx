import './style.css'
import { useMediaQuery } from 'react-responsive';
import bigBanner from '../../assets/banner-big.png'
import smallBanner from '../../assets/banner-small.jpg'

const Apresentation = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <section className='apresentation'>
      <div className='content'>
      <h1 className='title'>Império da Moda</h1>
      <h2 className='subtitle'>Está pensando em ficar estiloso? você veio ao lugar certo.</h2>
      </div>
      
      {isMobile ? (
        <img className='banner' src={smallBanner} alt="banner" />
      ):(
        <img className='banner' src={bigBanner} alt="banner" />
      )}
    </section>
  )
}

export default Apresentation