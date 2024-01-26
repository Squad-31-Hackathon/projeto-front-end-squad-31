import * as React from 'react';

import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';



export function InputEmail({children}){
    return(      
       
        
            <div className={styles.div}>
            <TextField
                className={styles.input}
                id="outlined-required"
                label={children}
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
export function InputPassword(){
    return(      
       
     
        <div className={styles.div}>
        <TextField
            className={styles.input}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            </div>

    )
}