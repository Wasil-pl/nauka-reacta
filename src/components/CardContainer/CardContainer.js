import styles from './CardContainer.module.scss';

const CardContainer = ({ children }) => {
  return (
    <ul className={styles.cards}>
      {children}
    </ul>
  );
};

export default CardContainer;