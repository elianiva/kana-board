import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  ADD_TABLE,
  TOGGLE_ADD_ITEM,
  TOGGLE_ADD_TABLE
} from "./types"
import { format } from "date-fns"
import { combineReducers } from "redux"

export const initialState = {
  addTable: false,
  addItem: false,
  items: [
    {
      _id: "dfb5871c-e260-4e76-98f1-92db862c2741",
      date: "Sunday, 14 June 2020",
      cols: [
        {
          _id: "e4f5b8bc-86ab-4d22-9fee-e6310f516b58",
          kana: "かわいい",
          meaning: "cute",
          example: ["かわいいね", "Cute isn't it?"],
          context: "Used to say if something is cute or not",
          ownExample: ["かわいいです", "It's cute"]
        },
        {
          _id: "ec5ca2fa-9003-455e-9bc1-abfaeee7d60b",
          kana: "かわいい",
          meaning: "cute",
          example: ["かわいいね", "Cute isn't it?"],
          context: "Used to say if something is cute or not",
          ownExample: ["かわいいです", "It's cute"]
        },
        {
          _id: "839160f6-5936-4167-8f4b-3329156d93ad",
          kana: "かわいい",
          meaning: "cute",
          example: ["かわいいね", "Cute isn't it?"],
          context: "Used to say if something is cute or not",
          ownExample: ["かわいいです", "It's cute"]
        }
      ]
    }
  ]
}

const colReducer = (cols = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...cols,
        {
          _id: "uuid",
          kana: action.data.kana,
          meaning: action.data.meaning,
          example: action.data.example,
          context: action.data.context,
          ownExample: action.data.ownExample
        }
      ]
    case REMOVE_ITEM:
      return cols.filter(id => id !== action.id)
    case EDIT_ITEM:
      let filtered = cols.filter(id => id !== action.id)
      return [
        ...filtered,
        {
          _id: "uuid",
          kana: action.data.kana,
          meaning: action.data.meaning,
          example: action.data.example,
          context: action.data.context,
          ownExample: action.data.ownExample
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
        items: [
          ...state.items,
          {
            _id: "dfb5871c-e260-4e76-98f1-92db862c2741",
            date: format(new Date(), "iiii, dd MMMM yyyy"),
            cols: []
          }
        ]
      }
    case ADD_ITEM || EDIT_ITEM || REMOVE_ITEM:
      return {
        items: state.items.map(item => {
          item._id === action.payload.id
            ? {
                _id: item._id,
                date: item.date,
                cols: colReducer(item.col, action.payload.text)
              }
            : item
        })
      }
    case TOGGLE_ADD_ITEM:
      return {
        ...state,
        addItem: !state.addItem
      }
    case TOGGLE_ADD_TABLE:
      return {
        ...state,
        addTable: !state.addTable
      }
    default:
      return state
  }
}
