import { api } from "../../services/api"
import { useState, useEffect } from "react"

export function MeusProjetos() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/user/projects")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("deu erro" + err);
      });
  }, []);

  return (
    <div>
      Meus Projetos
      <p>Usuario: {user?.name}</p>
    </div>
  )
}