import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
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
