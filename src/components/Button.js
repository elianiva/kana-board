import React from "react"
import PropType from "prop-types"
import Trash from "../assets/trash.svg"
import Edit from "../assets/edit.svg"

export default function Button({ type, onClick }) {
  if (onClick) onClick()
  switch (type) {
    case "edit":
      return (
        <div className="w-full p-2 mx-1 rounded-md my-4 bg-green-300 hover:bg-green-400 text-blue-800 cursor-pointer font-bold flex items-center justify-center">
          <Edit />
        </div>
      )
    case "remove":
      return (
        <div className="w-full p-2 mx-1 rounded-md my-4 bg-red-300 hover:bg-red-400 text-blue-800 cursor-pointer font-bold flex items-center justify-center">
          <Trash />
        </div>
      )
    case "table":
      return (
        <div className="w-full p-4 rounded-md my-4 bg-gray-200 hover:bg-gray-300 text-blue-800 cursor-pointer">
          Add New Table
        </div>
      )
    default:
      return <div></div>
  }
}

Button.propTypes = {
  type: PropType.string.isRequired,
  onClick: PropType.func.isRequired
}
