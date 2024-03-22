import Apresentation from "../../Apresentation"
import CarrosselPrincipal from "../../CarrosselPrincipal"
import NewsProducts from "../../NewsProducts"
import SendHome from "../../SendHome"
import { MoveToTop } from '../../../utils/MoveToTop'
import { useEffect } from "react"
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
    </>
  )
}

export default Home