import EcommerceRoutes from "./components/EcommerceRoutes"
import { LoaderProvider } from "./context/LoaderContext"
import { ProductProvider } from "./context/ProductContext"

function App() {
 
  return (
    <>
      <LoaderProvider>
        <ProductProvider>
          <EcommerceRoutes/>
        </ProductProvider>
      </LoaderProvider>
    </>
  )
}

export default App
