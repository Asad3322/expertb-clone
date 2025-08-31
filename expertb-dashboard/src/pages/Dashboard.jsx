import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#C42F34] mb-4">Welcome, Admin!</h1>
        <p className="text-gray-600 text-lg mb-6">
          You are now logged in to the ExpertB Admin Dashboard.
        </p>

        <button
          onClick={handleLogout}
          className="bg-[#C42F34] hover:bg-[#a8282c] text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
