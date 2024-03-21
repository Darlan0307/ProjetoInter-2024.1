import EcommerceRoutes from "./components/EcommerceRoutes"
import { ProductProvider } from "./context/ProductContext"

function App() {
 
  return (
    <>
      <ProductProvider>
        <EcommerceRoutes/>
      </ProductProvider>
    </>
  )
}

export default App
