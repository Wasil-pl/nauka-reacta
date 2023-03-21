import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

  /* onSubmit to tylko skrót od nasłuchwiacza na event Submit,
   a funkcja strzałkowa to tutaj tylko prostsza alternatywa od klasycznej funkcji.
   to po prostu prosta funkcja 

      elem.eventListener('Submit',function(e) {
        setValue(e.target.value);
      });
  */

const ColumnForm = () => {

  /* 6 funkcja useDispatch tp pośrednik, odpowiada za uruchomienie funkcji reducer i to w taki sposób,
  by przekazać jej aktualny stan i nasz obiekt akcji. Dodatkowo dba o to by to co zwróci,
  przypisać jako nowy stan */
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {             /*  3  */
    e.preventDefault();
    dispatch(addColumn({ title, icon }));       /*  4 uruchom funkcję useDispatch której przekazujemy odpowiednie argumenty. W tym wypadku ma uruchomić akcję addColumn, przy czym nowa kolumna powinna być obiektem z właściwością title o wartości stałej title i icon o wartości stałej icon */
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