import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { name: string; email: string };
  login: () => Promise<void>;
  signup: () => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ isAuthenticated: true, user: { name: 'Test User', email: 'test@example.com' } });
  },
  signup: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ isAuthenticated: true, user: { name: 'New User', email: 'new@example.com' } });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));