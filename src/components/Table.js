import React, { useState } from "react"
import PropType from "prop-types"
import { format } from "date-fns"
import Button from "./Button"

export default function Table({ data }) {
  const date = format(new Date(), "iiii, dd MMMM yyyy")
  const [isOpen, setOpen] = useState(false)

  const removeItem = id => {
    return data.filter(id => data._id !== id)
  }

  return (
    <div className="mt-8 mb-2">
      <div className="w-full text-left bg-gray-100 p-2 rounded-md flex items-center">
        <span className="flex-auto text-blue-900">{date}</span>
        <button
          className="text-xl text-gray-600 px-3 rounded-md cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <table className="w-full mx-auto text-center font-medium rounded-md my-4">
          <thead>
            <tr className="p-2 bg-blue-400">
              <th className="p-2 text-white">Kana</th>
              <th className="p-2 text-white">Meaning</th>
              <th className="p-2 text-white">Example</th>
              <th className="p-2 text-white">Context</th>
              <th className="p-2 text-white">Personal Example</th>
              <th className="p-2 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(col => (
              <tr className="p-2 odd:bg-gray-200 border-b-2" key={col._id}>
                <td className="p-2">{col.kana}</td>
                <td className="p-2">{col.meaning}</td>
                <td className="p-2">
                  {col.example[0]}
                  <br />
                  {col.example[1]}
                </td>
                <td className="p-2">{col.context}</td>
                <td className="p-2">
                  {col.ownExample[0]}
                  <br />
                  {col.ownExample[1]}
                </td>
                <td className="p-2 flex">
                  <Button
                    type="remove"
                    onClick={(col._id) => {
                      removeItem(col._id)
                    }}
                  />
                  <Button type="edit" />
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-2 border-b-2" colSpan="5">
                THis is something that should be long enough to fill the table
                row
              </td>
              <td className="p-2 border-b-2">
                <Button type="add"></Button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

Table.propTypes = {
  data: PropType.array.isRequired
}
