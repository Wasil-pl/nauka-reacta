import styles from './TextInput.module.scss';

/* Od teraz nasza treść placeholderu nie jest już sztywna. Zależy bowiem od wartości parametru placeholder. 
Nasz komponent renderuje jako placeholder po prostu to, co otrzyma w argumencie. 
Dzięki temu będziemy z powodzeniem mogli wykorzystywać go w innych miejscach i za każdym razem ustalać dowolny placeholder */ 

const TextInput = props => {
  return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />;
};

export default TextInput;