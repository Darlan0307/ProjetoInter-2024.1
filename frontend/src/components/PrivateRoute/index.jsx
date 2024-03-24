import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const PrivateRouter = () => {
  const {signed} = useAuth()

  return signed ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter