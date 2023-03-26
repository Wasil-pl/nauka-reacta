import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { Navigate, useParams } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();  // useParams powie nam, jakie są wartości parametrów linku np list/2, to useParams zwróci nam obiekt { listId: 2 }
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));  // argument 1 ospowiada za id w lists. Takie zostanie wyświetlone na stronie

  if(!listData) return <Navigate to="/" /> // Sprawdzamy, czy listData istnieje, czy nie. Jeśli nie to kieruje nas do komponentu Navigate który znowu kieruje nas po prostu do głównej strony
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
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