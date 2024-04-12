import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './style.css'

import ilustration1 from '../../assets/ilustration-1.png'
import ilustration3 from '../../assets/ilustration-3.png'
import ilustration4 from '../../assets/ilustration-4.png'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

const SendHome = () => {

  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

useLayoutEffect(() => {    
   gsap.registerPlugin(ScrollTrigger);     
      gsap.fromTo(card1Ref.current,{
        opacity:0,
        x:-300
      }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {        
              trigger: card1Ref.current,
              markers: false,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reset",
          }
      })
      gsap.fromTo(card2Ref.current,{
        opacity:0,
        x:-300
      }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {        
              trigger: card2Ref.current,
              markers: false,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reset",
          }
      })

      gsap.fromTo(card3Ref.current,{
        opacity:0,
        x:-300
      }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {        
              trigger: card3Ref.current,
              markers: false,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reset",
          }
      })
   
      return () => {
        gsap.killTweensOf(card1Ref.current)
      gsap.killTweensOf(card2Ref.current)
      gsap.killTweensOf(card3Ref.current)
      }
}, [])


  return (
    <section className='send-home' >
      <article ref={card1Ref} className='send-home-card'>
        <img src={ilustration1} alt="imagem ilustrativa 1" />
        <h2>Aqui no <span>império da moda</span> você encontra as melhores roupas</h2>
      </article>
      <article ref={card2Ref} id='card-reverse' className='send-home-card'>
        <img src={ilustration3} alt="imagem ilustrativa 2" />
        <h2>Presenteie aquela pessoa que você sabe que gosta de <span>roupas</span> </h2>
      </article>
      <article ref={card3Ref} className='send-home-card'>
        <img src={ilustration4} alt="imagem ilustrativa 3" />
        <h2>Aqui você leva <span>muito</span>, e paga <span>menos</span></h2>
      </article>
    </section>
  )
}

export default SendHome