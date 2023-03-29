import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';


const Card = ({ title, id, isFavorite }) => {

  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id)); 
  };

  return (
    <li className={styles.card}>{title}
      <button className={clsx(styles.button, isFavorite && styles.isActive)} onClick={handleFavorite}>
        <i className={'fa fa-star-o'}/>
      </button>
    </li>
  );
};

export default Card;