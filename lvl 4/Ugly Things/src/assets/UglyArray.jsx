import React, { useContext } from "react"
import { ListContext } from "./ListContext"

function UglyArray(props) {
  console.log("Props: " , props)
  const {item} = props
  const {
    userArray,
    handleChange,
    handleDelete,
    handleEdit,
  

  } = useContext(ListContext)

  return (
    <div className="list">
      {userArray.map(item => (
        <div key={item._id} className="listItem">
          <input
            className="list-title"
            value={item.title}
            name="title"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          <input
            className="list-description"
            value={item.description}
            name="description"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          <img
            src={item.imgUrl}
            alt={item.title}
              className = 'result-image'
            />
          <input
            className="list-link"
            value={item.imgUrl}
            name="imgUrl"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          <div className="itemButtonContainer">
            <button
              disabled={item.editBtnDisable}
              onClick={() => handleEdit(item._id)}
            >{item.editBtnText}</button>
            <button
              onClick={() => handleDelete(item._id)}
            >Delete</button>
          </div>
        </div>

      ))}
    </div>
  )
}

export default UglyArray