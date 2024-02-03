import DescobrirCard from '../../components/ui/card';
import { UsHeader } from '../../components/ui/header';
import { InputNormal } from '../../components/ui/input';
import styles from './styles.module.scss';
import { api } from "../../services/api"
import { useState, useEffect } from "react"

export function Descobrir() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/project")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("deu erro" + err);
      });
  }, []);

  return (
    //exemplo consumo de api <p>Usuario: {user?.name}</p>
    <div>
    <div className={styles.header}>
      <UsHeader/>
    </div>
    <div className={styles.body}>
      <div className={styles.desc}>
          <div>
            <p>Junte-se à comunidade de inovação,
               inspiração e descobertas,
               transformando experiências em conexões inesquecíveis</p>
          </div>
      </div>
      <div className={styles.midle}>
       <InputNormal children={"Buscar Tags"}/>
      
      </div>
      <div className={styles.final}>
        <div><DescobrirCard/></div>
        <div><DescobrirCard/></div>
        <div><DescobrirCard/></div>
        <div><DescobrirCard/></div>

      </div>
    </div>
    
  </div>
  )
}