import DescobrirCard from "../../components/ui/card";
import { UsHeader } from "../../components/ui/header";
import { InputNormal } from "../../components/ui/input";
import styles from "./styles.module.scss";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

export function Descobrir() {
  const [dados, setDados] = useState([]); //dados api
  const [buscar, setBuscar] = useState(); //input q será digitado
  console.log(buscar);

  useEffect(() => {
    let isMounted = true;  // variável para rastrear se o componente está montado
  
    if (buscar) {
      const buscarDados = async () => {
        const response = await api.get(`/project/tag/${buscar}`);
        if (isMounted) {
          setDados(response.data);
          console.log(response.data);
        }
      };
  
      buscarDados();
    }
  
    return () => {
      isMounted = false;  // definir como false quando o componente é desmontado
    };
  }, [buscar]);

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
          <form>
            <InputNormal
              children={"Buscar Tags"}
              value={buscar}
              funcButton={(e) => setBuscar(e.target.value)}
            />
          </form>
        </div>
        <div className={styles.final}>
          {(buscar ? dados.filter((dado) => dado.name === buscar) : dados).map(
            (item) => (
              <DescobrirCard key={item.index} data={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
