import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/columnsRedux';
import CardWrapper from '../CardWrapper/CardWrapper';
import ColumnWrapper from '../ColumnWrapper/ColumnWrapper';


const Column = ({ id, icon, title }) => {
 
  const cards = useSelector(state => getFilteredCards(state, id));

  return (
    <ColumnWrapper>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + icon} />{title}</h2>
      <CardWrapper>
        {cards.map(card => 
        <Card
          key={card.id}
          title={card.title}
          id={card.id}
          isFavorite={card.isFavorite}
          />)}
      </CardWrapper>
      <CardForm columnId={id} />
    </ColumnWrapper>
  );
};
export default Column;