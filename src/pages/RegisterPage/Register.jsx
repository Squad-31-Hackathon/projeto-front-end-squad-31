import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState, useEffect } from "react"


export default function Register() {

  const [formData, setFormData] = useState({})
  


  const handleChange = (e, name) => {
    
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      console.log('Registro bem-sucedido');
      debugger
      // Faça algo com a resposta, como redirecionar o usuário para a página de login ou exibir uma mensagem de sucesso.
    } catch (error) {
      console.error('Erro ao registrar:', error);
      
      // Lide com o erro, como exibir uma mensagem de erro para o usuário.
    }
  };

  return (

    <div className={styles.main}> 
      <div>
        <img src={imgRegister} alt='img Register' className={styles.imgRegister}/>
      </div>

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
            funcButton={e => handleChange(e,"name")}
          />
          <InputEmail
            children="sobrenome"
            name="lastName"
            value={formData.surname}
            funcButton={e => handleChange(e,"lastName")}
          />
          <InputEmail
            children="email"
            name="email"
            value={formData.email}
            funcButton={e => handleChange(e,"email")}
          />
          <InputPassword
            name="password"
            value={formData.password}
            funcButton={ e => handleChange(e,"password")}
          />
          <UsButton type="submit">Cadastrar</UsButton>
        </form>

      </div>

    </div>

  )
}