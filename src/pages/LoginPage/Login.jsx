import { UsButton } from "../../components/ui/button"
import { InputEmail,InputPassword} from "../../components/ui/input"
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
      <div>
        <img src={imgLogin} alt='img Login' className={styles.imgLogin}/>
      </div>
       
      <div className={styles.fom}>
        <div className={styles.formLogin}>
          <p className={styles.h1}>Entre no Orange Portfólio</p>
          <div>
            <button className={styles.button}>google</button>
          </div>
          
          <form>
          <p className={styles.p}>Faça login com email</p>
              <InputEmail children={"Email"}/>
              <InputPassword/>
              <UsButton children={"Entrar"}/>
              <a href="">Cadastre-se</a>
          </form>
          
        </div>
      </div>
       

    </div>

  )
}