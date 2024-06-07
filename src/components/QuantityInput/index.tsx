import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput(props: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={props.decrementQuantity}>
        <Minus size={14} />
      </button>

      <span>{props.quantity}</span>

      <button onClick={props.incrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
