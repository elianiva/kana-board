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
import { format } from "date-fns"
import { combineReducers } from "redux"
import { v4 as uuidv4 } from "uuid"

export const initialState = {
  addItem: false,
  currentTable: "",
  items: [
    {
      _id: "dfb5871c-e260-4e76-98f1-92db862c2741",
      date: "Sunday, 14 June 2020",
      cols: [
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

const colReducer = (cols, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...cols,
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
      return cols.filter(col => col._id !== action.payload.itemId)
    case EDIT_ITEM:
      let filtered = cols.filter(id => id !== action.id)
      return [
        ...filtered,
        {
          _id: uuidv4(),
          kana: action.data.kana,
          meaning: action.data.meaning,
          example: action.data.example,
          context: action.data.context,
          myExample: action.data.myExample
        }
      ]
    default:
      return cols
  }
}

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            _id: uuidv4(),
            date: format(new Date(), "iiii, dd MMMM yyyy"),
            cols: []
          }
        ]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item._id == action.payload.tableId) {
            return {
              _id: item._id,
              date: item.date,
              cols: colReducer(item.cols, action)
            }
          }
          return item
        })
      }
    case REMOVE_TABLE:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload.id)
      }
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item._id === action.payload.id) {
            return {
              _id: item._id,
              date: item.date,
              cols: colReducer(item.cols, action)
            }
          }
          return item
        })
      }
    case TOGGLE_ADD_ITEM:
      return {
        ...state,
        addItem: !state.addItem
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
    default:
      return state
  }
}
