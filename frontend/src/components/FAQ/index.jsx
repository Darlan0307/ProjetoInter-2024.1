import { useState } from 'react';
import './style.css'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const FAQ = () => {

  const [idActive,setIdActive] = useState(null)

  const dataFaq = [
    {
      id:1,
      question:"Quem somos?",
      response:"A Império da Moda é uma loja de roupas que oferece peças estilosas e de alta qualidade para homens e mulheres de todas as idades."
    },
    {
      id:2,
      question:"Onde estamos?",
      response:"Você pode nos encontrar em, Império Da Moda - Centro, Jaboatão dos Guararapes - PE, 54110-050"
    },
    {
      id:3,
      question:"Quais são os horários de atendimento?",
      response:"Nosso atendimento online é de segunda a sexta-feira, das 9h às 18h"
    },
    {
      id:4,
      question:"As fotos dos produtos são fiéis?",
      response:"Sim, as fotos dos produtos são fiéis às peças reais. No entanto, podem ocorrer pequenas variações de cor devido à iluminação e à tela do seu dispositivo"
    },
    {
      id:5,
      question:"Como posso entrar em contato com o suporte?",
      response:"Você pode entrar em contato com o nosso suporte através do e-mail ou telefone."
    },
    {
      id:6,
      question:"O que é política de troca e devolução?",
      response:"Você tem até 7 dias após o recebimento do produto para trocá-lo ou devolvê-lo. "
    },
  ]

  const handleIdActive = (id) => {
    setIdActive(idActive == id ? null : id)
  }


  return (
    <section className='container-faq'>
      
      <h2 className='subtitle-faq'>Perguntas Frequentes</h2>

      <div className='faq'>
        {dataFaq.map((data)=>(
          <div 
          key={data.id} 
          className="card-faq"
          onClick={()=>handleIdActive(data.id)}
          >
            <h4 className='question-card-faq'>
              <span>{data.question}</span>
              {data.id == idActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </h4>
            {data.id == idActive && (
              <p className='response-card-faq'>{data.response}</p>
            )}
          </div>
          
        ))}
      </div>

    </section>
  )
}

export default FAQ