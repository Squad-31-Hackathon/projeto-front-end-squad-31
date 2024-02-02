import * as React from 'react';

import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';



export function InputEmail({children, funcButton}){
    return(      
       
        
            <div className={styles.div}>
            <TextField
                className={styles.input}
                id="outlined-required"
                label={children}
                onChange={funcButton}
            />
            </div>
  
    )
}
export function InputNameAndLastName({name,lastName,funcButton}){
    const handleNameChange = (event) => {
        funcButton(event, "name");
      };
    
      const handleLastNameChange = (event) => {
        funcButton(event, "lastName");
      };
    return(      
            <div  className={styles.divDuo}>
            <TextField 
                className={styles.inputDuo}
                id="outlined-required"
                label={name}
                onChange={handleNameChange}
            />
            <TextField
                className={styles.inputDuo}
                id="outlined-required"
                label={lastName}
                onChange={handleLastNameChange}
            />
            </div>

    )
}
export function InputPassword({funcButton, nameInput}){
    return(      
       
        <div className={styles.div}>
        <TextField
            className={styles.input}
                id="outlined-password-input"
                label="Password *"
                type="password"
                autoComplete="current-password"
                onChange={funcButton}
            />
            </div>

    )
}
export function InputNormal({children, funcButton}){
    return(      
       
        
            <div className={styles.divadd}>
            <TextField
                className={styles.input}
                id="outlined-required"
                label={children}
                onChange={funcButton}
            />
            </div>
  
    )
}
export function InputAdd({children}){
    return(      
       
        
            <div className={styles.divadd}>
            <TextField
                className={styles.input}
                id="outlined-required"
                label={children}
            />
            </div>
  
    )
}
export function TextInput({funcButton}){
    return(      
        
            <div className={styles.divadd}>
            <TextField
                className={styles.inputad}
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                onChange={funcButton}
        />
            </div>
  
    )
}