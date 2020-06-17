import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { tableReducer } from "./store/reducers"
import "./styles/styles.css"

const store = createStore(tableReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)
