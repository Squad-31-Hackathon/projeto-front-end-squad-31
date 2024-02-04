import { useState } from "react";
import { Link } from "react-router-dom";

import { UsButton } from "../../components/ui/button";
import { InputEmail, InputPassword } from "../../components/ui/input";
import imgLogin from "../../assets/img_login.png";
import styles from "./styles.module.scss";

import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../../contexts/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; 


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authLogin } = useAuth();

  function handleAuthLogin(e) {
    e.preventDefault();
    authLogin({ email, password });
    console.log(email)
    console.log(password)
  }
 
  return (
    <div className={styles.main}>
      <div>
        <img src={imgLogin} alt="img Login" className={styles.imgLogin} />
      </div>

      <div className={styles.fom}>
        <div className={styles.formLogin}>
        <div className={styles.alert}>
          {error && (
            <erroLoggingIn />
          )}
        </div>

          <p className={styles.h1}>Entre no Orange Portfólio</p>
          <div>
            <GoogleLogin
              flow="auth-code"
              onSuccess={async credentialResponse => {
                console.log(credentialResponse);
                const userInfo = jwtDecode(credentialResponse.credential)
                console.log(userInfo) 
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>

          <form onSubmit={handleAuthLogin}>
            <p className={styles.p}>Faça login com email</p>
            <InputEmail
              children={"Email"}
              value={email}
              funcButton={(e) => setEmail(e.target.value)}
            />
            <InputPassword
              value={password}
              funcButton={(e) => setPassword(e.target.value)}
            />
            <UsButton type="submit" children={"Entrar"} />

            <Link to="/register">Cadastre-se</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
