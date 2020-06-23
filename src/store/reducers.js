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
import { format } from "date-fns"
import { combineReducers } from "redux"
import { v4 as uuidv4 } from "uuid"

export const initialState = {
  isFormOpened: false,
  currentTable: "",
  currentItem: "",
  tables: [
    {
      _id: "dfb5871c-e260-4e76-98f1-92db862c2741",
      date: "Sunday, 14 June 2020",
      items: [
        {
          _id: "e4f5b8bc-86ab-4d22-9fee-e6310f516b58",
          kana: "かわいい",
          meaning: "cute",
          example: "かわいいね",
          context: "Used to say if something is cute or not",
          myExample: "かわいいです"
        }
      ]
    }
  ]
}

const itemReducer = (items, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...items,
        {
          _id: uuidv4(),
          kana: action.payload.data.kana,
          meaning: action.payload.data.meaning,
          example: action.payload.data.example,
          context: action.payload.data.context,
          myExample: action.payload.data.myExample
        }
      ]
    case REMOVE_ITEM:
      return items.filter(item => item._id !== action.payload.itemId)
    case EDIT_ITEM:
      let filtered = items.filter(item => item._id !== action.payload.itemId)
      return [
        ...filtered,
        {
          _id: uuidv4(),
          kana: action.payload.data.kana,
          meaning: action.payload.data.meaning,
          example: action.payload.data.example,
          context: action.payload.data.context,
          myExample: action.payload.data.myExample
        }
      ]
    default:
      return items
  }
}

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return {
        ...state,
        tables: [
          ...state.tables,
          {
            _id: uuidv4(),
            date: format(new Date(), "iiii, dd MMMM yyyy"),
            items: []
          }
        ]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        tables: state.tables.map(table => {
          if (table._id == action.payload.tableId) {
            return {
              _id: table._id,
              date: table.date,
              items: itemReducer(table.items, action)
            }
          }
          return table
        })
      }
    case REMOVE_TABLE:
      return {
        ...state,
        tables: state.tables.filter(table => table._id !== action.payload.id)
      }
    case ADD_ITEM:
    case EDIT_ITEM:
      return {
        ...state,
        tables: state.tables.map(table => {
          if (table._id === action.payload.tableId) {
            return {
              _id: table._id,
              date: table.date,
              items: itemReducer(table.items, action)
            }
          }
          return table
        })
      }
    case TOGGLE_FORM:
      return {
        ...state,
        isFormOpened: !state.isFormOpened
      }
    case PASS_TABLE_ID:
      return {
        ...state,
        currentTable: action.payload.id
      }
    case UNSET_TABLE_ID:
      return {
        ...state,
        currentTable: ""
      }
    case PASS_ITEM_ID:
      return {
        ...state,
        currentItem: action.payload.id
      }
    case UNSET_ITEM_ID:
      return {
        ...state,
        currentItem: ""
      }
    default:
      return state
  }
}
