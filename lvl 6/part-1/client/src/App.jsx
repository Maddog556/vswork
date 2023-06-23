import './App.css'
import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider'
// import Footer from './UnFunctional/Footer'


function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className='app-container'>
      {/* conitional veiw hides the navbar and have to login to see the site  */}
      { token && <Nav logout={logout} token={token} />}
      <div className='page-container'>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate replace to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo='/'>
              <Profile/>
          </ProtectedRoute>}
        />
        <Route
          path="/public"
          element={<ProtectedRoute token={token} redirectTo='/'>
          <Public/>
      </ProtectedRoute>}
        />
      </Routes>
      </div>
    </div>
  )
}

export default App;