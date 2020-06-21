import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_TABLE,
  EDIT_ITEM,
  ADD_TABLE,
  TOGGLE_ADD_ITEM,
  PASS_TABLE_ID,
  UNSET_TABLE_ID
} from "./types"

export const addItem = (id, data) => ({
  type: ADD_ITEM,
  payload: { id, data }
})

export const removeItem = (tableId, itemId) => ({
  type: REMOVE_ITEM,
  payload: { tableId, itemId }
})

export const editItem = id => ({
  type: EDIT_ITEM,
  payload: id
})

export const addTable = () => ({
  type: ADD_TABLE
})

export const toggleAddItem = () => ({
  type: TOGGLE_ADD_ITEM
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
