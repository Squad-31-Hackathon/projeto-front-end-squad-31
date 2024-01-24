import { UsButton } from "../../components/ui/button";
import { InputEmail,InputNameAndLastName,InputPassword} from "../../components/ui/input";
import * as React from 'react';
import imgLogin from '../../assets/img_login.png'
import styles from './styles.module.scss';


export default function Login() {

  return (
    <div className={styles.main}> 

       <img src={imgLogin} alt='img Login' className={styles.imgLogin}/>

       <div className={styles.formLogin}>

       <h1>Entre no Orange Portfólio</h1>


       <h2>Faça login com email</h2>

        <InputEmail children={"Email"}/>

        <InputPassword/>

        <UsButton children={"Entrar"}/>

        <a href="">Cadastre-se</a>

       </div>

    </div>

  )
}