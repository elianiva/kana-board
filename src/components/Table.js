import React, { useState } from "react"
import ReactStringReplace from "react-string-replace"
import PropType from "prop-types"
import Button from "./Button"
import { useDispatch } from "react-redux"
import {
  toggleAddItem,
  removeItem,
  editItem,
  passTableId
} from "../store/actions"

export default function Table({ data, onClick }) {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(true)

  return (
    <div className="mt-2">
      <div className="w-full text-left bg-gray-100 px-4 py-2 rounded-t-md flex items-center font-light">
        <span className="flex-auto text-gray-800">{data.date}</span>
        <button
          className="text-xl text-gray-600 px-3 rounded-md cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <table className="w-full mx-auto text-left font-medium rounded-md mb-4 text-gray-800">
          <thead>
            <tr className="py-2 px-4 bg-blue-500">
              <th className="py-2 px-4 text-white">No.</th>
              <th className="py-2 px-4 text-white">Kana</th>
              <th className="py-2 px-4 text-white">Meaning</th>
              <th className="py-2 px-4 text-white">Example</th>
              <th className="py-2 px-4 text-white">Context</th>
              <th className="py-2 px-4 text-white">Personal Example</th>
              <th className="py-2 px-4 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.cols.map((col, index) => (
              <tr
                className="py-2 px-4 bg-gray-100 even:bg-gray-200"
                key={col._id}
              >
                <td className="py-2 px-4">{index + 1}.</td>
                <td className="py-2 px-4">{col.kana}</td>
                <td className="py-2 px-4">{col.meaning}</td>
                <td className="py-2 px-4">
                  {ReactStringReplace(col.example, col.kana, match => (
                    <span className="font-bold text-blue-500">{match}</span>
                  ))}
                </td>
                <td className="py-2 px-4">{col.context}</td>
                <td className="py-2 px-4">{col.myExample}</td>
                <td className="py-2 px-4 flex">
                  <Button
                    type="remove"
                    onClick={() => {
                      dispatch(removeItem(col._id))
                      console.log(col._id)
                    }}
                  />
                  <Button
                    type="edit"
                    onClick={() => dispatch(editItem(col._id))}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="7" className="bg-gray-100">
                <Button
                  type="add"
                  onClick={() => {
                    dispatch(toggleAddItem())
                    dispatch(passTableId(data._id))
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

Table.propTypes = {
  data: PropType.object.isRequired
}
