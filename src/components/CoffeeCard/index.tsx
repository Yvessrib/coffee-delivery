import { ShoppingCart } from 'phosphor-react'
import coffeImg from '../../assets/Image.png'

import {
  CoffeeCardContainer,
  CoffeImg,
  Tags,
  Title,
  Description,
  Details,
  Price,
  Order,
} from './styles'
import { QuantityInput } from '../QuantityInput'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeImg src={coffeImg} alt="" />

      <Tags>
        <span>TRADICIONAL</span>
      </Tags>

      <Title>Expresso Tradicional</Title>

      <Description>
        O tradicional café é feito com água quente e grãos moídos
      </Description>

      <Details>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>

        <Order>
          <QuantityInput />

          <button>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </button>
        </Order>
      </Details>
    </CoffeeCardContainer>
  )
}
