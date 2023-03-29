import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/searchStringRedux';
import Card from '../Card/Card';
import CardWrapper from '../CardWrapper/CardWrapper';
import ColumnWrapper from '../ColumnWrapper/ColumnWrapper';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state));

  return (
    <div className={styles.Favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.wrapper}>
        <ColumnWrapper>
          <CardWrapper>
            {favoriteCards.map(favoriteCard =>
            <Card
              key={favoriteCard.id}
              title={favoriteCard.title}
              id={favoriteCard.id}
              isFavorite={favoriteCard.isFavorite}
              />)}
          </CardWrapper>
        </ColumnWrapper>
      </div>
    </div>
  );
};

  export default Favorite;