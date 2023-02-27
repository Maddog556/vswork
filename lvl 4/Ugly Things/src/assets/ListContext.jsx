import React, { useState, useEffect } from "react"
import axios from "axios"

const ListContext = React.createContext()

function ListContextProvider(props) {
  const [userArray, setArray] = useState([])
  const [userInput, setInput] = useState([])
  const [didSubmit, setDidSubmit] = useState(true)


  // ACTS AS COMPONENTDIDUPDATE
  useEffect(() => {
    axios.get("https://api.vschool.io/josh/thing")
      .then(result => {
        addFunctions(result.data)
      })
  }, [didSubmit])

  // DISABLES INPUTS AFTER MOUNT/AXIOS.GET()
  function addFunctions(data) {
    const updatedArray = data.map(item => {
      item.inputDisabled = "disabled"
      item.editBtnText = "Edit"
      return item
    })
    setArray(updatedArray)
  }

  const handleChange = (id, event) => {
    const updatedArray = userArray.map(item => {
      if (id === item._id) {
        const updatedItem = { ...item, [event.target.name]: event.target.value }
        setInput(updatedItem)
        return updatedItem
      }
      return item
    })
    setArray(updatedArray)
  }


  // EDIT BUTTON FUNCTION
  const handleEdit = (id) => {
    const updatedArray = userArray.map(item => {
      if (id === item._id && item.inputDisabled === "disabled") {
        item.inputDisabled = ""
        item.editBtnText = "Save"
      } else if (id === item._id && item.inputDisabled === "") {
        item.inputDisabled = "disabled"
        item.editBtnText = "Edit"
        handleSave(id)
      } else if (id !== item._id) {
        item.editBtnDisable = "disable"
      }
      return item
    })
    setArray(updatedArray)
  }

  // SAVE BUTTON & AXIOS PUT 
  const handleSave = (id) => {
    axios.put("https://api.vschool.io/josh/thing/" + id, userInput)
      .then(function (response) {
        console.log(`Update Success ${JSON.stringify(response.data)}`)
        setDidSubmit(!didSubmit)
      }).catch(error => {
        console.log(error)
      })
  }

  // DELETE ITEM BUTTON
  const handleDelete = (id) => {
    axios.delete("https://api.vschool.io/josh/thing/" + id)
      .then(response => {
        console.log(response.data.msg)
      })
      .catch(error => { console.log(error) })
    const updatedArray = userArray.filter(item => (id !== item._id))
    return setArray(updatedArray)
  }

  return (
    <ListContext.Provider value={{
      userArray,
      handleDelete,
      didSubmit,
      setDidSubmit,
      handleChange,
      handleEdit,
    }}>
      {props.children}
    </ListContext.Provider>
  )
}

export { ListContextProvider, ListContext }