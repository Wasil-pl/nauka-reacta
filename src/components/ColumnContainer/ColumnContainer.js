import styles from './ColumnContainer.module.scss';

const ColumnContainer = ({ children }) => {
  return (
    <div className={styles.column}>
      {children}
    </div>
  );
};

export default ColumnContainer;