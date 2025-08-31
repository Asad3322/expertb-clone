import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { signupAdmin } from '../services/authService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    viewPassword: '' // ✅ New field
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showViewPassword, setShowViewPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const secretKey = searchParams.get('key');
    if (secretKey !== 'expertB@2025') {
      navigate('/login');
    }
  }, [searchParams, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signupAdmin(form);
      toast.success('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      const msg = err.response?.data?.message || 'Signup failed';
      toast.error(msg);
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#C42F34] mb-6">Create Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && <p className="text-center text-red-500 text-sm">{error}</p>}

          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C42F34]"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C42F34]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">Login Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#C42F34]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="viewPassword" className="block mb-1 text-gray-700 font-medium">View Students Password</label>
            <div className="relative">
              <input
                type={showViewPassword ? 'text' : 'password'}
                name="viewPassword"
                id="viewPassword"
                value={form.viewPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#C42F34]"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowViewPassword(!showViewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600"
              >
                {showViewPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 rounded-lg transition ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C42F34] hover:bg-[#a8282c]'
            }`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#C42F34] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
