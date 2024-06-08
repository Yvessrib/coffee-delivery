import { NavigateFunction } from 'react-router-dom'
import { NewOrderFormData } from '../../pages/Checkout'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  CHECKOUT_ORDER = 'CHECKOUT_ORDER',
}

export function addItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function incrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function checkoutOrderAction(
  order: NewOrderFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_ORDER,
    payload: {
      order,
      callback,
    },
  }
}
