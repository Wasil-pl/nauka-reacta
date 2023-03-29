import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';


const Card = ({ title, id, isFavorite }) => {

  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id)); 
  };

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(id)); 
  };

  return (
    <li className={styles.card}>{title}
      <ul>
        <button className={clsx(styles.button, isFavorite && styles.isActive)} onClick={handleFavorite}>
          <i className="fa fa-star-o"/>
        </button>
        <button className={styles.button} onClick={deleteCard}>
          <i className="fa fa-trash"/>
        </button>
      </ul>
    </li>
  );
};

export default Card;