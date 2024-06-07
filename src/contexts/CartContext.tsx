import { createContext, useEffect, useReducer, ReactNode } from 'react'
import { Item, CartReducer, Order } from '../reducers/cart/reducer'
import { addItemAction, removeItemAction } from '../reducers/cart/action'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (data: Item) => void
  removeItem: (itemId: Item['id']) => void
  // decrementItemQuantity: (itemId: Item['id']) => void;
  // incrementItemQuantity: (itemId: Item['id']) => void;
  // checkout: (order: OrderInfo) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const initialState = {
  cart: [] as Item[],
  orders: [] as Order[],
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    initialState,
    (initial) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initial
    },
  )

  function addItem(data: Item) {
    const newItem: Item = {
      id: data.id,
      quantity: data.quantity,
    }

    dispatch(addItemAction(newItem))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider value={{ ...cartState, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
