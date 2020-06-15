import React from "react"
import PropType from "prop-types"

export default function Button({ type }) {
  switch (type) {
    case "add":
      return (
        <div className="w-full p-2 mx-1 rounded-md my-4 bg-green-300 hover:bg-green-400 text-blue-800 cursor-pointer font-bold">
          +
        </div>
      )
    case "remove":
      return (
        <div className="w-full p-2 mx-1 rounded-md my-4 bg-red-300 hover:bg-red-400 text-blue-800 cursor-pointer font-bold">
          -
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
  type: PropType.string.isRequired
}
