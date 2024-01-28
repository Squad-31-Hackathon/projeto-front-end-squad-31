import { UsButton } from "../../components/ui/button"
import { InputEmail,InputNameAndLastName,InputPassword} from "../../components/ui/input"
import * as React from 'react'
import imgRegister from '../../assets/img_register.png'
import styles from './styles.module.scss'


export default function Register() {

  return (

    <div className={styles.main}> 
      <div>
        <img src={imgRegister} alt='img Register' className={styles.imgRegister}/>
      </div>

      <div className={styles.fom}>
        <div className={styles.formLogin}>
          <p>Cadastre-se</p>
            <form>
            <InputNameAndLastName name={"Nome"} lastName={"Sobrenome"}/>

            <InputEmail children={"Email"}/>

            <InputPassword/>

            <UsButton children={"Cadastrar"}/>
            </form>

        </div>
      </div>
       

    </div>

  )
}