import './App.css'
import {Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import MyBooking from './pages/MyBooking/MyBooking'
import Index from './pages/admin/Dashboard/Index'
import Flight from './pages/Flight/Flight'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import FlightDetail from './pages/Flight/FlightDetail/FlightDetail'
import { SearchResult } from './pages/SearchResult'
import Dashboard from './pages/Admin/Dashboard'
import CreateFlight from './pages/Admin/Flights/CreateFlight.jsx/CreateFlight'
import UpdateFlight from './pages/Admin/Flights/UpdateFlight/UpdateFlight'
import FlightInformation from './pages/Admin/Flights/Index'
import Airline from './pages/Admin/Airline/Index'
import BookingInformation from './pages/Admin/Booking/Booking'


function App() {

  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-booking" element={<MyBooking />} />
      <Route path="/flights/:id" element={<FlightDetail />} />
      <Route path="/dashboard" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/search-result" element={<SearchResult />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard">
        <Route path="airlines" element={<Airline />} />
        <Route path="flights" element={<FlightInformation />} />
        <Route path="bookings" element={<BookingInformation />} />
        <Route path="flights/edit/:id" element={<UpdateFlight />} />
        <Route path="flights/create-flight" element={<CreateFlight />} />
      </Route>
    </Routes>
  )
}

export default App
