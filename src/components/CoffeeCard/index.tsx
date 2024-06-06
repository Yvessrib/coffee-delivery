import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeImg from '../../assets/Image.png'

import {
  CoffeeCardContainer,
  CoffeImg,
  Tags,
  Title,
  Description,
  Details,
  Price,
  QuantityInput,
  Order,
} from './styles'

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
          <QuantityInput>
            <button>
              <Minus size={14} />
            </button>

            <span>1</span>

            <button>
              <Plus size={14} />
            </button>
          </QuantityInput>

          <button>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </button>
        </Order>
      </Details>
    </CoffeeCardContainer>
  )
}
