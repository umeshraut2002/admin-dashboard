import { createContext, useEffect, useMemo, useState } from 'react';
import { apiClient } from '../api/client';
import { generateToken, getMockUserFromEmail } from '../utils/auth';
import { STORAGE_KEYS } from '../utils/constants';
import { storage } from '../utils/storage';

export const AuthContext = createContext(null);

const initialSession = {
  token: null,
  user: null,
};

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => storage.get(STORAGE_KEYS.auth, initialSession));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const login = async ({ email, password }) => {
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    const nextSession = apiClient.isEnabled()
      ? await apiClient.login({ email, password })
      : {
          token: generateToken(email),
          user: {
            ...getMockUserFromEmail(email),
            passwordHint: password.length >= 8 ? 'Strong password entered' : 'Weak password entered',
          },
        };

    setSession(nextSession);
    storage.set(STORAGE_KEYS.auth, nextSession);

    return nextSession.user;
  };

  const logout = () => {
    setSession(initialSession);
    storage.remove(STORAGE_KEYS.auth);
  };

  const value = useMemo(
    () => ({
      user: session.user,
      token: session.token,
      isAuthenticated: Boolean(session.token),
      isLoading,
      isApiMode: apiClient.isEnabled(),
      login,
      logout,
    }),
    [session, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
