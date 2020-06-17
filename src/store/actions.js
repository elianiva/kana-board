import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  ADD_TABLE,
  TOGGLE_ADD_ITEM,
  TOGGLE_ADD_TABLE
} from "./types"

export const addItem = data => ({
  type: ADD_ITEM,
  payload: data
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

export const toggleAddTable = () => ({
  type: TOGGLE_ADD_TABLE
})
