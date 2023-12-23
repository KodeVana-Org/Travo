import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Your components
import Home from './pages/Home.jsx';
import About from './pages/About_us.jsx';
import Blogs from './pages/Blogs.jsx';
import Tours from './pages/Tours.jsx';
import Destinations from './pages/Destinations.jsx';
import Contact from './pages/Contact_us.jsx';
import Tour from './pages/Tour.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './components/profile/profile.jsx'; // Ensure this is the correct path
import { Payment } from './pages/Payment.jsx';
// import PrivateComponents from './components/profile/privateRoute.jsx';
import NotFound from './pages/PageNotFound.jsx';


const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Convert to boolean
};

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<Tour />} />

          {/* Render these routes if logged in */}
          {loggedIn ? (
          <>
            <Route path="/me" element={<Profile />} />
            <Route path="/payment/:id" element={<Payment />} />
          </>
        ) : (
          <Route path="/me" element={<Navigate to="/" />} />
        )}

        {/* Login and Register routes */}
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={loggedIn ? <Navigate to="/" /> : <Register />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App
