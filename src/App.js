import React, { useState } from "react"
import Table from "./components/Table"
import Button from "./components/Button"
import { addItem, addTable } from "./store/actions"
import { useSelector, useDispatch } from "react-redux"
import ItemForm from "./components/ItemForm"

import "./styles/custom.css"

export default function App() {
  const [visible, setVisible] = useState(false)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="text-center mx-2 sm:w-11/12 lg:w-3/4 sm:mx-auto font-bold">
      <h1 className="text-6xl block mt-2 text-blue-500 font-hairline">
        Kana Board
      </h1>
      <div className="w-full">
        {state.tables.map(item => (
          <Table data={item} key={item._id} />
        ))}
        <Button type="table" onClick={() => dispatch(addTable())} />
      </div>
      {state.isFormOpened && <ItemForm data={state} />}
    </div>
  )
}
