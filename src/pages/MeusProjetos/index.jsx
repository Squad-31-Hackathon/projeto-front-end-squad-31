import { Avatar } from "@mui/material";
import { UsHeader } from "../../components/ui/header";
import styles from './styles.module.scss'
import { AddModal, ButtonModal } from "../../components/ui/modalAdd";
import { InputNormal } from "../../components/ui/input";
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import CardMP from "../../components/ui/cardMP";




export function MeusProjetos() {
  
  const [user, setUser] = useState();
  const [tag, setTag] = useState('')
  const handleInputChange = (event) => {
    setTag(event.target.value);
    
  };
  

  useEffect(() => {
    
      const fetchUser = async () => {
        try {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            const response = await api.get("/user");
            setUser(response.data);
          }
        } catch (error) {
          console.error("Erro ao chamar a API:", error);
        }
      };
  
      fetchUser();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <UsHeader/>
      </div>
      <div className={styles.body}>
        <div className={styles.add}>
            <div>
              <Avatar  className={styles.avatar}/>
            </div>
            <div className={styles.resto}>
              <p className={styles.nome}>{user ? `${user.name} ${user.lastName}` : 'Carregando...'}</p>
              <p className={styles.pais}>Pais</p>
              <AddModal/>
            </div>
        </div>

        <div className={styles.midle}>
          
          <p>Meus projetos</p>
          <InputNormal children={"Buscar tags"}
          value={tag}
          funcButton={handleInputChange}/>
        </div>
        <div className={styles.final}>

          <CardMP tagFilter={tag}/>

          
        </div>
      </div>
      
    </div>
  )
}

