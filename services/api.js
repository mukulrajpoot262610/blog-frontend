import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

// AUTH
export const logout = () => api.post('/api/logout');
export const login = (data) => api.post('/api/login', data);
export const register = (data) => api.post('/api/register', data);
export const refresh = () => api.get('/api/refresh');
export const forgotPassword = (data) =>
  api.post('/api/request-password-reset', data);
export const resetPassword = (data) => api.post('/api/reset-password', data);
export const verifyMagicToken = (data) =>
  api.post('/api/validate-magictoken', data);
export const verifyEmail = (data) => api.post('/api/verify-email', data);
export const requestEmailVerification = () => api.get('/api/verify-email');

export const createPost = (data) => api.post('/api/articles', data);
export const getAllPost = () => api.get('/api/articles');
export const getSinglePost = (slug) => api.get(`/api/articles/${slug}`);
export const getProfile = () => api.get('/api/profile');
export const updateProfile = (data) => api.put('/api/profile', data);

export const updateAvatar = (data) => api.post(`/api/set-avatar`, data);
export const getUserPosts = (data) => api.get('/api/profile', data);
export const getLikedArticle = (data) =>
  api.get('/api/most-liked-articles', data);
export const seacrh = (data) => api.post('/api/articles/search', data);

export default api;
