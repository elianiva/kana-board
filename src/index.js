import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { tableReducer } from "./store/reducers"
import { loadState, saveState } from "./store/localStorage"
import "./styles/styles.css"

const persistedState = loadState()
const store = createStore(
  tableReducer,
  persistedState, // load state from localStorage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux debugger tool enhancer
)

// save state to localStorage whenever the state updates
store.subscribe(() => {
  console.log(store.getState())
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)
