import React, { useState } from "react"
import ReactStringReplace from "react-string-replace"
import PropType from "prop-types"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { format } from "date-fns"
import {
  toggleAddItem,
  removeItem,
  removeTable,
  editItem,
  passTableId
} from "../store/actions"
import Trash from "../assets/trash.svg"

export default function Table({ data, onClick }) {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  const [isPrompted, setPrompt] = useState(false)

  return (
    <div className="mt-2">
      <div
        className={`flex w-full text-left py-2 rounded-md items-center font-light cursor-pointer hover:text-blue-500
        ${!isOpen ? "bg-gray-100 px-4" : "px-0"}`}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="flex-auto w-6 text-gray-800">{data.date}</span>
        {isOpen ? "-" : "+"}
        <button
          className="text-xl text-gray-600 px-3 rounded-md cursor-pointer relative z-2"
          onClick={() => {
            setPrompt(true)
          }}
        >
          <Trash width="18" height="18" />
        </button>
      </div>
      {isPrompted && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-75 z-10 bg-gray-900 flex items-center justify-center p-5">
          <div className="relative p-5 bg-white z-20 rounded rounded-md">
            <h2 className="text-2xl text-red-800">Are You Sure?</h2>
            <div className="flex">
              <Button
                type="cancel"
                onClick={() => {
                  setPrompt(false)
                }}
                text="No"
              />
              <Button
                type="confirm"
                onClick={() => dispatch(removeTable(data._id))}
                text="Yes"
              />
            </div>
          </div>
        </div>
      )}
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
                      dispatch(removeItem(data._id, col._id))
                    }}
                  />
                  <Button
                    type="edit"
                    onClick={() => dispatch(editItem(col._id))}
                  />
                </td>
              </tr>
            ))}
            {format(new Date(), "iiii, dd MMMM yyyy") === data.date && (
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
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}

Table.propTypes = {
  data: PropType.object.isRequired
}
