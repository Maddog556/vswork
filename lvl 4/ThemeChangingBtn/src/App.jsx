
import Header from './assets/Header'
import Button from './assets/Button'
import {ThemeContext} from './assets/ThemeManager'
import './App.css'


function App(props) {
 

  return (
    <>
{/* provider componet takes a value prop to pass down what every data */}
    <ThemeContext.Provider >
      <Header />
      <Button />
    </ThemeContext.Provider>
    </>
  )
}

export default App
