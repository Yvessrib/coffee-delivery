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

export function Success() {
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
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
                <b>Cartão de Crédito</b>
              </span>
            </div>
          </DetailsCard>
        </SuccessDetails>

        <img src={successImg} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
