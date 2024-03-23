import { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./LoaderContext";
import { api } from '../services/api'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

  const {setIsLoading} = useLoader()
  const [user, setUser] = useState(null)

  // Buscando token no localstorage se houver
  // useEffect(() => {
  //   const loadingStoreData = () => {
  //     const storageUser = localStorage.getItem("@Auth:user");
  //     const storageToken = localStorage.getItem("@Auth:token");

  //     if (storageUser && storageToken) {
  //       setUser(storageUser);
  //     }
  //   };
  //   loadingStoreData();
  // }, []);

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

      setUser(response.data)
      salveDataLocalStorage(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error no cadastro");
    }finally{
      setIsLoading(false)
    }
  }

  const authenticateUser = async({email, password}) => {
    setIsLoading(true)
    try {
      const response = await api.post("/auth",{email,password})

      console.log(response.data);
      // setUser(response.data)

      

      // toast.success("Logado com sucesso!")
    } catch (error) {
      console.log(error);
      toast.error("Error na authenticação");
     
    }finally{
      setTimeout(()=>{
        setIsLoading(false)
      },1000)
    }
  }


  const signOut = () => {
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");
    setUser(null)
  }

  return(
    <AuthContext.Provider
    value={{
      user,
      signed:!!user,
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

