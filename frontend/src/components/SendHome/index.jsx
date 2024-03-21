import './style.css'

import ilustration1 from '../../assets/ilustration-1.png'
import ilustration3 from '../../assets/ilustration-3.png'
import ilustration4 from '../../assets/ilustration-4.png'

const SendHome = () => {
  return (
    <section className='send-home'>
      <article className='send-home-card'>
        <img src={ilustration1} alt="imagem ilustrativa 1" />
        <h2>Aqui no <span>império da moda</span> você encontra as melhores roupas</h2>
      </article>
      <article id='card-reverse' className='send-home-card'>
        <img src={ilustration3} alt="imagem ilustrativa 2" />
        <h2>Presenteie aquela pessoa que você sabe que gosta de <span>roupas</span> </h2>
      </article>
      <article className='send-home-card'>
        <img src={ilustration4} alt="imagem ilustrativa 3" />
        <h2>Aqui você leva <span>muito</span>, e paga <span>menos</span></h2>
      </article>
    </section>
  )
}

export default SendHome