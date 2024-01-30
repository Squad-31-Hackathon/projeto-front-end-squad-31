import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function authLogin({email, password}) {
    try {
      const response = await api.post("/auth/login", { email, password });
      const {user, token } = response.data;

      //localStorage.setItem("user", JSON.stringify(user))
      //localStorage.setItem("token", token)

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log("Não foi possivel entrar");
      }
    }
  }

  useEffect(() =>{

  }, [])

  return (
    <AuthContext.Provider value={{ authLogin, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
