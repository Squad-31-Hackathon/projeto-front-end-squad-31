import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState, useEffect } from "react"


export default function Register() {

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('https://api-squad-31-50ec80afc789.herokuapp.com/auth/register', formData);
      console.log('Registro bem-sucedido');
      // Faça algo com a resposta, como redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso.
    } catch (error) {
      console.error('Erro ao registrar:', error);
      
      // Lide com o erro, como exibir uma mensagem de erro para o usuário.
    }
  };

  return (

    <div className={styles.main}>

      <img src={imgRegister} alt='img Register' className={styles.imgRegister} />

      <div className={styles.formLogin}>

        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit}>
          {/* <InputNameAndLastName
            name="name"
            lastName="lastName"
            value={formData.name}
            onChange={handleChange}
          /> */}
          <InputEmail
            children="nome"
            name="name"
            value={formData.name}
            funcButton={handleChange}
          />
          <InputEmail
            children="sobrenome"
            name="surname"
            value={formData.surname}
            funcButton={handleChange}
          />
          <InputEmail
            children="email"
            name="email"
            value={formData.email}
            funcButton={handleChange}
          />
          <InputPassword
            name="password"
            value={formData.password}
            funcButton={handleChange}
          />
          <UsButton type="submit">Cadastrar</UsButton>
        </form>

      </div>

    </div>

  )
}