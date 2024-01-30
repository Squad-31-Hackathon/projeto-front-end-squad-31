import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';


//Para ser chamado no login e cadastro
export function UsButton({children}){
    return(  
        <div className={styles.div}>
            <Button type="submit" className={styles.button} variant="contained">{children}</Button>
        </div>    

    )
}
export function AddButton({children}){
    return(  
        <div className={styles.divAdd}>
            <Button className={styles.buttonAdd} variant="contained">{children}</Button>
        </div>    

    )
}
export function DisButton({children, handleClose}){
 
    const handleClick = () => {
        handleClose(); 
    }
    return(  
        <div className={styles.divDis}>
            <button className={styles.buttonDis} variant="contained" onClick={handleClick}>{children}</button>
        </div>    

    )
}
