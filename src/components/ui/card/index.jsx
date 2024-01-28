import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'
import CloseIcon from '@mui/icons-material/Close';


function handleOpen(event) {
    event.preventDefault();
}
  

export default function DescobrirCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
            <div>
                <button onClick={handleOpen}>
                    <Card sx={{ maxWidth: 345 }}  >
                    <CardActionArea  >
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
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
