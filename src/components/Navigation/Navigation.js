import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = ({ viewChanger }) => {
  let width = window.innerWidth;
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
            <div className={styles.NavItemHome}></div>
            {width > 766 && (
              <span className={styles.NavLinkName}>Главная</span>
            )}
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
            <div className={styles.NavItemStatistic}></div>
            {width > 766 && (
              <span className={styles.NavLinkName}>Статистика</span>
            )}
            
          </div>
        </NavLink>
      </li>


      
      <li className={styles.isHidden}>
        <NavLink
          to={routes.currency}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
         >
          <div>
            <div className={styles.NavItemCurrency}></div>
          </div>
        </NavLink>
      </li>
        
         

    </ul>
  );
};

export default Navigation;