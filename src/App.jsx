import './App.css'
import {Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/profile'
import MyBooking from './pages/MyBooking/MyBooking'
import Index from './pages/Dashboard/Index'

function App() {

  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-booking" element={<MyBooking />} />
      <Route path="/dashboard" element={<Index />} />
    </Routes>
  )
}

export default App
