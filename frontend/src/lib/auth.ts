// src/lib/auth.ts
import { api } from './api';

const TOKEN_KEY = 'authToken';

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function login(email: string, password: string) {
  try {
    const res = await api.post('/auth/login', { email, password });
    if (res.data && res.data.token) {
      saveToken(res.data.token);
    }
    return res.data;
  } catch (err: any) {
    throw err.response?.data || { message: 'Login failed' };
  }
}

export async function register(name: string, email: string, password: string) {
  try {
    const res = await api.post('/auth/register', { name, email, password });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || { message: 'Registration failed' };
  }
}

export function isLoggedIn(): boolean {
  return !!getToken();
}
