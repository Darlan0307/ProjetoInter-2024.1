import './style.css'
import { GiClothes,GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import imgOnlineShop from '../../assets/img-dialogo (1).jpg'
import { Link } from 'react-router-dom'

const ChoseUs = () => {

  const dataServices = [
    {
      icon: <GiClothes/>,
      title:"Qualidade e variedade",
      description:"Oferecemos roupas de alta qualidade, com uma grande variedade de estilos para atender às suas necessidades"
    },
    {
      icon: <GiTakeMyMoney/>,
      title:"Preços competitivos",
      description:"Buscamos oferecer os melhores preços do mercado, sem comprometer a qualidade dos nossos produtos"
    },
    {
      icon: <MdOutlineSecurity/>,
      title:"Segurança e confiabilidade",
      description:"Somos uma empresa séria e comprometida com a segurança de seus dados"
    }
  ]

  return (
    <section className='choseus'>
      <h2 className='subtitle-choseus'>Por que escolher o <span>Império da Moda</span>?</h2>

      <div className='container-choseus-services'>
        {dataServices.map((service,index)=>(
          <article key={index}>
            <span>
              {service.icon}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className='msg-choseus'>
        <img className='online-shop' src={imgOnlineShop} alt="online shop" />
        <h2>Você está esperando oque para conhecer os nossos <Link to="/products">produtos</Link>?</h2>
      </div>
    </section>
  )
}

export default ChoseUs