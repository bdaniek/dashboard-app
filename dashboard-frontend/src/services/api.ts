import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = (email: string, password: string) =>
  api.post('/api/login', { email, password });

export const getDashboard = () => api.get('/api/dashboard');
