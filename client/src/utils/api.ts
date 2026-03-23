import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

// API functions
export const getProfile = () => api.get('/profile');
export const getSkills = () => api.get('/skills');
export const getExperience = () => api.get('/experience');
export const getProjects = (category?: string, featured?: boolean) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (featured) params.append('featured', 'true');
  return api.get(`/projects?${params.toString()}`);
};
export const getProject = (slug: string) => api.get(`/projects/${slug}`);
export const getServices = () => api.get('/services');
export const getTestimonials = (featured?: boolean) => {
  const params = featured ? '?featured=true' : '';
  return api.get(`/testimonials${params}`);
};
export const getBlogPosts = (category?: string) => {
  const params = category ? `?category=${category}&published=true` : '?published=true';
  return api.get(`/blog${params}`);
};
export const getBlogPost = (slug: string) => api.get(`/blog/${slug}`);
export const sendContactMessage = (data: {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}) => api.post('/contact', data);
