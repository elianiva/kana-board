import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_TABLE,
  EDIT_ITEM,
  ADD_TABLE,
  TOGGLE_FORM,
  PASS_TABLE_ID,
  UNSET_TABLE_ID,
  PASS_ITEM_ID,
  UNSET_ITEM_ID
} from "./types"

export const addItem = (tableId, data) => ({
  type: ADD_ITEM,
  payload: { tableId, data }
})

export const editItem = (tableId, itemId, data) => ({
  type: EDIT_ITEM,
  payload: { tableId, itemId, data }
})

export const removeItem = (tableId, itemId) => ({
  type: REMOVE_ITEM,
  payload: { tableId, itemId }
})

export const addTable = () => ({
  type: ADD_TABLE
})

export const toggleForm = data => ({
  type: TOGGLE_FORM,
  payload: { data }
})

export const removeTable = id => ({
  type: REMOVE_TABLE,
  payload: { id }
})

export const passTableId = id => ({
  type: PASS_TABLE_ID,
  payload: { id }
})

export const unsetTableId = () => ({
  type: UNSET_TABLE_ID
})

export const passItemId = id => ({
  type: PASS_ITEM_ID,
  payload: { id }
})

export const unsetItemId = () => ({
  type: UNSET_ITEM_ID
})
