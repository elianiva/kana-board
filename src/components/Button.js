import React from "react"
import PropType from "prop-types"
import Trash from "../assets/trash.svg"
import Edit from "../assets/edit.svg"
import Add from "../assets/add.svg"

export default function Button({ type, onClick, text }) {
  switch (type) {
    case "add":
      return (
        <div
          className="w-full p-2 my-2 text-gray-600 hover:text-gray-800 cursor-pointer font-bold flex items-center justify-center font-thin"
          onClick={onClick}
        >
          Add New Item
        </div>
      )
    case "edit":
      return (
        <div
          className="p-2 mx-1 my-4 rounded-md  bg-green-300 hover:bg-green-400 text-blue-800 cursor-pointer font-bold flex items-center justify-center"
          onClick={onClick}
        >
          <Edit width="18" height="18" />
        </div>
      )
    case "remove":
      return (
        <div
          className="p-2 mx-1 my-4 rounded-md  bg-red-300 hover:bg-red-400 text-blue-800 cursor-pointer font-bold flex items-center justify-center"
          onClick={onClick}
        >
          <Trash width="18" height="18" />
        </div>
      )
    case "table":
      return (
        <div
          className="w-full p-3 my-4 text-gray-400 hover:text-gray-600 cursor-pointer font-hairline text-4xl new-table"
          onClick={onClick}
        >
          Add New Table
        </div>
      )
    case "confirm":
      return (
        <div
          className="w-24 p-2 rounded-md  bg-green-300 hover:bg-green-400 text-blue-800 cursor-pointer"
          onClick={onClick}
        >
          {text}
        </div>
      )
    case "delete":
      return (
        <div
          className="w-24 p-2 rounded-md  bg-red-300 hover:bg-red-400 text-blue-800 cursor-pointer"
          onClick={onClick}
        >
          {text}
        </div>
      )
    case "cancel":
      return (
        <div
          className="mr-4 w-24 p-2 rounded-md  bg-gray-200 hover:bg-gray-300 text-blue-800 cursor-pointer"
          onClick={onClick}
        >
          {text}
        </div>
      )
    default:
      return <div></div>
  }
}

Button.propTypes = {
  type: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  text: PropType.string
}
