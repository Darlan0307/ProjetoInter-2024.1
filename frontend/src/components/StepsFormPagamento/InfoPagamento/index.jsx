import { useProduct } from '../../../context/ProductContext'
import '../globalSteps.css'
import GsapAnimationDirection from '../../GsapAnimationDirection'

const InfoPagamento = () => {

  const {
    priceTotal
  } = useProduct()

  return (
    <GsapAnimationDirection
      from={{ opacity: 0, x: 300 }}
      to={{ opacity: 1, x: 0 }}
      duration={.6}
    >
      <div className='container-form-generec'>
      <h3>Estamos quase acabando</h3>

      <p>Valor a ser pago na hora da entrega: <span>R${priceTotal},00</span></p>
        
      <p>Qual a forma de pagamento?</p>
      <div className='container-paymentType'>

        <div>
          <input type="radio" name='paymentType' id='money'/>
          <label htmlFor="money">Dinheiro</label>
        </div>

        <div>
          <input type="radio" name='paymentType' id='pix'/>
          <label htmlFor="pix">Pix</label>
        </div>

        <div>
          <input type="radio" name='paymentType' id='card'/>
          <label htmlFor="card">Cartão</label>
        </div>

      </div>
    </div>
    </GsapAnimationDirection>
  )
}

export default InfoPagamento