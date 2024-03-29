import { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./LoaderContext";
import { api } from '../services/api'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

  const {setIsLoading} = useLoader()
  const [user, setUser] = useState(null)
  const [userIsAdm, setUserIsAdmin] = useState(false)
  
  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = JSON.parse(localStorage.getItem("@Auth:user"));
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
        setUserIsAdmin(storageUser.admin)
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storageToken}`;
      }
    };
    loadingStoreData();
  }, []);

  const salveDataLocalStorage = (data) =>{
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.token}`;

    localStorage.setItem("@Auth:user", JSON.stringify(data.user));
    localStorage.setItem("@Auth:token", data.token);
  }

  const registerUser = async({name,email,password}) =>{
    setIsLoading(true)
    try {
      const response = await api.post("/user",{name,email,password})

      setUser(response.data.user)
      setUserIsAdmin(response.data.user.admin)
      salveDataLocalStorage(response.data)
      toast.success("Cadastrado com sucesso!")
      return true
    } catch (error) {
      toast.error(error.response.data.message);
      return false
    }finally{
      setIsLoading(false)
    }
  }

  const authenticateUser = async({email, password}) => {
    setIsLoading(true)
    try {
      const response = await api.post("/auth",{email,password})

      setUser(response.data.user)
      salveDataLocalStorage(response.data)
      setUserIsAdmin(response.data.user.admin)
      toast.success("Logado com sucesso!")
      return true
    } catch (error) {
      toast.error(error.response.data.message);
      return false
    }finally{
      setTimeout(()=>{
        setIsLoading(false)
      },1000)
    }
  }


  const signOut = () => {
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");
    localStorage.removeItem("ProductsHandbag");
    setUser(null)
    setUserIsAdmin(false)
    toast.success( "Deslogado com Sucesso!");
  }

  return(
    <AuthContext.Provider
    value={{
      user,
      signed:!!user,
      userIsAdm,
      authenticateUser,
      registerUser,
      signOut
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContext);
}

