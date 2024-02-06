import { UsButton } from "../../components/ui/button"
import { InputEmail, InputNameAndLastName, InputPassword } from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'

import { api } from "../../services/api"
import { useState } from "react"
import { MyAlert, MyErrorAlert, MyEmailErrorAlert, ErrorLoginEmailEmpty } from "../../components/ui/Alert"

import { Link } from 'react-router-dom'

export default function Register() {
  const [formData, setFormData] = useState({ name: '', lastName: '', email: '', password: '' });
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmpty, setErrorEmpty] = useState(false);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.email.trim() === '') {
        setErrorEmpty(true);
        return;
      }

      const response = await api.post('/auth/register', formData);
      console.log('Registro bem-sucedido', response.data);
      setErrorEmpty(false);
      setErrorEmail(false);
      setError(false);
      setCadastroSucesso(true);
    } catch (error) {
      let errorMessage = '';
      if (error.response) {
        console.error('Erro ao registrar:', error.response.data);
        errorMessage = error.response.data.errorMessage;

        if (errorMessage === "Usuário com este email já cadastrado!") {
          setErrorEmail(true);
        } else {
          setError(true);
        }
      }
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <img src={imgRegister} alt='img Register' className={styles.imgRegister} />
      </div>

      <div className={styles.formLogin}>
        <div className={styles.alert}>
          {cadastroSucesso && <MyAlert />}
          {error && <MyErrorAlert />}
          {errorEmail && <MyEmailErrorAlert />}
          {errorEmpty && <ErrorLoginEmailEmpty />}
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
  );
}
