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

export function MyErrorAlert(){
    return(
        <div className={styles.div}> 
            <Alert  className={styles.alert} variant="filled" severity="error">
                <p >Não foi possível criar seu cadastro já que algum campo de preenchimento está vazio</p>
            </Alert>
       </div>
       
    )
}

export function MyEmailErrorAlert(){
    return(
        <div className={styles.div}> 
            <Alert  className={styles.alert} variant="filled" severity="error">
                <p >Já existe uma conta criada com esse email</p>
            </Alert>
       </div>
       
    )
}