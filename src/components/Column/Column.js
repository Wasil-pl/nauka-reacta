import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import ColumnContainer from '../ColumnContainer/ColumnContainer';
import CardContainer from '../CardContainer/CardContainer';

const Column = ({ id, icon, title }) => {
 
  const cards = useSelector(state => getFilteredCards(state, id));

  return (
    <ColumnContainer>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + icon} />{title}</h2>
      <CardContainer>
        {cards.map(card => 
        <Card
          key={card.id}
          title={card.title}
          id={card.id}
          isFavorite={card.isFavorite}
          />)}
      </CardContainer>
      <CardForm columnId={id} />
    </ColumnContainer>
  );
};
export default Column;