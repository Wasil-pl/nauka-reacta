import Button from '../Button/Button';
import styles from './NoMatch.module.scss';

const NoMatch = () => {
  return (
    <div className={styles.NoMatch}>
      <h1>We lost this page</h1>
      <p>We searched high and low but couldn't find what you're looking for.</p>
      <p>Let's find better place for you to go</p>
      <Button><a href="/">Home</a></Button>
    </div>
  );
};

  export default NoMatch;