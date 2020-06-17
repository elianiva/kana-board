import React, { useState } from "react"
import PropType from "prop-types"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { toggleAddItem } from "../store/actions"

export default function Table({ data, onClick }) {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="mt-8 mb-2">
      <div className="w-full text-left bg-gray-100 p-2 rounded-md flex items-center">
        <span className="flex-auto text-gray-800">{data.date}</span>
        <button
          className="text-xl text-gray-600 px-3 rounded-md cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <table className="w-full mx-auto text-center font-medium rounded-md my-4 text-gray-800">
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
            {data.cols.map(col => (
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
                  <Button type="remove" onClick={() => console.log("hello")} />
                  <Button type="edit" onClick={() => console.log("hello")} />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <Button type="add" onClick={() => dispatch(toggleAddItem())} />
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
