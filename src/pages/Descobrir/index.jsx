import { useState } from "react";
import DescobrirCard from "../../components/ui/card";
import { UsHeader } from "../../components/ui/header";
import { InputNormal } from "../../components/ui/input";
import styles from "./styles.module.scss";

export function Descobrir() {
  const [tag, setTag] = useState('')
  const handleInputChange = (event) => {
    setTag(event.target.value);
    
  };
  

  return (
    <div>
      <div className={styles.header}>
        <UsHeader />
      </div>
      <div className={styles.body}>
        <div className={styles.desc}>
          <div>
            <p>
              Junte-se à comunidade de inovação, inspiração e descobertas,
              transformando experiências em conexões inesquecíveis
            </p>
          </div>
        </div>
        <div className={styles.midle}>
          <InputNormal children={"Buscar Tags"}
          value={tag}
          funcButton={handleInputChange}
          />
        </div>
        <div className={styles.final}>
            <DescobrirCard tagFilter={tag}/>
        </div>
      </div>
    </div>
  );
}
