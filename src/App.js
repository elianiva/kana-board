import React, { useEffect, useState } from "react"
import Table from "./components/Table"
import Button from "./components/Button"
import "./styles/custom.css"
import { addItem, toggleAddItem, addTable } from "./store/actions"
import { useSelector, useDispatch } from "react-redux"
import Form from "./components/Form"

export default function App() {
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState({
    kana: "",
    meaning: "",
    example: "",
    context: "",
    myExample: ""
  })
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="text-center mx-2 sm:w-11/12 lg:w-3/4 sm:mx-auto font-bold">
      <h1 className="text-4xl block mt-2 text-gray-800">Da Board</h1>
      <div className="w-full">
        {state.items.map(item => (
          <Table data={item} key={item._id} />
        ))}
        <Button type="table" onClick={() => dispatch(addTable())} />
      </div>
      {state.addItem && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-75 z-10 bg-gray-900 flex items-center justify-center p-5">
          <div className="relative p-5 bg-white z-20 rounded rounded-md">
            <h2 className="text-2xl text-gray-800">Add New Item</h2>
            <div className="grid grid-cols-5">
              <Form
                label="Kana"
                name="kana"
                placeholder={["Ex: かわいい", "Ex: お願いします"]}
              />
              <Form
                label="Meaning"
                name="meaning"
                placeholder={["Ex: Cute", "Ex: Adorable"]}
              />
              <Form
                label="Example"
                name="example"
                placeholder={["Ex: かわいいね", "Ex: Cute isn't it?"]}
              />
              <Form
                label="Context"
                name="context"
                placeholder={[
                  "Ex: When there's something cute",
                  "Ex: Another context"
                ]}
              />
              <Form
                label="My Example"
                name="myExample"
                placeholder={["Ex: かわいい", "Ex: お願いします"]}
              />
            </div>
            <div className="flex items-center justify-end p-2">
              <Button
                type="cancel"
                onClick={() => {
                  dispatch(toggleAddItem())
                }}
              />
              <Button
                type="addItem"
                onClick={() => dispatch(toggleAddItem())}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
