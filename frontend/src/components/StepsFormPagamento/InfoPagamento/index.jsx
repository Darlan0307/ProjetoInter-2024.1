import '../globalSteps.css'

const InfoPagamento = () => {
  return (
    <div>
      <h3>Estamos quase acabando</h3>
      <p>Valor a ser pago na hora da entrega</p>
      <span>R$1232,00</span>

      <p>Qual vai ser a forma de pagamento?</p>
      <div>

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
  )
}

export default InfoPagamento