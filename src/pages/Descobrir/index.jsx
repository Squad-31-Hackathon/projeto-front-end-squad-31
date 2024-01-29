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
    <div>Descobrir</div>
  )
}