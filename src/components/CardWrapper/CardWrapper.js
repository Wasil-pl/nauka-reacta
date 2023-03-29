import styles from './CardWrapper.module.scss';

const CardWrapper = ({ children }) => {
  return (
    <ul className={styles.cards}>
      {children}
    </ul>
  );
};

export default CardWrapper;