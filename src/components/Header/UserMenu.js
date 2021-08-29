/* import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'; */
/* import { getUserName, logout } from '../../redux/auth'; */

import styles from './Header.module.css';

import logout from '../../image/header/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { userSelectors, userOperations } from '../../redux/user';
import { userSelectors } from '../../redux/user';
import { globalOperations, globalSelectors } from '../../redux/global';
import { LogoutModal } from '../../components'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUserName);
  const logoutModalIsOpen = useSelector(globalSelectors.getIsLogoutModalOpen)
  // const handleLogout = () => {
  //   console.log('Выйти');
  //   dispatch(userOperations.logout());
  // };

  const handleLogout = () => {
    console.log('Выйти');
    dispatch(globalOperations.openLogoutModal());
  };

  return (
    <div className={styles.UserMenu}>
      <span>{name}</span>
      <button type="button" onClick={handleLogout} className="btn">
        <img src={logout} alt="logout" width="30" height="30" />
        {/* Выйти */}
      </button>
      {logoutModalIsOpen&&<LogoutModal/>}
    </div>
  );
}
