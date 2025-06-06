// Determine if we're in production based on the hostname
const isProduction = window.location.hostname === 'kampuskart.netlify.app';

// Base API URL configuration
const API_BASE = isProduction 
  ? 'https://s72-gaurav-capstone.onrender.com' 
  : 'http://localhost:5000';

const SOCKET_URL = isProduction
  ? 'https://s72-gaurav-capstone.onrender.com'
  : 'http://localhost:5000';

export { API_BASE, SOCKET_URL, isProduction }; 