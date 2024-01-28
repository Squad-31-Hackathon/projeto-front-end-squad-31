import { Avatar } from "@mui/material";
import { UsHeader } from "../../components/ui/header";
import styles from './styles.module.scss'
import { AddModal, ButtonModal } from "../../components/ui/modalAdd";
import { InputNormal } from "../../components/ui/input";

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
        <div className={styles.midle}>
          <p>Meus projetos</p>
          <InputNormal children={"Buscar tags"}/>
        </div>
        <div className={styles.final}>
          <ButtonModal/>
          <ButtonModal/>
          <ButtonModal/>
        </div>
      </div>
      
    </div>
  )
}