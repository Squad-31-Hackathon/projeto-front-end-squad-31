import { createContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  async function AuthLogin(email, password) {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  }

  return (
    <AuthContext.Provider value={{ signed: false, AuthLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
