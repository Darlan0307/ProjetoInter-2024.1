import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ComponentHeader from './ComponentHeader'
import Loader from './Loader'
import React from 'react'
import PrivateRouter from './PrivateRoute'
import PrivateRouterAdm from './PrivateRouteAdm'

// Lazy loading
const LazyLoader = () => {
  return (
    <div className='container-loader'>
        <h2>Carregando...</h2>
        <div className="container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
    </div>
  )
}

const Products = React.lazy(() => import('./pages/Products'))
const SignIn = React.lazy(() => import('./pages/SignIn'))
const SignUp =  React.lazy(()=> import('./pages/SignUp'))
const Admin = React.lazy(()=>import("./pages/Admin"))
const Handbag = React.lazy(()=>import("./pages/Handbag"))
const FormPagamento = React.lazy(()=>import("./pages/FormPagamento"))

const EcommerceRoutes = () => {
  return (
    <BrowserRouter>
      <ComponentHeader/>
      <Routes>
        <Route index element={<Home/>}/>
        
        <Route path='/cart' element={<PrivateRouter/>}>
          <Route path='/cart' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <Handbag/>
            </React.Suspense>
          }/>
        </Route>

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

        <Route path='/adm' element={<PrivateRouterAdm/>}>
          <Route path='/adm' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <Admin/>
            </React.Suspense>
          }/>
        </Route>

        <Route path='/formsteps' element={<PrivateRouter/>}>
          <Route path='/formsteps' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <FormPagamento/>
            </React.Suspense>
          }/>
        </Route>

        <Route path='*' element={<h1>Page 404 not found</h1>}/>
      </Routes>

      <Loader/>
    </BrowserRouter>
  )
}

export default EcommerceRoutes