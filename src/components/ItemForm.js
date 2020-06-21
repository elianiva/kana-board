import React, { useState } from "react"
import Form from "./Form"
import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"
import { toggleAddItem, addItem, unsetTableId } from "../store/actions"

export default function ItemForm() {
  const currentTableId = useSelector(state => state.currentTable)
  const dispatch = useDispatch()

  const [item, setItem] = useState({
    kana: "",
    meaning: "",
    example: "",
    context: "",
    myExample: ""
  })
  const { kana, meaning, example, context, myExample } = item

  const onChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-75 z-10 bg-gray-900 flex items-center justify-center p-5">
      <div className="relative p-5 bg-white z-20 rounded rounded-md">
        <h2 className="text-2xl text-gray-800">Add New Item</h2>
        <div className="grid grid-cols-5">
          <Form
            label="Kana"
            name="kana"
            value={kana}
            placeholder="Ex: かわいい"
            onChange={onChange}
          />
          <Form
            label="Meaning"
            name="meaning"
            value={meaning}
            placeholder="Ex: Cute"
            onChange={onChange}
          />
          <Form
            label="Example"
            name="example"
            value={example}
            placeholder="Ex: かわいいね"
            onChange={onChange}
          />
          <Form
            label="Context"
            name="context"
            value={context}
            placeholder="Ex: When there's something cute"
            onChange={onChange}
          />
          <Form
            label="My Example"
            name="myExample"
            value={myExample}
            placeholder="Ex: かわいい"
            onChange={onChange}
          />
        </div>
        <div className="flex items-center justify-end p-2">
          <Button
            type="cancel"
            onClick={() => {
              dispatch(unsetTableId())
              dispatch(toggleAddItem())
            }}
            text="Cancel"
          />
          <Button
            type="confirm"
            onClick={() => {
              dispatch(addItem(currentTableId, item))
              dispatch(toggleAddItem())
            }}
            text="Add"
          />
        </div>
      </div>
    </div>
  )
}
