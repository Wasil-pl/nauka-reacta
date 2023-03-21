import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';

const List = () => {

  /* useSelector oczekuje na jeden argument. Argumentem tym powinna być dowolna funkcja callback.
  Co taka funkcja callback robi? Ma coś zwrócić. Ale co dokładnie? To już zależny od nas. Może state.columns?
  A może state.columns[0], czyli tylko pierwszą kolumnę? Tak naprawdę mamy tu już pełną dowolność.
  W funkcji tej otrzymujemy dostęp do całego stanu i decydujemy co z tego stanu chcemy zwrócić.
  To co tam zwrócimy jest potem zwracane również przez samą useSelector.
  Dzięki temu możemy referencję do takich danych przypisać np. do stałej, tak jak to zrobiliśmy u nas. */
  const columns = useSelector(getAllColumns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;