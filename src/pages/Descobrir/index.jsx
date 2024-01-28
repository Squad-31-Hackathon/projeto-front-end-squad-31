import { UsHeader } from '../../components/ui/header';
import { InputNormal } from '../../components/ui/input';
import styles from './styles.module.scss';



export function Descobrir() {

  return (
    <div>
    <div className={styles.header}>
      <UsHeader/>
    </div>
    <div className={styles.body}>
      <div className={styles.desc}>
          <div>
            <p>Junte-se à comunidade de inovação,
               inspiração e descobertas,
               transformando experiências em conexões inesquecíveis</p>
          </div>
      </div>
      <div className={styles.midle}>
       <InputNormal children={"Buscar Tags"}/>
      
      </div>
      <div className={styles.final}>
        <button></button>
      </div>
    </div>
    
  </div>
  )
}