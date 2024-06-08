import {
  SuccessContainer,
  SuccessHeading,
  SuccessContent,
  SuccessDetails,
  DetailsCard,
} from './styles'

import icon1 from '../../assets/icons/Icon-1.png'
import icon2 from '../../assets/icons/Icon-4.png'
import icon3 from '../../assets/icons/Icon-5.png'
import successImg from '../../assets/success_img.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useContext(CartContext)
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  console.log(paymentMethod)

  return (
    <SuccessContainer>
      <SuccessHeading>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessHeading>
      <SuccessContent>
        <SuccessDetails>
          <DetailsCard>
            <img src={icon2} alt="" />
            <div>
              <span>
                Entrega em{' '}
                <b>
                  {orderInfo.street}, {orderInfo.number}
                </b>
              </span>
              <span>
                {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
              </span>
            </div>
          </DetailsCard>

          <DetailsCard>
            <img src={icon1} alt="" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <b>20 min - 30 min</b>
              </span>
            </div>
          </DetailsCard>

          <DetailsCard>
            <img src={icon3} alt="" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <b>{paymentMethod[orderInfo.paymentMethod]}</b>
              </span>
            </div>
          </DetailsCard>
        </SuccessDetails>

        <img src={successImg} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
