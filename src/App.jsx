import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home.jsx';
import About from './pages/About_us.jsx';
import Blogs from './pages/Blogs.jsx';
import Tours from './pages/Tours.jsx';
import Destinations from './pages/Destinations.jsx';
import Contact from './pages/Contact_us.jsx'
import Tour from './pages/Tour.jsx';
import { Payment } from './pages/Payment.jsx';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/payment/:id" element={<Payment/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
