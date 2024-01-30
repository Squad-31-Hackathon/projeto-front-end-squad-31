import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { UsHeader } from "../../components/ui/header";

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
    
    <div>
      <UsHeader />
      Descobrir
      <p>Usuario: {user?.name}</p>
    </div>
  )
}