import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import MyBooking from './pages/MyBooking/MyBooking';
import Index from './pages/admin/Dashboard/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import FlightDetail from './pages/Flight/FlightDetail/FlightDetail';
import { SearchResult } from './pages/SearchResult';
import CreateFlight from './pages/Admin/Flights/CreateFlight.jsx/CreateFlight';
import UpdateFlight from './pages/Admin/Flights/UpdateFlight/UpdateFlight';
import FlightInformation from './pages/Admin/Flights/Index';
import Airline from './pages/Admin/Airline/Index';
import BookingInformation from './pages/Admin/Booking/Booking';
import Landing from './pages/Landing/Index';
import BookingDetail from './pages/BookingDetail/index';
import LoginAdmin from './pages/Admin/Login/LoginAdmin';
import RegisterAdmin from './pages/Admin/Register/RegisterAdmin';
import PageNotFound from './pages/404/404';
import PrivateRoute from './middlewares/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route path="/my-booking" element={
        <PrivateRoute>
          <MyBooking />
        </PrivateRoute>
      } />
      <Route path="/my-booking/ticket/:id" element={
        <PrivateRoute>
          <BookingDetail />
        </PrivateRoute>
      } />
      <Route path="/flights/:id" element={<FlightDetail />} />
      <Route path="/flights" element={<SearchResult />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/*" element={<PageNotFound />} />

      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/register" element={<RegisterAdmin />} />
      <Route path="/admin/dashboard">
        <Route path="airlines" element={
          <PrivateRoute>
            <Airline />
          </PrivateRoute>
        } />
        <Route path="flights" element={
          <PrivateRoute>
            <FlightInformation />
          </PrivateRoute>
        } />
        <Route path="bookings" element={
          <PrivateRoute>
            <BookingInformation />
          </PrivateRoute>
        } />
        <Route path="flights/edit/:id" element={
          <PrivateRoute>
           <UpdateFlight />
          </PrivateRoute>
        } />
        <Route path="flights/create-flight" element={
          <PrivateRoute>
            <CreateFlight />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
