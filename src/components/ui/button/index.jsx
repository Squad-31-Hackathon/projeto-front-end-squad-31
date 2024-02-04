import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';
import { Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


//Para ser chamado no login e cadastro
export function UsButton({children}){
    return(  
        <div className={styles.div}>
            <Button type="submit" className={styles.button} variant="contained">{children}</Button>
        </div>    

    )
}
export function AddButton({children}){
    return(  
        <div className={styles.divAdd}>
            <Button type="submit" className={styles.buttonAdd} variant="contained">{children}</Button>
        </div>    

    )
}
export function DisButton({children, handleClose}){
 
    const handleClick = () => {
        handleClose(); 
    }
    return(  
        <div className={styles.divDis}>
            <button className={styles.buttonDis} variant="contained" onClick={handleClick}>{children}</button>
        </div>    

    )
}


export function DeButton({ children, handleDele, handleClose }) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    const handleDeleteAndClose = async () => {
        try {
            await handleDele();
            handleClose();
            handleModalClose();
            window.location.reload(); 
        } catch (error) {
            console.error('Erro ao excluir o projeto:', error);
  
        }
    }

    return (
        <div className={styles.divAdd}>
            <Button type="submit" className={styles.buttonAdd}  onClick={handleClick}  variant="contained">{children}
            </Button>
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={styles.divE}>
                <p className={styles.texto}>Projeto deletado com sucesso!</p>
                <CheckCircleIcon className={styles.su}/>
                <Button className={styles.buttonAdd}  onClick={handleDeleteAndClose} variant="contained">VOLTAR PARA PROJETOS</Button>
                </div>
                
                

            </Modal>
        </div> 
    )
}