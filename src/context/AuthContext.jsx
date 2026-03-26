import { createContext, useEffect, useMemo, useState } from 'react';
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
    const user = getMockUserFromEmail(email);

    const nextSession = {
      token: generateToken(email),
      user: {
        ...user,
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
      login,
      logout,
    }),
    [session, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
