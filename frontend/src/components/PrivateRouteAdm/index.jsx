import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const PrivateRouterAdm = () => {
  const {signed,userIsAdm} = useAuth()

  return (signed && userIsAdm) ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouterAdm