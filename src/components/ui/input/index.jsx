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
export function InputNameAndLastName({name,lastName}){
    return(      
            <div  className={styles.divDuo}>
            <TextField 
                className={styles.inputDuo}
                required
                id="outlined-required"
                label={name}
            />
            <TextField
                className={styles.inputDuo}
                required
                id="outlined-required"
                label={lastName}
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
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={funcButton}
            />
            </div>

    )
}
