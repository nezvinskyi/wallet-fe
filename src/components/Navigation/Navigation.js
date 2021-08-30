import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';
import home from '../../images/navigation/home.svg';
import diagram from '../../images/navigation/diagram.svg';
import currency from '../../images/navigation/currency.svg';

const Navigation = ({ viewChanger, mainView }) => {
  return (
    <ul className={styles.Navigation}>
      <li>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger(true)}
        >
          <div>
            {/* <div className={styles.NavItemHome}></div> */}
            <img
              src={home}
              alt="home"
              width="44"
              height="44"
              className={mainView && styles.navImgActive}
            />

            <span className={mainView ? styles.NavLinkNameActive : styles.NavLinkName}>
              Главная
            </span>
          </div>
        </NavLink>
      </li>

      <li className={styles.NavigationLi}>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger(false)}
        >
          <div>
            <img
              src={diagram}
              alt="diagram"
              width="44"
              height="44"
              className={!mainView && styles.navImgActive}
            />

            <span className={!mainView ? styles.NavLinkNameActive : styles.NavLinkName}>
              Статистика
            </span>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={routes.currency}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          <div>
            <img className={styles.isHidden} src={currency} alt="currency" width="44" height="44" />
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
