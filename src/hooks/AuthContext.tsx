import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthState {
  user: object;
}

interface SignInCredentials {
  email: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@PhotoBrowser:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email }) => {
    const response = await api.get('users');
    const responseUser = response.data.filter(
      (item: SignInCredentials) => item.email === email,
    );

    localStorage.setItem('@PhotoBrowser:user', JSON.stringify(responseUser[0]));
    console.log(responseUser[0]);
    setData(responseUser[0]);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('it must have an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
