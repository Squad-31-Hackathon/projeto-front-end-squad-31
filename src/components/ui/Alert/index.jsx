import * as React from 'react';
import Alert from '@mui/material/Alert';
import styles from './styles.module.scss';

export function MyAlert(){
    return(
        <div className={styles.div}> 
            <Alert  className={styles.alert} variant="filled" severity="success">
                <p >Cadastro feito com sucesso</p>
            </Alert>
       </div>
       
    )
}