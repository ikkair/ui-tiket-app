import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import MyBooking from './pages/MyBooking/MyBooking';
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
import LoginSuperAdmin from './pages/Admin/LoginSuperAdmin/LoginSuperAdmin';
import PageNotFound from './pages/404/404';
import Destination from './pages/Destination';
import PrivateRoute from './middlewares/PrivateRoute';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from './app/reducer/authSlice';

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      fetch('http://localhost:3001/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status == 200) return response.json();
          throw new Error(`Authentication has been failed`);
        })
        .then((resObj) => {
          setUser(resObj);
          dispatch(
            setCredentials({
              token: resObj.token,
              user: resObj.data.profile,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  console.log(user);

  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-booking"
        element={
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-booking/ticket/:id"
        element={
          <PrivateRoute>
            <BookingDetail />
          </PrivateRoute>
        }
      />
      <Route path="/flights/:id" element={<FlightDetail />} />
      <Route path="/flights" element={<SearchResult />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/destination/:id" element={<Destination />} />

      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/login-super" element={<LoginSuperAdmin />} />
      <Route path="/admin/dashboard">
        <Route
          path="airlines"
          element={
            <PrivateRoute>
              <Airline />
            </PrivateRoute>
          }
        />
        <Route
          path="flights"
          element={
            <PrivateRoute>
              <FlightInformation />
            </PrivateRoute>
          }
        />
        <Route
          path="bookings"
          element={
            <PrivateRoute>
              <BookingInformation />
            </PrivateRoute>
          }
        />
        <Route
          path="flights/edit/:id"
          element={
            <PrivateRoute>
              <UpdateFlight />
            </PrivateRoute>
          }
        />
        <Route
          path="flights/create-flight"
          element={
            <PrivateRoute>
              <CreateFlight />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
