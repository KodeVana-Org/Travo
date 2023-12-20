import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'


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
import PrivateComponents from './components/profile/privateRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>

        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/me" element={<PrivateRouteWrapper element={<Profile />} />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<Tour />} />
        {/* <Route path="/payment/:id" element={<PrivateRouteWrapper element={<Payment />} />} /> */}

        {/* Private Routes */}
        <Route
                    path="/me"
                    element={<PrivateComponents />}
                >
                    <Route index element={<Profile />} />
                </Route>
                <Route
                    path="/payment/:id"
                    element={<PrivateComponents />}
                >
                    <Route index element={<Payment/>} />
                </Route>


      </Routes>
    </Router>
      
    
  );
}

export default App
