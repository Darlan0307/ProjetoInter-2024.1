import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ComponentHeader from './ComponentHeader'


const EcommerceRoutes = () => {
  return (
    <BrowserRouter>
      <ComponentHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<h1>Cart</h1>}/>
        <Route path='/products' element={<h1>Produtos</h1>}/>
        <Route path='/products/:id' element={<h1>Produto selected</h1>}/>
        <Route path='/signin' element={<h1>Login</h1>}/>
        <Route path='/signup' element={<h1>Cadastro</h1>}/>
        <Route path='*' element={<h1>Page 404 not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default EcommerceRoutes