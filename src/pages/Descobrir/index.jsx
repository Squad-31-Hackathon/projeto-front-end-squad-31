import DescobrirCard from "../../components/ui/card";
import { UsHeader } from "../../components/ui/header";
import { InputNormal } from "../../components/ui/input";
import styles from "./styles.module.scss";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { TagFacesRounded } from "@mui/icons-material";

export function Descobrir() {
  const [tags, setTags] = useState([]);
  const [buscar, setBuscar] = useState();
  console.log(buscar);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/project/tags");
      console.log(response)
      setTags(response.data);
    }
    fetchTags();
  }, []);

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
          <InputNormal
            children={"Buscar Tags"}
            value={buscar}
            funcButton={(e) => setBuscar(e.target.value)}
          />
        </div>
        <div className={styles.final}>
          <DescobrirCard />
        </div>
      </div>
    </div>
  );
}
