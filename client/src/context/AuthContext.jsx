import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Call this when the user successfully logs in
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook so any component can easily grab the user!
export const useAuth = () => {
  return useContext(AuthContext);
};
