/* import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'; */
/* import { getUserName, logout } from '../../redux/auth'; */

import styles from './Header.module.css';

import logout from '../../image/header/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors, userOperations } from '../../redux/user';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUserName);
  const handleLogout = () => {
    console.log('Выйти');
    dispatch(userOperations.logout());
  };
  /* let width = window.innerWidth; */

  return (
    <div className={styles.UserMenu}>
      <span className={styles.LogoName}>{name}</span>
      <button type="button" onClick={handleLogout} className="btn">
        <img src={logout} alt="logout" width="18" height="18" />
        {/* { width > 766 && (<span className={styles.isHidden}>Выйти</span>)} */}
        <span className={styles.isHidden}>Выйти</span>
      </button>
    </div>
  );
}
