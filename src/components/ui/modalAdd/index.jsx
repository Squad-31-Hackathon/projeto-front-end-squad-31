import * as React from 'react';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'



export function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className={styles.div}> 
            <div>

            </div>
            <div>
                <div>
                    <p>Selecione o conteúdo que você deseja fazer upload</p>
                    <img src='../../../../public/semImagem.png'></img>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        
      </Modal>
    </div>
  );
}