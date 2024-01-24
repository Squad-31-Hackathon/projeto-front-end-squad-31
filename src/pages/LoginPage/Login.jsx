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

        <InputEmail children={"Email"}/>
        <InputNameAndLastName name={"Nome"} lastName={"Sobrenome"}/>
        <InputPassword/>
        <UsButton children={"Confirmar"}/>
        <h1></h1>

        <button></button>

        <form action=""></form>

        <button></button>

        <a href=""></a>
       </div>

    </div>

  )
}