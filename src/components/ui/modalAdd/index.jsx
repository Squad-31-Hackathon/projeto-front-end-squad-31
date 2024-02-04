import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from './styles.module.scss';
import { InputNormal, TextInput } from '../input';
import { AddButton, DisButton } from '../button';
import { api } from '../../../services/api';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CollectionsIcon from '@mui/icons-material/Collections';




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
  const [projectInfo, setProjectInfo] = React.useState(null);
  const [successModalOpen, setSuccessModalOpen] = React.useState(false); // Estado para controlar a abertura do modal de sucesso

  const data = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${month}/${day}`;
  };

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/project', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setProjectInfo(response.data);
      setOpen(false);
    } catch (error) {
      console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
    }
  };
  function reload(){
   window.location.reload();
  }

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
                    <span className={styles.colle}><CollectionsIcon/></span>
                    <span>Compartilhe seu talento com milhares de pessoas</span>
                    
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


      {projectInfo && (
        <Modal
          open={!!projectInfo}
          onClose={() => setProjectInfo(null)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
                <div  className={styles.divV}> 
                        <div className={styles.closeV}>
                            <button onClick={() => {
                              setProjectInfo(null); 
                              setSuccessModalOpen(true); 
                            }}><CloseIcon/></button>
                        </div>
                        <div className={styles.infoV}>
                            <div className={styles.perfilV}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <p>{user.name} {user.lastName}</p>
                                    <p>{data()}</p>
                                </div>
                            </div>
                            <div className={styles.titleV}>
                                <p>{projectInfo.title}</p>      
                            </div>
                            <div className={styles.tagsV}>
                                {projectInfo.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                            </div>
                        </div>
                        <div className={styles.midleV} >
                          
                            <img className={styles.imgV} src={projectInfo.image}/>
                            <div className={styles.respV}>
                                <div className={styles.perfilV}>
                                    <div>
                                        <Avatar className={styles.avatarV} />
                                    </div>
                                    <div className={styles.textV}>
                                        <p>{user.name} {user.lastName}</p>
                                        <FiberManualRecordIcon className={styles.pontoV}/>
                                        <p>{data()}</p>
                                    </div>
                                    
                                </div>
                                <div className={styles.tagsV}>
                                        {projectInfo.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                    </div>
                            </div>  

                        </div>
                        <div className={styles.finalV}>
                            <div className={styles.descrV}>
                                <p>  {projectInfo.description}</p>
                            </div>
                            <div className={styles.linkV}>
                                <p>Download</p>
                                <a href={projectInfo.link}>{projectInfo.link}</a>
                            </div>
                        </div>
                    </div>
        </Modal>
        
      )}
      <Modal
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.div3}>
          <p>Projeto adicionado com sucesso!</p>
          <CheckCircleIcon className={styles.su}/>
          <Button className={styles.buttonAdd} onClick={() => {setSuccessModalOpen(false);reload()}} variant="contained">VOLTAR PARA PROJETOS</Button>
        </div>
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
  const [projectInfo, setProjectInfo] = React.useState(null);
  const [successModalOpen, setSuccessModalOpen] = React.useState(false); // Estado para controlar a abertura do modal de sucesso

  const data = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${month}/${day}`;
  };

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/project', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setProjectInfo(response.data);
      setOpen(false);
    } catch (error) {
      console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
    }
  };
  function reload(){
   window.location.reload();
  }

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
                    <span className={styles.colle}><CollectionsIcon/></span>
                    <span>Compartilhe seu talento com milhares de pessoas</span>
                    
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


      {projectInfo && (
        <Modal
          open={!!projectInfo}
          onClose={() => setProjectInfo(null)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
                <div  className={styles.divV}> 
                        <div className={styles.closeV}>
                            <button onClick={() => {
                              setProjectInfo(null); 
                              setSuccessModalOpen(true); 
                            }}><CloseIcon/></button>
                        </div>
                        <div className={styles.infoV}>
                            <div className={styles.perfilV}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <p>{user.name} {user.lastName}</p>
                                    <p>{data()}</p>
                                </div>
                            </div>
                            <div className={styles.titleV}>
                                <p>{projectInfo.title}</p>      
                            </div>
                            <div className={styles.tagsV}>
                                {projectInfo.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                            </div>
                        </div>
                        <div className={styles.midleV} >
                          
                            <img className={styles.imgV} src={projectInfo.image}/>
                            <div className={styles.respV}>
                                <div className={styles.perfilV}>
                                    <div>
                                        <Avatar className={styles.avatarV} />
                                    </div>
                                    <div className={styles.textV}>
                                        <p>{user.name} {user.lastName}</p>
                                        <FiberManualRecordIcon className={styles.pontoV}/>
                                        <p>{data()}</p>
                                    </div>
                                    
                                </div>
                                <div className={styles.tagsV}>
                                        {projectInfo.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                    </div>
                            </div>  

                        </div>
                        <div className={styles.finalV}>
                            <div className={styles.descrV}>
                                <p>  {projectInfo.description}</p>
                            </div>
                            <div className={styles.linkV}>
                                <p>Download</p>
                                <a href={projectInfo.link}>{projectInfo.link}</a>
                            </div>
                        </div>
                    </div>
        </Modal>
        
      )}
      <Modal
        open={successModalOpen} 
        onClose={() => setSuccessModalOpen(false)} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.div3}>
          <p>Projeto adicionado com sucesso!</p>
          <CheckCircleIcon className={styles.su}/>
          <Button className={styles.buttonAdd} onClick={() => {setSuccessModalOpen(false);reload()}} variant="contained">VOLTAR PARA PROJETOS</Button>
        </div>
      </Modal>
            </div>
  );
}