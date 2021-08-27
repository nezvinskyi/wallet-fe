import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';
import home from '../../image/navigation/home.svg';
import diagram from '../../image/navigation/diagram.svg';
import currency from '../../image/navigation/currency.svg';

const Navigation = ({ viewChanger }) => {
  return (
    <ul className={styles.Navigation}>
      <li>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger(true)}
        >
          <span>
            <img src={home} alt="home" width="44" height="44" />
            {/* Главная */}
          </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={routes.home}
          className={styles.NavigationLi}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger(false)}
        >
          <span>
            <img src={diagram} alt="diagram" width="44" height="44" />
            {/* Статистика */}
          </span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={routes.currency}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          <span>
            <img src={currency} alt="currency" width="44" height="44" />
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
