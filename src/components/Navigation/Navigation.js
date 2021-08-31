import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';
import home from '../../assets/images/navigation/home.svg';
import diagram from '../../assets/images/navigation/diagram.svg';
import currency from '../../assets/images/navigation/currency.svg';

const Navigation = ({ viewChanger, mainView }) => {
  return (
    <ul className={styles.Navigation}>
      <li>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger('main')}
        >
          <div>
            {/* <div className={styles.NavItemHome}></div> */}
            <img
              src={home}
              alt="home"
              width="44"
              height="44"
              className={[mainView === 'main' && styles.navImgActive].join(' ')}
            />
            <div className={styles.NavLinkNone}>
              <span className={[mainView === 'main' ? styles.NavLinkNameActive : styles.NavLinkName].join(' ')}>
                Главная
              </span>
            </div>
          </div>
        </NavLink>
      </li>

      <li className={styles.NavigationLi}>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
          onClick={() => viewChanger('stats')}
        >
          <div>
            <img
              src={diagram}
              alt="diagram"
              width="44"
              height="44"
              className={[mainView === 'stats' && styles.navImgActive].join(' ')}
            />

            <div className={styles.NavLinkNone}>
              <span
                className={[mainView === 'stats' ? styles.NavLinkNameActive : styles.NavLinkName].join(' ')}
              >
                Статистика
              </span>
            </div>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to={routes.home}
          className={styles.NavLink}
          className={[styles.NavLink, styles.NavItemCurrency].join(' ')}
          onClick={() => viewChanger('currency')}
        >
          <div>
            <img
              className={[mainView === 'currency' && styles.navImgActive].join(' ')}
              src={currency}
              alt="currency"
              width="44"
              height="44"
            />
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
