import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav>
      <div className={styles.container}>
        <ul className={styles.icon}>
          <li><Link to="/" className="fa fa-tasks"></Link></li>
        </ul>
        <ul className={styles.naviLinks}>
          {/*  jeśli adres strony będzie równy właśnie wartości z parametru to (czyli tutaj /), to nasz link dostanie klasę linkActive */}
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favourites</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;