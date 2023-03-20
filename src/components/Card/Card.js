import styles from './Card.module.scss';

const Card = ({ title }) => {
    return (
      <li className={styles.card}>{title}</li>
    );
};

export default Card;