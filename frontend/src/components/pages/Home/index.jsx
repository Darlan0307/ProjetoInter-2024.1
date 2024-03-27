import Apresentation from "../../Apresentation"
import CarrosselPrincipal from "../../CarrosselPrincipal"
import NewsProducts from "../../NewsProducts"
import SendHome from "../../SendHome"
import { MoveToTop } from '../../../utils/MoveToTop'
import { useEffect } from "react"
import ContactUs from "../../ContactUs"
const Home = () => {

  useEffect(()=>{
    MoveToTop()
  },[])

  return (
    <>
      <Apresentation/>
      <CarrosselPrincipal/>
      <SendHome/>
      <NewsProducts/>
      <ContactUs/>
    </>
  )
}

export default Home