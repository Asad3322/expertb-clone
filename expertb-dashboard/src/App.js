import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Event from './pages/Events';
import EventFunction from './pages/EventFunction';
import Login from './pages/Login';
import ProtectedSignup from './Components/ProtectedSignup';
import DashboardLayout from './Components/DashboardLayout';
import AddStudent from './pages/AddStudent';
import ViewStudents from './pages/ViewStudents';
import Certificate from './pages/Certificate';
import Seminar from './pages/Seminar';
import Contact from './pages/Contact';
import EnrollNow from './pages/EnrollNow';
import Loader from './Components/Loader'; // ✅ Red bouncing loader

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Loader state
  const [loading, setLoading] = useState(true);

  // Trigger loader on first load & route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1s per page change
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />; // Show loader during navigation
  }

  return (
    <div className="min-h-screen bg-white">
      <main className={isDashboard ? '' : 'px-0'}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Event />} />
          <Route path="/event-function" element={<EventFunction />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/contact" element={<Contact />} />

          {/* Updated Enroll route with optional courseTitle param */}
          <Route path="/enroll/:courseTitle?" element={<EnrollNow />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<ProtectedSignup />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route path="add-student" element={<AddStudent />} />
            <Route path="students" element={<ViewStudents />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
