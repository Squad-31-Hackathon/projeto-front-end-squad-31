import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({ user: null, token: null });
  
  
  
  

  useEffect(() => {

    const token = localStorage.getItem('token');


    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;;
      setData({ token });
    }
    
  }, []);

  async function authLogin({ email, password }) {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;

      Cookies.set("token", token, { expires: 7 });
      localStorage.setItem("token", token);

      const {user, token } = response.data;
    
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token });

      setData({ user, token });
      localStorage.setItem('token', token);
 
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
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"];
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
