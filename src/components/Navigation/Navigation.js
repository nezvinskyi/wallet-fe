/* import routes from '../../routes'; */
import styles from './Navigation.module.css';
import home from '../../assets/images/navigation/home.svg';
import diagram from '../../assets/images/navigation/diagram.svg';
import currency from '../../assets/images/navigation/currency.svg';

const Navigation = ({ viewChanger, mainView }) => {
  return (
    <nav>
      <ul className={styles.Navigation}>
        <li className={styles.NavLink}>
          <button onClick={() => viewChanger('main')} /* className={styles.NavBtn} */>
            <div>
              <div className={styles.NavLinkImg}>
                <img
                  src={home}
                  alt="home"
                  width="38"
                  height="38"
                  className={mainView === 'main' ? styles.navImgActive : null}
                />
              </div>
              <div className={styles.NavLinkNone}>
                <span
                  className={mainView === 'main' ? styles.NavLinkNameActive : styles.NavLinkName}
                >
                  Home
                </span>
              </div>
            </div>
          </button>
        </li>

        <li className={styles.NavLink}>
          <button onClick={() => viewChanger('stats')} /* className={styles.NavBtn} */>
            <div>
              <div className={styles.NavLinkImg}>
                <img
                  src={diagram}
                  alt="diagram"
                  width="38"
                  height="38"
                  className={mainView === 'stats' ? styles.navImgActive : null}
                />
              </div>

              <div className={styles.NavLinkNone}>
                <span
                  className={mainView === 'stats' ? styles.NavLinkNameActive : styles.NavLinkName}
                >
                  Statistics
                </span>
              </div>
            </div>
          </button>
        </li>

        <li className={styles.NavLink}>
          <button
            onClick={() => viewChanger('currency')}
            className={mainView !== 'currency' ? styles.NavItemCurrency : null}
          >
            <div className={styles.NavLinkImg}>
              <img
                className={mainView === 'currency' ? styles.navImgActive : null}
                src={currency}
                alt="currency"
                width="38"
                height="38"
              />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
