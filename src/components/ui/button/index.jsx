import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';


//Para ser chamado no login e cadastro
export function UsButton({children}){
    return(      
       
        <Button className={styles.button} variant="contained">{children}</Button>

    )
}
