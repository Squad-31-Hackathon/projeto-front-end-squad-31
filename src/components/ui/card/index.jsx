import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Avatar, CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";

import { api } from "../../../services/api";
import { useState, useEffect } from "react";

export default function DescobrirCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState([]);

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
      {user.map((dados) => (
        <div key={dados.uuid}>
          <button className={styles.button} onClick={handleOpen}>
            <Card className={styles.cart}>
              <CardActionArea>
                <CardContent>
                  <div className={styles.card}>
                    <img className={styles.img} src={dados.image}></img>
                  </div>
                  <div className={styles.perfil}>
                    <Avatar className={styles.perImg} />
                    <p>
                      {dados.owner.name} {dados.owner.lastName}
                    </p>
                    <FiberManualRecordIcon className={styles.ponto} />
                    <p>02/24</p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles.div}>
              <div className={styles.close}>
                <button onClick={handleClose}>
                  <CloseIcon />
                </button>
              </div>
              <div className={styles.info}>
                <div className={styles.perfil}>
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <p>
                      {dados.owner.name} {dados.owner.lastName}
                    </p>
                    <p>02/24</p>
                  </div>
                </div>
                <div className={styles.title}>
                  <p>{dados.title}</p>
                </div>
                <div className={styles.tags}>
                  <span>Tag1</span>
                  <span>Tag2</span>
                </div>
              </div>
              <div className={styles.midle}>
                <img className={styles.img} src={dados.image}></img>
                <div className={styles.resp}>
                  <div className={styles.perfil}>
                    <div>
                      <Avatar className={styles.avatar} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        {dados.owner.name} {dados.owner.lastName}
                      </p>
                      <FiberManualRecordIcon className={styles.ponto} />
                      <p>02/24</p>
                    </div>
                  </div>
                  <div className={styles.tags}>
                    <span>Tag1</span>
                    <span>Tag2</span>
                  </div>
                </div>
              </div>
              <div className={styles.final}>
                <div className={styles.descr}>
                  <p>
                    {dados.description}
                  </p>
                </div>
                <div className={styles.link}>
                  <p>Download</p>
                  <a href="#">{dados.link}</a>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
}
