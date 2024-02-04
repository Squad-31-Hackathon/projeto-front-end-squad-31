import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Avatar, CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { api } from "../../../services/api";
import { useState, useEffect } from "react";

export default function DescobrirCard() {
  const [openModal, setOpenModal] = React.useState({});

  function formatMonthYear(dateString) {
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = date.getFullYear().toString().slice(-2);

    return `${month}/${year}`;
}

  const handleOpen = (uuid) => {
    setOpenModal((prevState) => ({
      ...prevState,
      [uuid]: true
    }));
  };

  const handleClose = (uuid) => {
    setOpenModal((prevState) => ({
      ...prevState,
      [uuid]: false
    }));
  }

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
    <div className={styles.all}>
      <Box sx={{ display: 'flex' }}>
      {user.length === 0 && <CircularProgress />}
    </Box>
      {user.map((dados) => (
        <div key={dados.uuid}>
          <button className={styles.button} onClick={() => handleOpen(dados.uuid)}>
            <Card className={styles.cart}>
              <CardActionArea>
                <CardContent>
                  <div className={styles.card}>
                    <img className={styles.img} src={dados.image}></img>
                  </div>
                  
                </CardContent>
                <div className={styles.perfilWrapper}>
                <div className={styles.perfil}>
                <Avatar className={styles.perImg} />
                <p>
                    {dados.owner.name} {dados.owner.lastName}
                </p>
                <FiberManualRecordIcon className={styles.ponto} />
                <p>{formatMonthYear(dados.publishDate)}</p>
            </div>
        </div>
              </CardActionArea>
            </Card>
          </button>
          <Modal
            open={openModal[dados.uuid]}
            onClose={() => handleClose(dados.uuid)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles.div}>
              <div className={styles.close}>
                <button onClick={() => handleClose(dados.uuid)}>
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
                    <p>{formatMonthYear(dados.publishDate)}</p>
                  </div>
                </div>
                <div className={styles.title}>
                  <p>{dados.title}</p>
                </div>
                <div className={styles.tags}>
                {dados.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
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
                      <p></p>
                    </div>
                  </div>
                  <div className={styles.tags}>
                    {dados.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
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

