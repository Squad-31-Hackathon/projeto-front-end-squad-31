import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'
import CloseIcon from '@mui/icons-material/Close';


export default function DescobrirCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
            <div>
                <button className={styles.button} onClick={handleOpen}>
                    <Card className={styles.cart}>
                    <CardActionArea  >
                        <CardContent>
                            <div className={styles.card}>
                                <img className={styles.img} src="../../../../public/semImagem.png"></img> 
                            </div>
                            <div className={styles.perfil}>
                                <Avatar className={styles.perImg}/>
                                <p>Nome Sobrenome</p>
                                <FiberManualRecordIcon className={styles.ponto}/>
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
                    <div  className={styles.div}> 
                        <div className={styles.close}>
                            <button onClick={handleClose}><CloseIcon/></button>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.perfil}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <p>Nome Sobrenome</p>
                                    <p>02/24</p>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p>Titulo do Projeto</p>      
                            </div>
                            <div className={styles.tags}>
                                <span>Tag1</span>
                                <span>Tag2</span>
                            </div>
                        </div>
                        <div className={styles.midle} >
                          
                            <img className={styles.img} src='../../../../public/semImagem.png'></img>
                            <div className={styles.resp}>
                                <div className={styles.perfil}>
                                    <div>
                                        <Avatar className={styles.avatar} />
                                    </div>
                                    <div className={styles.text}>
                                        <p>Nome Sobrenome</p>
                                        <FiberManualRecordIcon className={styles.ponto}/>
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
                                <p>  Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito.
                                     É um modelo de IA.
                                     Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.</p>
                            </div>
                            <div className={styles.link}>
                                <p>Download</p>
                                <a href="#">https://gumroad.com/products/wxCSL</a>
                            </div>
                        </div>
                    </div>
                    
                </Modal>
            </div>
  );
}