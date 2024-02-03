import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CardMP() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


  return (
            <div className={styles.button} >

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

                

                <div className={styles.func}>
                <Button

                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                   <CreateIcon className={styles.pen}/>
                </Button>
                <Menu
                    className={styles.menu}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <li  onClick={handleClose}>Editar</li>
                    <li onClick={handleClose}>Excluir</li>
                    <li onClick={handleClose}>Visualizar</li>
                </Menu>
                </div>

        
            </div>
  );
}
