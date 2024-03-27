import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'

const PrivateRouter = () => {
  const {signed} = useAuth()

  return signed ? <Outlet/> : (
    <>
      <Navigate to="/"/>
      {toast.warn("Faça login primeiro")}
    </>
  )
}

export default PrivateRouter