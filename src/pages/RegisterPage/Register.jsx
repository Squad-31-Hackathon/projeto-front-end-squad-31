import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState, useEffect } from "react"


export default function Register() {

  const [formData, setFormData] = useState({})

  useEffect(() => {
    api.post('https://api-squad-31-50ec80afc789.herokuapp.com/auth/register', {
      name: "Desesperador",
      lastName: "MeAjudaDeus",
      email: 'jogadordelol@gmail.com',
      password: 'funcionaporfavor'
    })
      .then((response) => setFormData(response.data))
      .catch((err) => {
        console.error("deu erro" + err);
      });
  }, []);

  return (

    <div className={styles.main}>

      <img src={imgRegister} alt='img Register' className={styles.imgRegister} />

      <div className={styles.formLogin}>

        <h1>Cadastre-se</h1>

        <InputNameAndLastName name={"Nome"} lastName={"Sobrenome"} />

        <InputEmail children={"Email"} />

        <InputPassword />

        <UsButton children={"Cadastrar"} type="submit"/>

      </div>

    </div>

  )
}