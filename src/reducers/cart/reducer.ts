import { ActionTypes } from './action'
import { produce } from 'immer'

export interface Item {
  id: string
  quantity: number
}

export interface Order {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newItem)
      })
    default:
      return state
  }
}
