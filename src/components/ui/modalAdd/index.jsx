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

  const [imageSrc, setImageSrc] = React.useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = React.useState({});

  const handleChange = (e, name) => {
    
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/projects', formData);
      console.log('Projeto cadastrado com sucesso', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar o projeto:', error.response.data);
    }
  };

  return (
    <div>
      <button className={styles.prime} onClick={handleOpen}>ADICIONAR PROJETO</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.div}>
          <div className={styles.title}>
            <p>Adicionar projeto</p>
          </div>
          <div className={styles.midle}>
            <form className={styles.midle} onSubmit={handleSubmit}>
              <label className={`${styles.textImg} ${imageSrc && styles.whiteBackground}`} tabIndex="0">
                <input
                  id='addImg'
                  type="file"
                  className={styles.img}
                  value={formData.image}
                  onChange={handleImageChange}
                />
                <div id="imgText">
                  {imageSrc ? (
                    <img src={imageSrc} alt="Selected" className={styles.selectedImage} />
                  ) : (
                    <span className={styles.textoInput}>
                      <span>Selecione uma imagem</span>
                      <span className="icon">Ícone Aqui</span>
                    </span>
                  )}
                </div>
              </label>
              <div className={styles.form}>
                <InputNormal children={"Título"}
                 name='titulo'
                 value={formData.title} 
                 funcButton={e => handleChange(e, "titulo")} />
                <Tag name='tag'
                value={formData.tags} 
                funcButton={e => handleChange(e, "tag")} />
                <InputNormal children={"Link"} 
                name='link' 
                value={formData.link}
                funcButton={e => handleChange(e, "link")} />
                <TextInput name='texto'
                value={formData.description} 
                funcButton={e => handleChange(e, "texto")} />
              </div>
            </form>
          </div>
          <div className={styles.final}>
            <div>
              <p>Visualizar publicação</p>
            </div>
            <div className={styles.buttons}>
              <AddButton type="submit" children={'ENVIAR'} />
              <DisButton children={'CANCELAR'} handleClose={handleClose} />
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
  const [imageSrc, setImageSrc] = React.useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
            <label className={`${styles.textImg} ${imageSrc && styles.whiteBackground}`} tabIndex="0">
              <input 
                id='addImg' 
                type="file" 
                accept='image/*' 
                className={styles.img} 
                onChange={handleImageChange} 
              />
              <div id="imgText">
                {imageSrc ? (
                  <img src={imageSrc} alt="Selected" className={styles.selectedImage} />
                ) : (
                  <span className={styles.textoInput}>
                    <span>Selecione uma imagem</span>
                    <span className="icon">Ícone Aqui</span>
                  </span>
                )}
              </div>  
          </label>
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