import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  async function authLogin(email, password) {
    const response = await api.post("/auth/login", { email, password });
    console.log(response);
    return response.data
  }

  return (
    <AuthContext.Provider value={{ authLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
