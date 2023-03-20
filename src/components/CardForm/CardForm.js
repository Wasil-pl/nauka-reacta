import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {
  
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { title, columnId: columnId } });
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