import { useState } from "react";
import { Link } from "react-router-dom";

import { UsButton } from "../../components/ui/button";
import { InputEmail, InputPassword } from "../../components/ui/input";
import imgLogin from "../../assets/img_login.png";
import styles from "./styles.module.scss";

import { useAuth } from "../../contexts/auth";

// import GoogleLogin from 'react-google-login'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authLogin } = useAuth();

  function handleAuthLogin() {
    authLogin({ email, password });
  }

  return (
    <div className={styles.main}>
      <div>
        <img src={imgLogin} alt="img Login" className={styles.imgLogin} />
      </div>

      <div className={styles.fom}>
        <div className={styles.formLogin}>
          <p className={styles.h1}>Entre no Orange Portfólio</p>
          <div>
            <button className={styles.button}>google</button>
          </div>

          <form>
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
            <UsButton onClick={handleAuthLogin} children={"Entrar"} />

            <Link to="/register">Cadastre-se</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
