import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function authLogin({ email, password }) {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;

      localStorage.setItem("token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token });

      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log("Não foi possivel entrar", error.response.data.message);
      } else {
        console.log("Não foi possivel entrar");
      }
    }
  }

  function signOut(){
    localStorage.removeItem("token")
    setData({})
  }

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ authLogin, signOut,  user: data.token }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
