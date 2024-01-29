import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState, useEffect } from "react"


export default function Register() {

  // const [formData, setFormData] = useState({
  //   name: 'testando',
  //   surname: 'test',
  //   email: 'testeemaildenovo@gmail.com',
  //   password: '1234'
  // });

  // useEffect(() => {
  //   api.post('https://api-squad-31-50ec80afc789.herokuapp.com/auth/register', {
  //     name: "test",
  //     surname: "test",
  //     email: 'testeemaildenovo@gmail.com',
  //     password: '1234'
  //   })
  //     .then((response) => setFormData(response.data))
  //     .catch((err) => {
  //       console.error("deu erro" + err);
  //     });
  // }, []);

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/user/b34c6e31-7d8f-4929-b48f-62fb0716e0e2")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("deu erro" + err);
      });
  }, []);

  return (

    <div className={styles.main}>

      <img src={imgRegister} alt='img Register' className={styles.imgRegister} />

      <div className={styles.formLogin}>

        <h1>Cadastre-se</h1>

        <p>Usuario: {user?.name}</p>

        <InputNameAndLastName name={"Nome"} lastName={"Sobrenome"} />

        <InputEmail children={"Email"} />

        <InputPassword />

        <UsButton children={"Cadastrar"} />

      </div>

    </div>

  )
}