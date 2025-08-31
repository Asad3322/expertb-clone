// src/services/authService.js
import axios from 'axios';

const API = 'http://127.0.0.1:5000/api/auth'; // ✅ Updated to match backend route

export const signupAdmin = async (data) => {
  return axios.post(`${API}/signup`, data);
};

export const loginAdmin = async (data) => {
  return axios.post(`${API}/login`, data);
};
