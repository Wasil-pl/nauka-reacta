import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

  /* onSubmit to tylko skrót od nasłuchwiacza na event Submit,
   a funkcja strzałkowa to tutaj tylko prostsza alternatywa od klasycznej funkcji.
   to po prostu prosta funkcja 

      elem.eventListener('Submit',function(e) {
        setValue(e.target.value);
      });
  */

const ColumnForm = props => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {             /*  3  */
    e.preventDefault();
    props.action({ title: title, icon: icon });       /*  4  uruchamia funkcję otrzymaną pod parametrem action i gdy ją wywołuje, przekazuje jej od razu informacje o tym, co było w naszym inpucie. parametr action to referencja do funkcji addColumn w <List>, to właśnie ta funkcja jest w takiej sytuacji uruchomiona. Odbiera ona jako argument obiekt z informacją o title i dodaje do columns nowy obiekt właśnie o takiej nazwie */
    setTitle('');                                     /*  5  zeruje input */
    setIcon('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <span>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>    {/*  1  Użytkownik wpisuje coś do inputu. Wartość ta jest zapisywana do stanu value */}
      <div>
        <span>Icon:</span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      </div>
      <Button>Add column</Button>         {/*  2  Następnie użytkownik klika button. To powoduje wyemitowanie na formularzu eventu submit. Z racji, że na tym elemencie mamy nasłuchiwacz na taki event, to od razu zostaje uruchomiona funkcja callback – nasza funkcja handleSubmit */}
    </form>
  );
};

export default ColumnForm;