import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProduct } from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const CarrosselProductsHome = () => {

  const {
    products
  } = useProduct()

  return (
    <section className='container-carrossel-home'>
      <Swiper
      navigation
			loop= {true}
      autoplay={{
            delay:2000,
            disableOnInteraction: true
          }
      }
      breakpoints={{
        0: {
          slidesPerView: 1,          
        },
        500: {
          slidesPerView: 2,          
        },
        700:{
          slidesPerView: 3,
        },
        1000:{
          slidesPerView: 4,
        },
        1300:{
          slidesPerView: 5,
        },
      }}
      >
        {products.map((product)=>(
          <SwiperSlide key={product.id} className='slide-carrossel-home'>
            <Link to="/products" className='card-carrossel-home'>
              <img src={product.urlImage} alt={product.name}/>
              <p>{product.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CarrosselProductsHome