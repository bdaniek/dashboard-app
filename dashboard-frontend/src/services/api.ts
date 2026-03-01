import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const login = (email: string, password: string) => api.post('/login', { email, password });

export const getDashboard = () => api.get('/dashboard');
