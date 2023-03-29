import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/searchStringRedux';
import Card from '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import ColumnContainer from '../ColumnContainer/ColumnContainer';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFavoriteCards(state));

  return (
    <div className={styles.Favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.wrapper}>
        <ColumnContainer>
          <CardContainer>
            {favoriteCards.map(favoriteCard =>
            <Card
              key={favoriteCard.id}
              title={favoriteCard.title}
              id={favoriteCard.id}
              isFavorite={favoriteCard.isFavorite}
              />)}
          </CardContainer>
        </ColumnContainer>
      </div>
    </div>
  );
};

  export default Favorite;