import EcommerceRoutes from "./components/EcommerceRoutes"
import { LoaderProvider } from "./context/LoaderContext"
import { ProductProvider } from "./context/ProductContext"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
 
  return (
    <>
      <LoaderProvider>
        <ProductProvider>
          <>
            <ToastContainer autoClose={3000} position={"bottom-right"}/>
            <EcommerceRoutes/>
          </>
        </ProductProvider>
      </LoaderProvider>
    </>
  )
}

export default App
