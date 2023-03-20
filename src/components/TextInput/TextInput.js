import styles from './TextInput.module.scss';

/* Od teraz nasza treść placeholderu nie jest już sztywna. Zależy bowiem od wartości parametru placeholder. 
Nasz komponent renderuje jako placeholder po prostu to, co otrzyma w argumencie. 
Dzięki temu będziemy z powodzeniem mogli wykorzystywać go w innych miejscach i za każdym razem ustalać dowolny placeholder */ 

const TextInput = ({ value, onChange, placeholder }) => {
  return <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type="text" />;
};

export default TextInput;