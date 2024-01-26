import { UsButton } from "../../components/ui/button"
import { InputEmail,InputPassword} from "../../components/ui/input"
import * as React from 'react'
import imgLogin from '../../assets/img_login.png'
import styles from './styles.module.scss'
// import GoogleLogin from 'react-google-login'


export default function Login() {

  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [profilePic, setProfilePic] = useState()
  // const [isLoggedIn, setIsLogedIn] = useState()
  // const responseGoogle = (response) => {
  //   console.log(response)
  // }

  return (

    <div className={styles.main}> 

       <img src={imgLogin} alt='img Login' className={styles.imgLogin}/>

       <div className={styles.formLogin}>

       <h1>Entre no Orange Portfólio</h1>

       {/* <div>
        <GoogleLogin
          clientId="558139726183-qi4m23hstlt06s64ettanukj4ks92ma8.apps.googleusercontent.com"
          buttonText="Continuar com o google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
       </div> */}

       <h2>Faça login com email</h2>

        <InputEmail children={"Email"}/>

        <InputPassword/>

        <UsButton children={"Entrar"}/>

        <a href="">Cadastre-se</a>

       </div>

    </div>

  )
}