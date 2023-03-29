import styles from './ColumnWrapper.module.scss';

const ColumnWrapper = ({ children }) => {
  return (
    <div className={styles.column}>
      {children}
    </div>
  );
};

export default ColumnWrapper;