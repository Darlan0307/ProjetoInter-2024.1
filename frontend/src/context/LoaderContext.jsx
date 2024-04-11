import { createContext, useContext, useState } from "react";

export const LoaderContext = createContext({})

export const LoaderProvider = ({children}) => {

  const [isLoading,setIsLoading] = useState(false)
  const [openTutorial,setOpenTutorial] = useState(localStorage.getItem('OpenTurorial') || 'yes')

  
  const finallyTutorial = () => {
    localStorage.setItem('OpenTurorial','no')
    setOpenTutorial('no')
    
  }

  return (
    <LoaderContext.Provider value={{isLoading, setIsLoading,openTutorial,finallyTutorial}}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  return useContext(LoaderContext);
}