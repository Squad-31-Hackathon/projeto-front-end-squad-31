import * as React from 'react';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import styles from './styles.module.scss'
import { InputNormal, TextInput } from '../input';
import { Tag } from '../tag';
import { AddButton, DisButton } from '../button';
import { api } from '../../../services/api';




export function AddModal() {
  const [open, setOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');
  const [user, setUser] = React.useState('');
  const [formData, setFormData] = React.useState({
    userUuid: '',
    title: '',
    tags: [],
    description: '',
    link: '',
    image: ''
  });


  React.useEffect(() => {

      const fetchUser = async () => {
        try {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            const response = await api.get("/user");
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        } catch (error) {
          console.error("Erro ao chamar a API:", error);
        }
      };
  
      fetchUser();
  }, []);
  React.useEffect(() => {
    if (user) {
      setFormData(prevFormData => ({
        ...prevFormData,
        userUuid: user.id,

      }));
    }
  }, [user]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setFormData(prevFormData => ({ ...prevFormData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e, name) => {
    const { value } = e.target;

    if (name === 'tags') {
      const tagsArray = value.split(',').map(tag => tag.trim());
      setFormData(prevFormData => ({ ...prevFormData, [name]: tagsArray }));
    } else {
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }
    console.log(formData)

  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await api.post('/project', formData,{
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      console.log('Registro bem-sucedido', response.data);
    } catch (error) {
        if(error.response){
          console.error('Erro ao registrar:', error.response.data);
        }
      

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
        <form className={styles.div} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <p>Adicionar projeto</p>
          </div>
          <div className={styles.midle}>
            <label className={`${styles.textImg} ${imageSrc && styles.whiteBackground}`} tabIndex="0">
              <input
                id='addImg'
                type="file"
                className={styles.img}
                onChange={(e) => {
                  handleImageChange(e);
                  handleChange(e, 'image'); 
                }}
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
              <InputNormal children={"Título"} name='title' value={formData.title} funcButton={e => handleChange(e, "title")} />
              <InputNormal name='tags' children={"Tags"} value={formData.tags} funcButton={e => handleChange(e, "tags")} />
              <InputNormal children={"Link"} name='link' value={formData.link} funcButton={e => handleChange(e, "link")} />
              <TextInput name='description' value={formData.description} funcButton={e => handleChange(e, "description")} />
            </div>
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
        </form>
      </Modal>
    </div>
  );
}
export function ButtonModal() {
  const [open, setOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');
  const [user, setUser] = React.useState('');
  const [formData, setFormData] = React.useState({
    userUuid: '',
    title: '',
    tags: [],
    description: '',
    link: '',
    image: ''
  });


  React.useEffect(() => {

      const fetchUser = async () => {
        try {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            const response = await api.get("/user");
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        } catch (error) {
          console.error("Erro ao chamar a API:", error);
        }
      };
  
      fetchUser();
  }, []);
  React.useEffect(() => {
    if (user) {
      setFormData(prevFormData => ({
        ...prevFormData,
        userUuid: user.id,

      }));
    }
  }, [user]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setFormData(prevFormData => ({ ...prevFormData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e, name) => {
    const { value } = e.target;

    if (name === 'tags') {
      const tagsArray = value.split(',').map(tag => tag.trim());
      setFormData(prevFormData => ({ ...prevFormData, [name]: tagsArray }));
    } else {
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }
    console.log(formData)

  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await api.post('/project', formData,{
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      console.log('Registro bem-sucedido', response.data);
    } catch (error) {
        if(error.response){
          console.error('Erro ao registrar:', error.response.data);
        }
      

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
        <form className={styles.div} onSubmit={handleSubmit}>
          <div className={styles.title}>
            <p>Adicionar projeto</p>
          </div>
          <div className={styles.midle}>
            <label className={`${styles.textImg} ${imageSrc && styles.whiteBackground}`} tabIndex="0">
              <input
                id='addImg'
                type="file"
                className={styles.img}
                onChange={(e) => {
                  handleImageChange(e);
                  handleChange(e, 'image'); 
                }}
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
              <InputNormal children={"Título"} name='title' value={formData.title} funcButton={e => handleChange(e, "title")} />
              <InputNormal name='tags' children={"Tags"} value={formData.tags} funcButton={e => handleChange(e, "tags")} />
              <InputNormal children={"Link"} name='link' value={formData.link} funcButton={e => handleChange(e, "link")} />
              <TextInput name='description' value={formData.description} funcButton={e => handleChange(e, "description")} />
            </div>
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
        </form>
      </Modal>
    </div>
  );
}