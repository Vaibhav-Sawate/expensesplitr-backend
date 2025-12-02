import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios';


// --- CRITICAL CONFIGURATION ---
// If Vercel gives us a URL, use it. Otherwise use "" (Proxy).
const apiUrl = import.meta.env.VITE_API_URL || '';

// This sets the base address for every single axios command in your app
axios.defaults.baseURL = apiUrl;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
