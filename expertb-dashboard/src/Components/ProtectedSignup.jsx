import React from 'react';
import { Navigate } from 'react-router-dom';
import Signup from '../pages/Signup'; // adjust path if needed

const ProtectedSignup = () => {
  const token = localStorage.getItem('token');

  // If token exists, redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Signup />;
};

export default ProtectedSignup;
