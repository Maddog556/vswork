// axios and uuidv4 installed


import React from 'react'
import Form from './assets/Form'
import UglyArray from './assets/UglyArray'
import { FormContextProvider } from "./assets/FormContext"
import { ListContextProvider } from "./assets/ListContext"




import './App.css'

function App() {
  

  return (
    <>
      <ListContextProvider>
        <FormContextProvider>
          <Form />
        </FormContextProvider>
        <UglyArray />
      </ListContextProvider>
    </>
  
  )
}

export default App
