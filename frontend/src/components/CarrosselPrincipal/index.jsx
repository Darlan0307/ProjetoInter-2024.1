import './style.css'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react'
import camiseta from '../../assets/camisa-1.png'
import { Link } from 'react-router-dom'
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

// Categorias
const dataCategory = [
  {
    image: camiseta,
    title: "Camisetas",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: camiseta,
    title: "Vestidos",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: camiseta,
    title: "Calças",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: camiseta,
    title: "Saias",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: camiseta,
    title: "Bermuda",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]

const CarrosselPrincipal = () => {

  const swiper = useSwiper()

  return (
    <section className='carousel'>
      <h2 className='carousel-subtitle'>Aqui você encontra</h2>

      <Swiper
      className='container-carousel'
      navigation = {{
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      }}
      slidesPerView={1}
			loop= {true}
      autoplay={{
            delay:2500,
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

          
        <div className="action-carousel">
        <button className="custom-prev-button" onClick={() => swiper?.slidePrev()}><IoIosArrowBack/></button>
        <button className="custom-next-button" onClick={() => swiper?.slideNext()}> <IoIosArrowForward/> </button>
        </div>
      </Swiper>
    </section>
  )
}

export default CarrosselPrincipal