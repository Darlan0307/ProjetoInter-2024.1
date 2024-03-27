import { useEffect, useState } from 'react';
import './style.css'
import { MdOutlineContactSupport } from "react-icons/md";
import {FaRegCopy} from 'react-icons/fa'
import { LuCopyCheck } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const ContactUs = () => {

  const [contactVisible,setContactVisible] = useState(false)
  const [isCopyFone,setIsCopyFone] = useState(false)
  const [isCopyEmail,setIsCopyEmail] = useState(false)

  const handleCopy = async (type,text) => {
    const textToCopy = text;
    await navigator.clipboard.writeText(textToCopy);
    if(type == 'fone'){
      setIsCopyFone(true)
      toast.success("Telefone copiado com sucesso!")
    }else if(type == 'email'){
      setIsCopyEmail(true)
      toast.success("E-mail copiado com sucesso!")
    }
 };

 useEffect(()=>{
  const idTime = setTimeout(()=>{
    setIsCopyFone(false)
    setIsCopyEmail(false)
  },3000)

  return () => clearTimeout(idTime);

 },[isCopyEmail,isCopyFone])


  return (
    <div className='contacts_page'>
      <button
      className='btn-contact-page'
      onClick={()=> setContactVisible(!contactVisible)}
      >
        {!contactVisible ?  <MdOutlineContactSupport/>: <IoCloseCircleOutline/>}
      </button>

      {contactVisible && (
        <>
          <div className='info-contactUs'>
            <p>Está com alguma dúvida? fale conosco</p>
            
            <div className="content_contact">
              <h3>Telefone</h3>
              <p>
                +55 (81) 98535-1407
              </p>
              <span>
                {isCopyFone ? (
                  <LuCopyCheck/>
                ):(
                  <FaRegCopy onClick={()=>handleCopy('fone','+55 (81) 98535-1407')} />
                )}
              </span>
          </div>

          <div className="content_contact">
            <h3>E-mail</h3>
            <p>
              nandaloja@gmail.com
            </p>
            <span>
              {isCopyEmail ? (
                <LuCopyCheck/>
              ):(
                <FaRegCopy onClick={()=>handleCopy('email','nandaloja@gmail.com')} />
              )}
            </span>
          </div>
          </div>
        </>
      )
      }
    </div>
  )
}

export default ContactUs