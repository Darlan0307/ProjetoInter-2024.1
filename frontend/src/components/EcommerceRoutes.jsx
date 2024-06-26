import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ComponentHeader from './ComponentHeader'
import Loader from './Loader'
import React from 'react'
import PrivateRouter from './PrivateRoute'
import PrivateRouterAdm from './PrivateRouteAdm'
import ComponentFooter from './ComponentFooter'

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
const MessageThanks = React.lazy(()=>import("./pages/MessageThanks"))
const FormRegisterProduct = React.lazy(()=>import("./pages/FormRegisterProduct"))
const FormEditProduct = React.lazy(()=>import("./FormEditProduct"))
const Location = React.lazy(()=>import("./pages/Location"))

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

        <Route path='/location' element={
          <React.Suspense fallback={<LazyLoader/>}>
            <Location/>
          </React.Suspense>
        }/>

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

        <Route path='/newproduct' element={<PrivateRouterAdm/>}>
          <Route path='/newproduct' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <FormRegisterProduct/>
            </React.Suspense>
          }/>
        </Route>

        <Route path='/product/:id' element={<PrivateRouterAdm/>}>
          <Route path='/product/:id' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <FormEditProduct/>
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

        <Route path='/thanks' element={<PrivateRouter/>}>
          <Route path='/thanks' element={
            <React.Suspense fallback={<LazyLoader/>}>
              <MessageThanks/>
            </React.Suspense>
          }/>
        </Route>

        <Route path='*' element={<h1>Page 404 not found</h1>}/>
      </Routes>
      <ComponentFooter/>
      <Loader/>
    </BrowserRouter>
  )
}

export default EcommerceRoutes