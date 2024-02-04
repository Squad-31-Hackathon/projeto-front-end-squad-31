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
import CloseIcon from '@mui/icons-material/Close';
import { AddButton, DeButton, DisButton } from '../button';
import { InputNormal, TextInput } from '../input';
import { api } from '../../../services/api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CardMP() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (uuid) => {
        setOpen((prevState) => ({
          ...prevState,
          [uuid]: true
        }));
    };
    const handleCloseT = (uuid) => {
        setOpen((prevState) => ({
          ...prevState,
          [uuid]: false
        }));
      }
 

  const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = (uuid) => {
        setOpenEdit((prevState) => ({
          ...prevState,
          [uuid]: true
        }));
    };
    const handleCloseEdit = (uuid) => {
        setOpenEdit((prevState) => ({
          ...prevState,
          [uuid]: false
        }));
      }
  const [openEx, setOpenEx] = React.useState(false);
 
const handleOpenEx = (uuid) => {
    setOpenEx((prevState) => ({
      ...prevState,
      [uuid]: true
    }));
  };
  
  
  const handleCloseEx = (uuid) => {
    setOpenEx((prevState) => ({
      ...prevState,
      [uuid]: false
    }));
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState({});

const handleOpenMenu = (uuid) => {
    setOpenMenu((prevState) => ({
        ...prevState,
        [uuid]: true
    }));
};




const handleClick = (event, uuid) => {
    handleOpenMenu(uuid);
    setAnchorEl(event.currentTarget);
};


const handleClose = () => {
    setAnchorEl(null);

    setOpenMenu({});
};

    const [imageSrc, setImageSrc] = React.useState('');
  const [user, setUser] = React.useState('');
  const [formData, setFormData] = React.useState({
    projectUuid: '',
    title: '',
    tags: [],
    description: '',
    link: '',
    image: ''
  });


 
  React.useEffect(() => {
    if (user) {
      setFormData(prevFormData => ({
        ...prevFormData,
        userUuid: user.id,

      }));
    }
  }, [user]);
  

  const [openModal, setOpenModal] = React.useState({});


const handleOpenM = (uuid) => {
  setOpenModal((prevState) => ({
    ...prevState,
    [uuid]: true
  }));
};


const handleCloseM = (uuid) => {
  setOpenModal((prevState) => ({
    ...prevState,
    [uuid]: false
  }));
};



  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  const [userV, setUserV] = React.useState([]);
  const [userOn, setUserOn] = React.useState();
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUserOn(JSON.parse(storedUser));
        } else {
          const response = await api.get("/user");
          setUserOn(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Erro ao chamar a API:", error);
      }
    };

    fetchUser();
    return () => {
      };
}, []);
  React.useEffect(() => { 
    if (!userOn || !userOn.id) return;
    const fetchProjects = async () => {
      try {
        const response = await api.get("/project");
        const userProjects = response.data.filter(project => project.owner.id === userOn.id);
        setUserV(userProjects);
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error);
      }
    };
  
    fetchProjects();
    return () => {
    };
    
  }, [userOn]);

  
  function formatMonthYear(dateString) {
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = date.getFullYear().toString().slice(-2);

    return `${month}/${year}`;
}

async function handleDelete(id) {
    try {
      const response = await api.delete(`/project/${id}`)
      console.log(response);
      console.log("Excluido com sucesso", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Erro ao excluir:", error.response.data);
      }
    }
  };
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

async function handleSubmitEdit(e,id){
    e.preventDefault();
 

    try {
        const response = await api.put(`/project/${id}`, formData);
        console.log('Projeto editado com sucesso:', response.data);
        
        handleCloseEdit(id);
        handleOpen(id);
        
    } catch (error) {
        console.error('Erro ao editar projeto:', error);
    }
};
const reload = ()=> {
    window.location.reload();
}

  return (
    <div className={styles.all}>
         {userV.map((dados) => (
            <div className={styles.button}  key={dados.uuid} >
                    

                    <Card className={styles.cart}>
                    <CardActionArea  >
                        <CardContent>
                            <div className={styles.card}>
                                <img className={styles.img} src={dados.image}></img> 
                            </div>
                            <div div className={styles.perfilWrapper}>
                                <div className={styles.finbar}>
                                <div className={styles.perfil}>
                                    <Avatar className={styles.perImg}/>
                                    <p>{dados.owner.name} {dados.owner.lastName}</p>
                                    <FiberManualRecordIcon className={styles.ponto}/>
                                    <p>{formatMonthYear(dados.publishDate)}</p>
                                </div>
                                <div className={styles.tags}>
                                {dados.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                                </div>
                            </div>
                            </div>
                            
                        </CardContent>
                    </CardActionArea>
                    </Card>

                

                <div className={styles.func}>
                <Button

                    id="basic-button"
                    onClick={(event) => handleClick(event, dados.uuid)}
                    aria-controls={openMenu[dados.uuid] ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                >
                   <CreateIcon className={styles.pen}/>
                </Button>
                <Menu
                    className={styles.menu}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu[dados.uuid] || false}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <li onClick={() => { handleClose(dados.uuid); handleOpenEdit(dados.uuid);}}>Editar</li>
                    <li onClick={() => { handleClose(dados.uuid); handleOpenEx(dados.uuid);}}>Excluir</li>
                    <li onClick={() => { handleClose(dados.uuid); handleOpenM(dados.uuid);}}>Visualizar</li>
                </Menu>
                </div>

                <Modal
                
                    open={openModal[dados.uuid]}
                    onClose={() => handleCloseM(dados.uuid)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div  className={styles.divV}> 
                        <div className={styles.closeV}>
                            <button onClick={() => handleCloseM(dados.uuid)}><CloseIcon/></button>
                        </div>
                        <div className={styles.infoV}>
                            <div className={styles.perfilV}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <p>{dados.owner.name} {dados.owner.lastName}</p>
                                    <p>{formatMonthYear(dados.publishDate)}</p>
                                </div>
                            </div>
                            <div className={styles.titleV}>
                                <p>{dados.title}</p>      
                            </div>
                            <div className={styles.tagsV}>
                                {dados.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                            </div>
                        </div>
                        <div className={styles.midleV} >
                          
                            <img className={styles.imgV} src={dados.image}/>
                            <div className={styles.respV}>
                                <div className={styles.perfilV}>
                                    <div>
                                        <Avatar className={styles.avatarV} />
                                    </div>
                                    <div className={styles.textV}>
                                        <p>{dados.owner.name} {dados.owner.lastName}</p>
                                        <FiberManualRecordIcon className={styles.pontoV}/>
                                        <p>{formatMonthYear(dados.publishDate)}</p>
                                    </div>
                                    
                                </div>
                                <div className={styles.tagsV}>
                                        {dados.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                    </div>
                            </div>  

                        </div>
                        <div className={styles.finalV}>
                            <div className={styles.descrV}>
                                <p>  {dados.description}</p>
                            </div>
                            <div className={styles.linkV}>
                                <p>Download</p>
                                <a href={dados.link}>{dados.link}</a>
                            </div>
                        </div>
                    </div>
                    
                </Modal>


                

                <Modal
                        open={openEdit[dados.uuid]}
                        onClose={() => handleCloseEdit(dados.uuid)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <form className={styles.divE} onSubmit={(e) => handleSubmitEdit(e, dados.uuid)} >
                        <div className={styles.titleE}>
                            <p>Editar projeto</p>
                        </div>
                        <div className={styles.midleE}>
                            <label className={`${styles.textImgE} ${imageSrc && styles.whiteBackground}`} tabIndex="0">
                            <input
                                id='addImg'
                                type="file"
                                className={styles.imgE}
                                onChange={(e) => {
                                handleImageChange(e);
                                handleChange(e, 'image'); 
                                }}
                            />
                            <div id="imgText">
                                {imageSrc ? (
                                <img src={imageSrc} alt="Selected" className={styles.selectedImageE} />
                                ) : (
                                <span className={styles.textoInputE}>
                                    <span>Selecione uma imagem</span>
                                    <span className="icon">Ícone Aqui</span>
                                </span>
                                )}
                            </div>
                            </label>
                            <div className={styles.formE}>
                            <InputNormal children={"Título"} name='title' value={formData.title} funcButton={e => handleChange(e, "title")} />
                            <InputNormal name='tags' children={"Tags"} value={formData.tags} funcButton={e => handleChange(e, "tags")} />
                            <InputNormal children={"Link"} name='link' value={formData.link} funcButton={e => handleChange(e, "link")} />
                            <TextInput name='description' value={formData.description} funcButton={e => handleChange(e, "description")} />
                            </div>
                        </div>
                        <div className={styles.finalE}>
                            <div>
                            </div>
                            <div className={styles.buttonsE}>
                            <AddButton type="submit" children={'ENVIAR'}  />
                            <DisButton children={'CANCELAR'} handleClose={() => handleCloseEdit(dados.uuid)} />
                            </div>
                        </div>
                        </form>
                    </Modal>
                    <Modal
                        open={open[dados.uuid]}
                        onClose={()=> handleCloseT(dados.uuid)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <div className={styles.div3}>
                        <p>Projeto adicionado com sucesso!</p>
                        <CheckCircleIcon className={styles.su}/>
                        <Button className={styles.buttonAdd}
                         onClick={()=> {handleCloseT(dados.uuid);reload()}} 
                         variant="contained">VOLTAR PARA PROJETOS</Button>
                    </div>
                        
                    </Modal>

                    <Modal
                        open={openEx[dados.uuid]}
                        onClose={() => handleCloseEx(dados.uuid)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className={styles.divEx}>
                        <div className={styles.titleEx}>
                            <p>Deseja Excluir?</p>
                        </div>
                        <div className={styles.midleEx}>
                            <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
                            
                        </div>
                        <div className={styles.finalEx}>
                            <DeButton type="submit" children={'EXCLUIR'} 
                            handleDele={() => handleDelete(dados.uuid)} 
                            handleClose={() => handleCloseEx(dados.uuid)}/>
                            <DisButton children={'CANCELAR'} 
                            handleClose={() => handleCloseEx(dados.uuid)} />
                        </div>
                        </div>
                    </Modal>

                    </div>
       
                   

 ))}

    </div>
    
   
  );
}
