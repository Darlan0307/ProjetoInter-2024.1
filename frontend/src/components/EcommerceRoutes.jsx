import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ComponentHeader from './ComponentHeader'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Loader from './Loader'


const EcommerceRoutes = () => {
  return (
    <BrowserRouter>
      <ComponentHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<h1>Cart</h1>}/>
        <Route path='/products' element={<h1>Produtos</h1>}/>
        <Route path='/products/:id' element={<h1>Produto selected</h1>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<h1>Page 404 not found</h1>}/>
      </Routes>

      <Loader/>
    </BrowserRouter>
  )
}

export default EcommerceRoutes