import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserProvider.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <UserProvider>
    <App />
    </UserProvider>
    </Router>
  </React.StrictMode>,
)
