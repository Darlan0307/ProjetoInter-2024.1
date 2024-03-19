import './style.css'
import Logo from '../../assets/logo.png'
import { useMediaQuery } from 'react-responsive';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

const ComponentHeader = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  const refMenu = useRef()

  const handleMenu = () => {
    refMenu.current.classList.toggle('open')
  }
  return (
    <header className='header' >
      
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
            <Link to="/">Home</Link>
          </li>
          {/* {
            visible && <li>
            <Link to="/adm">ADM</Link>
          </li>
          } */}
          <li>
            <Link to="/popular">Mais Vendidos</Link>
          </li>
          <li>
            <Link to="/news">Novidades</Link>
          </li>
          <li>
            <Link to="/location">Localização</Link>
          </li>
        </ul>
      </nav>

      <div className='actions-user'>
        
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