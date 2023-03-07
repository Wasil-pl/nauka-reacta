import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const CardForm = props => {
  
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div>
        <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;