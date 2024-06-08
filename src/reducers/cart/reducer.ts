import { NewOrderFormData } from '../../pages/Checkout'
import { ActionTypes } from './action'
import { produce } from 'immer'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends NewOrderFormData {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: CartState, action: any) {
  console.log(state)
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newItem)
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (item) => item.id !== action.payload.itemId,
        )
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id) {
          itemToDecrement.quantity += 1
        }
      })

    case ActionTypes.CHECKOUT_ORDER:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/checkout/${newOrder.id}/success`)
      })

    default:
      return state
  }
}
