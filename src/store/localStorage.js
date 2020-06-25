// load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    return serializedState === null ? undefined : JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
  }
}

// save state to localStorage using store.subscribe()
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (err) {
    console.log(err)
  }
}
