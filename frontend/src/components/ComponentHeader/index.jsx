import './style.css'
import Logo from '../../assets/logo1.png'
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { CiSearch,CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { useState } from 'react';

const ComponentHeader = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const openInputSearch = useMediaQuery({ query: '(max-width: 530px)' });
  const [stateInputSearch,setStateInputSeach] = useState(openInputSearch)

  const refMenu = useRef()

  const handleMenu = () => {
    refMenu.current.classList.toggle('open')
  }

  const handleInputSeacrh = () => {
    setStateInputSeach( !stateInputSearch )
  }

  return (
    <header className='header'>
      
      <Link to="/" className='link-logo'>
        <img className='logo' src={Logo} alt="Logo" />
      </Link>

      {isMobile &&
       <button
        className='btn-open'
        onClick={
          ()=>handleMenu()
        }
        >
          <TiThMenu/>
        </button>
      }

      <nav ref={refMenu} className={`navigation ${isMobile ?  "mobile" : ""}`}
      >
        {isMobile && <button
        className='btn-close'
        onClick={()=>handleMenu()}  
        ><IoIosCloseCircle/></button>}

        <ul className='menu' onClick={()=>handleMenu()}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Mais Vendidos</a>
          </li>
          <li>
            <a href="#depoimentos">Novidades</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </nav>

      <div className='actions-user'>
        
        <div className='wrap-input'>
          {
            stateInputSearch && <input type="text" placeholder='ex: camiseta...'/>
          }
          <CiSearch onClick={handleInputSeacrh}/>
        </div>

        <div className='login-user'>
          <CiUser/>
          <span>text</span>
        </div>
        
        <Link to="/cart" className='cart'>
          <BsHandbag/>
        </Link>
      </div>
    </header>
  )
}

export default ComponentHeader