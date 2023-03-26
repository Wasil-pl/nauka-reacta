import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { useParams } from 'react-router-dom';

const List = () => {

  /* useSelector oczekuje na jeden argument. Argumentem tym powinna być dowolna funkcja callback.
  Co taka funkcja callback robi? Ma coś zwrócić. Ale co dokładnie? To już zależny od nas. Może state.columns?
  A może state.columns[0], czyli tylko pierwszą kolumnę? Tak naprawdę mamy tu już pełną dowolność.
  W funkcji tej otrzymujemy dostęp do całego stanu i decydujemy co z tego stanu chcemy zwrócić.
  To co tam zwrócimy jest potem zwracane również przez samą useSelector.
  Dzięki temu możemy referencję do takich danych przypisać np. do stałej, tak jak to zrobiliśmy u nas. */

  const { listId } = useParams();  // useParams powie nam, jakie są wartości parametrów linku np list/2, to useParams zwróci nam obiekt { listId: 2 }
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));  // argument 1 ospowiada za id w lists. Takie zostanie wyświetlone na stronie

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm listId={ listId } />
    </div>
  );
};

export default List;