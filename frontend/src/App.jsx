import EcommerceRoutes from "./components/EcommerceRoutes"
import Tutorial from "./components/Tutorial"
import { AuthProvider } from "./context/AuthContext"
import { LoaderProvider } from "./context/LoaderContext"
import { ProductProvider } from "./context/ProductContext"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
 
  return (
    <>
      <LoaderProvider>
        <AuthProvider>
        <ProductProvider>
          <>
            <ToastContainer autoClose={3000} position={"bottom-left"}/>
            <EcommerceRoutes/>
            <Tutorial/>
          </>
        </ProductProvider>
        </AuthProvider>
      </LoaderProvider>
    </>
  )
}

export default App
