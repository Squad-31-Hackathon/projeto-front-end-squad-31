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
    title: '',
    tags: [],
    description: '',
    link: '',
    publishDate: new Date().toISOString(),
    owner: {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      profileImage: null
    },
    image: null
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
        owner: {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          profileImage: user.profileImage
        }
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
        setFormData(prevFormData => ({ ...prevFormData, image: file }));
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
    
  
    const formDataWithImage = new FormData();
    formDataWithImage.append('image', formData.image);
  

    formDataWithImage.append('title', formData.title);
    formDataWithImage.append('tags', formData.tags);
    formDataWithImage.append('description', formData.description);
    formDataWithImage.append('link', formData.link);
    formDataWithImage.append('publishDate', formData.publishDate);
    formDataWithImage.append('owner[id]', formData.owner.id);
    formDataWithImage.append('owner[name]', formData.owner.name);
    formDataWithImage.append('owner[lastName]', formData.owner.lastName);
    formDataWithImage.append('owner[email]', formData.owner.email);
    formDataWithImage.append('owner[profileImage]', formData.owner.profileImage);
  
    try {
      const response = await api.post('/project', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Registro bem-sucedido', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Erro ao registrar:', error.response.data);
      }
      // Lide com o erro, como exibir uma mensagem de erro para o usuário.
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