import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  /* props.id to parametr id z identyfikatorem kolumny. Staramy się wziąć więc ze state.cards (wszystkich kart)
  tylko te karty, których właściwość columnId jest zgodna właśnie z daną kolumną */
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>

      <CardForm columnId={props.id} />

    </article>
  );
};
export default Column;