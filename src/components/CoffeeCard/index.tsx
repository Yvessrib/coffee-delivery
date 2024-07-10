import { ShoppingCart } from 'phosphor-react'

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
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeeCardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  function incrementQuantity() {
    setQuantity(quantity + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleAddItem() {
    addItem({
      id: coffee.id,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <CoffeImg src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Details>
        <Price>
          <span>R$</span>
          <span>{coffee.price}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </button>
        </Order>
      </Details>
    </CoffeeCardContainer>
  )
}
