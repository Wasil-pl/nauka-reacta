import styles from './NavBar.module.scss';

const NavBar = () => {

  return (
    <nav>
      <div className={styles.container}>
        <ul className={styles.icon}>
          <li><a href="/" className="fa fa-tasks"></a></li>
        </ul>
        <ul className={styles.naviLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favourites</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;