import React, { useState } from 'react';

const ViewPasswordPrompt = ({ onSuccess }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedViewPassword = localStorage.getItem('viewPassword');
    if (inputPassword === savedViewPassword) {
      onSuccess(); // Allow access
    } else {
      setError('Incorrect view password.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Enter View Students Password</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="border w-full p-2 rounded mb-3"
          required
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ViewPasswordPrompt;
