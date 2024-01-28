import * as React from 'react';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'
import { InputNormal, TextInput } from '../input';
import { Tag } from '../tag';
import { AddButton, DisButton } from '../button';



export function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.prime} onClick={handleOpen}>ADICIONAR PROJETO</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className={styles.div}> 
            <div className={styles.title}>
                <p>Adicionar projeto</p>
            </div>
            <div className={styles.midle} >
                <div className={styles.textImg}>
                    <p>Selecione o conteúdo que você deseja fazer upload</p>
                    <button><img className={styles.img} src='../../../../public/semImagem.png'></img></button>   
                </div>
                <div className={styles.form}>
                  <form>
                    <InputNormal children={"Título"}/>
                    <Tag/>
                    <InputNormal children={"Link"}/>
                    <TextInput/>
                  </form>
                </div>
            </div>
            <div className={styles.final}>
                <div>
                  <p>Visualizar publicação</p>
                </div>
                <div className={styles.buttons}>
                  <AddButton children={'ENVIAR'}/>
                  <DisButton children={'CANCELAR'} handleClose={handleClose}/>
                </div>
            </div>
        </div>
        
      </Modal>
    </div>
  );
}
export function ButtonModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.primeButton} onClick={handleOpen}><img className={styles.imgButton} src='../../../../public/add.png'></img></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className={styles.div}> 
            <div className={styles.title}>
                <p>Adicionar projeto</p>
            </div>
            <div className={styles.midle} >
                <div className={styles.textImg}>
                    <p>Selecione o conteúdo que você deseja fazer upload</p>
                    <button><img className={styles.img} src='../../../../public/semImagem.png'></img></button>   
                </div>
                <div className={styles.form}>
                  <form>
                    <InputNormal children={"Título"}/>
                    <Tag/>
                    <InputNormal children={"Link"}/>
                    <TextInput/>
                  </form>
                </div>
            </div>
            <div className={styles.final}>
                <div>
                  <p>Visualizar publicação</p>
                </div>
                <div className={styles.buttons}>
                  <AddButton children={'ENVIAR'}/>
                  <DisButton children={'CANCELAR'} handleClose={handleClose}/>
                </div>
            </div>
        </div>
        
      </Modal>
    </div>
  );
}