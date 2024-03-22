import './style.css'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

// Imagens carrossel
import camiseta from '../../assets/camisa-1.png'
import vestido from '../../assets/vestido-removebg-preview.png'
import saia from '../../assets/saia-removebg-preview.png'
import bermuda from '../../assets/bermuda-removebg-preview.png'

// Categorias
const dataCategory = [
  {
    image: camiseta,
    title: "Camisetas",
    description:"Camisetas feitas com materiais macios e respiráveis para o seu dia a dia.",
  },
  {
    image: vestido,
    title: "Vestidos",
    description:"Vestidos para o dia a dia, festas, eventos especiais e muito mais.",
  },
  {
    image: saia,
    title: "Saias",
    description:"Saias para o dia a dia, festas, eventos especiais e muito mais.",
  },
  {
    image: bermuda,
    title: "Bermudas",
    description:"Bermudas cargo, com bolsos, estampadas e muito mais.",
  },
]

const CarrosselPrincipal = () => {

  const swiper = useSwiper()

  return (
    <section className='carousel'>
      <h2 className='carousel-subtitle'>Nós Temos</h2>

      <Swiper
      className='container-carousel'
      navigation = {{
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      }}
      slidesPerView={1}
			loop= {true}
      autoplay={{
            delay:2000,
            disableOnInteraction: true
          }
        }
      >

        {dataCategory.map((category,index)=>(
          <SwiperSlide key={index} className='slide-cards-category'>
            <article className='card-category'>
              <img src={category.image} alt={category.title} className='image-card-category'/>
              <div className='content-card'>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to="/products"> <CiBookmarkPlus/> <span>Ver Mais</span></Link>
              </div>
            </article>
          </SwiperSlide>
        ))}

          
        {/* <div className="action-carousel">
        <button className="custom-prev-button" onClick={() => swiper?.slidePrev()}><IoIosArrowBack/></button>
        <button className="custom-next-button" onClick={() => swiper?.slideNext()}> <IoIosArrowForward/> </button>
        </div> */}
      </Swiper>
    </section>
  )
}

export default CarrosselPrincipal