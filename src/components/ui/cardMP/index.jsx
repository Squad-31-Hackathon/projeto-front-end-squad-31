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
import CloseIcon from '@mui/icons-material/Close';
import { AddButton, DisButton } from '../button';
import { InputNormal, TextInput } from '../input';

export default function CardMP() {

    const [openM, setOpenM] = React.useState(false);
    const handleOpenM = () => {
        setOpenM(true);
  };
    const handleCloseM = () => {
        setOpenM(false);
  };
  const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => {
        setOpenEdit(true);
  };
    const handleCloseEdit = () => {
        setOpenEdit(false);
  };
  const [openEx, setOpenEx] = React.useState(false);
  const handleOpenEx = () => {
      setOpenEx(true);
};
  const handleCloseEx = () => {
    setOpenEx(false);
};

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
            <div className={styles.button} >

                    <Card className={styles.cart}>
                    <CardActionArea  >
                        <CardContent>
                            <div className={styles.card}>
                                <img className={styles.img} src="../../../../public/semImagem.png"></img> 
                            </div>
                            <div className={styles.finbar}>
                                <div className={styles.perfil}>
                                    <Avatar className={styles.perImg}/>
                                    <p>Nome Sobrenome</p>
                                    <FiberManualRecordIcon className={styles.ponto}/>
                                    <p>02/24</p>
                                </div>
                                <div className={styles.tags}>
                                    <span>111</span>
                                    <span>211</span>
                                </div>
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
                    <li  onClick={() => { handleClose(); handleOpenEdit();}}>Editar</li>
                    <li onClick={() => { handleClose(); handleOpenEx();}}>Excluir</li>
                    <li onClick={() => { handleClose(); handleOpenM();}}>Visualizar</li>
                </Menu>

                <Modal
                    open={openM}
                    onClose={handleCloseM}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div  className={styles.divV}> 
                        <div className={styles.closeV}>
                            <button onClick={handleCloseM}><CloseIcon/></button>
                        </div>
                        <div className={styles.infoV}>
                            <div className={styles.perfilV}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <p>Nome Sobrenome</p>
                                    <p>02/24</p>
                                </div>
                            </div>
                            <div className={styles.titleV}>
                                <p>Titulo do Projeto</p>      
                            </div>
                            <div className={styles.tagsV}>
                                <span>Tag1</span>
                                <span>Tag2</span>
                            </div>
                        </div>
                        <div className={styles.midleV} >
                          
                            <img className={styles.imgV} src='../../../../public/semImagem.png'></img>
                            <div className={styles.respV}>
                                <div className={styles.perfilV}>
                                    <div>
                                        <Avatar className={styles.avatarV} />
                                    </div>
                                    <div className={styles.textV}>
                                        <p>Nome Sobrenome</p>
                                        <FiberManualRecordIcon className={styles.pontoV}/>
                                        <p>02/24</p>
                                    </div>
                                    
                                </div>
                                <div className={styles.tagsV}>
                                        <span>Tag1</span>
                                        <span>Tag2</span>
                                    </div>
                            </div>  

                        </div>
                        <div className={styles.finalV}>
                            <div className={styles.descrV}>
                                <p>  Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito.
                                     É um modelo de IA.
                                     Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.</p>
                            </div>
                            <div className={styles.linkV}>
                                <p>Download</p>
                                <a href="#">https://gumroad.com/products/wxCSL</a>
                            </div>
                        </div>
                    </div>
                    
                </Modal>


                

                <Modal
                        open={openEdit}
                        onClose={handleCloseEdit}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <form className={styles.divE} onSubmit={handleSubmit}>
                        <div className={styles.titleE}>
                            <p>Adicionar projeto</p>
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
                            <p>Visualizar publicação</p>
                            </div>
                            <div className={styles.buttonsE}>
                            <AddButton type="submit" children={'ENVIAR'} />
                            <DisButton children={'CANCELAR'} handleClose={handleCloseEdit} />
                            </div>
                        </div>
                        </form>
                    </Modal>

                    <Modal
                        open={openEx}
                        onClose={handleCloseEx}
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
                            <AddButton type="submit" children={'EXCLUIR'} />
                            <DisButton children={'CANCELAR'} handleClose={handleCloseEx} />
                        </div>
                        </div>
                    </Modal>

                    </div>
                

                
        
            </div>
  );
}
