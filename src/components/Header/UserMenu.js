import styles from './Header.module.css';

// import logout from '../../image/header/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { userSelectors, userOperations } from '../../redux/user';
import { userSelectors } from '../../redux/user';
import { globalOperations, globalSelectors } from '../../redux/global';
import { LogoutModal } from '../../components';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUserName);
  const logoutModalIsOpen = useSelector(globalSelectors.getIsLogoutModalOpen);
  // const handleLogout = () => {
  //   console.log('Выйти');
  //   dispatch(userOperations.logout());
  // };

  const handleLogout = () => {
    // dispatch(userOperations.logout());
    dispatch(globalOperations.openLogoutModal());
  };

  return (
    <div className={styles.userMenu}>
      <div className={styles.userName}>{name}</div>
      <div className={styles.divider}></div>
      <div onClick={handleLogout} className={styles.exit}>
        <div className={styles.logoutItem}></div>
        <div className={styles.logoutText}>Выйти</div>
      </div>
      {logoutModalIsOpen && <LogoutModal />}
    </div>
  );
}
