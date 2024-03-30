import Apresentation from "../../Apresentation"
import CarrosselPrincipal from "../../CarrosselPrincipal"
import NewsProducts from "../../NewsProducts"
import SendHome from "../../SendHome"
import { MoveToTop } from '../../../utils/MoveToTop'
import { useEffect } from "react"
import ContactUs from "../../ContactUs"
import { useProduct } from "../../../context/ProductContext"
import CarrosselProductsHome from "../../CarrosselProductsHome"
const Home = () => {

  const {
    handleCleanFilterChange
  } = useProduct()

  useEffect(()=>{
    MoveToTop()
    handleCleanFilterChange()
  },[])

  return (
    <>
      <Apresentation/>
      <CarrosselPrincipal/>
      <SendHome/>
      <NewsProducts/>
      <ContactUs/>
      <CarrosselProductsHome/>
    </>
  )
}

export default Home