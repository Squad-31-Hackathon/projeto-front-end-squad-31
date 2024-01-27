import { Avatar } from "@mui/material";
import { UsHeader } from "../../components/ui/header";
import styles from './styles.module.scss'
import { AddModal } from "../../components/ui/modalAdd";

export function MeusProjetos() {

  return (
    <div>
      <div className={styles.header}>
        <UsHeader/>
      </div>
      <div className={styles.body}>
        <div className={styles.add}>
            <div>
              <Avatar className={styles.avatar}/>
            </div>
            <div className={styles.resto}>
              <p className={styles.nome}>Nome Sobrenome</p>
              <p className={styles.pais}>Pais</p>
              <AddModal/>
            </div>
        </div>
      </div>
      
    </div>
  )
}