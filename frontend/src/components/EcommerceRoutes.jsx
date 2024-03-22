import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ComponentHeader from './ComponentHeader'
import Loader from './Loader'
import React from 'react'

// Lazy loading
const LazyLoader = () => {
  return (
    <div className='container-loader'>
        <h2>Carregando...</h2>
        <div class="container">
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>
    </div>
  )
}

const Products = React.lazy(() => import('./pages/Products'))
const SignIn = React.lazy(() => import('./pages/SignIn'))
const SignUp =  React.lazy(()=> import('./pages/SignUp'))

const EcommerceRoutes = () => {
  return (
    <BrowserRouter>
      <ComponentHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<h1>Cart</h1>}/>
        <Route path='/products' element={
          <React.Suspense fallback={<LazyLoader/>}>
            <Products/>
          </React.Suspense>
        }/>
        <Route path='/location' element={<h1>Localização</h1>}/>
        <Route path='/popular' element={<h1>mais vendidos</h1>}/>
        <Route path='/signin' element={
          <React.Suspense fallback={<LazyLoader/>}>
            <SignIn/>
          </React.Suspense>
        }/>
        <Route path='/signup' element={
          <React.Suspense fallback={<LazyLoader/>}>
            <SignUp/>
          </React.Suspense>
        }/>
        <Route path='*' element={<h1>Page 404 not found</h1>}/>
      </Routes>

      <Loader/>
    </BrowserRouter>
  )
}

export default EcommerceRoutes