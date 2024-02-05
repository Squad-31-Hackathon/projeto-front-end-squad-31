import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function authLogin({ email, password }) {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;

      Cookies.set("token", token, { expires: 7 });
      localStorage.setItem("token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authLogin, signOut, user: data.token }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
