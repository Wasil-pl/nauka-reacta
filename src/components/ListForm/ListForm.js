import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = ({ listId }) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <span>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <span>Descryption:</span><TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;