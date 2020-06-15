import React from "react"
import Table from "./components/Table"
import { fakeRes } from "./store/store"
import "./styles/custom.css"
import Button from "./components/Button"

export default function App() {
  return (
    <div className="text-center mx-2 sm:w-11/12 lg:w-3/4 sm:mx-auto font-bold">
      <h1 className="text-4xl block mt-2 text-blue-900">Da Board</h1>
      <div className="w-full">
        {fakeRes.items.map(item => (
          <Table data={item.cols} key={item._id} />
        ))}
        <Button />
      </div>
    </div>
  )
}
