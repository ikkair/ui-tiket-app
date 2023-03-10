import './App.css'
import {Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import MyBooking from './pages/MyBooking/MyBooking'
import Index from './pages/Dashboard/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'

function App() {

  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-booking" element={<MyBooking />} />
      <Route path="/dashboard" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


    </Routes>
  )
}

export default App
