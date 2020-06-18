import {
  ADD_ITEM,
  REMOVE_ITEM,
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

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id }
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

export const passTableId = id => ({
  type: PASS_TABLE_ID,
  payload: { id }
})

export const unsetTableId = () => ({
  type: UNSET_TABLE_ID
})
