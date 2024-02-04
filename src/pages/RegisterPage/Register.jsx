import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { MyAlert } from "../../components/ui/Alert"

import { Link } from 'react-router-dom'



export default function Register() {

  const [formData, setFormData] = useState({ name: '', lastName: '' })
  const [cadastroSucesso, setCadastroSucesso] = useState('');




  const handleChange = (e, name) => {

    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await api.post('/auth/register', formData);
      console.log('Registro bem-sucedido', response.data);
      setCadastroSucesso(true)
    } catch (error) {
      if (error.response) {
        console.error('Erro ao registrar:', error.response.data);
      }
      setCadastroSucesso(false)

    }
  };

  return (

    <div className={styles.main}>
      <div>
        <img src={imgRegister} alt='img Register' className={styles.imgRegister} />
      </div>

      <div className={styles.formLogin}>
        <div className={styles.alert}>
          {cadastroSucesso ? (
            <MyAlert />
          ) : (
            <div className={styles.errorAlert}>
              <p>Erro ao cadastrar. Por favor, tente novamente.</p>
            </div>
          )}
        </div>


        <p className={styles.p}>Cadastre-se</p>

        <form onSubmit={handleSubmit}>
          <InputNameAndLastName
            name="Name *"
            lastName="LastName *"
            value={[formData.name, formData.lastName]}
            funcButton={(e, l) => handleChange(e, l)}
          />
          <InputEmail
            children="Email *"
            name="email"
            type="email"
            value={formData.email}
            funcButton={e => handleChange(e, "email")}
          />
          <InputPassword
            name="password"
            value={formData.password}
            funcButton={e => handleChange(e, "password")}
          />
          <UsButton type="submit">Cadastrar</UsButton>
          <Link className={styles.link} to="/">Voltar para o login</Link>
        </form>

      </div>

    </div>

  )
}