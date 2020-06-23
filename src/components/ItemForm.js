import React, { useState } from "react"
import Form from "./Form"
import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"
import {
  toggleForm,
  addItem,
  editItem,
  unsetTableId,
  unsetItemId
} from "../store/actions"

export default function ItemForm({ data }) {
  const dispatch = useDispatch()
  const tables = useSelector(state => state.tables)

  // get the selected item, we use [0] to get the first item of array since it's a filtered array
  const table = tables.filter(table => table._id === data.currentTable)[0]
  const item =
    table.items.length !== 0 &&
    table.items.filter(item => item._id === data.currentItem)[0]

  const [form, setForm] = useState({
    kana: (item !== undefined && item.kana) || "",
    meaning: (item !== undefined && item.meaning) || "",
    example: (item !== undefined && item.example) || "",
    context: (item !== undefined && item.context) || "",
    myExample: (item !== undefined && item.myExample) || ""
  })
  const { kana, meaning, example, context, myExample } = form

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-75 z-10 bg-gray-900 flex items-center justify-center p-5">
      <div className="relative p-5 bg-white z-20 rounded rounded-md">
        <h2 className="text-2xl text-gray-800">Add New Item</h2>
        <form autoComplete="off" className="grid grid-cols-5">
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
        </form>
        <div className="flex items-center justify-end p-2">
          <Button
            type="cancel"
            onClick={() => {
              dispatch(unsetTableId())
              dispatch(unsetItemId())
              dispatch(toggleForm())
            }}
            text="Cancel"
          />
          <Button
            type="confirm"
            onClick={() => {
              data.currentItem === ""
                ? dispatch(addItem(data.currentTable, form))
                : dispatch(editItem(data.currentTable, data.currentItem, form))
              dispatch(unsetItemId())
              dispatch(toggleForm())
            }}
            text={data.currentItem === "" ? "Add" : "Edit"}
          />
        </div>
      </div>
    </div>
  )
}
