/* import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'; */
/* import { getUserName, logout } from '../../redux/auth'; */

import styles from './Header.module.css';

import logout from '../../image/header/logout.svg';


export default function UserMenu() {

  /* const dispatch = useDispatch(); */
    /* const name = useSelector(getUserName); */
    const name = "Имя";

    /* const onLogout = useCallback(() => dispatch(logout()), [dispatch]); */
    const onLogout = console.log("Выйти");

  return (
    <div className={styles.UserMenu}>  
      <span>{name}</span>
      <button type="button" onClick={onLogout} className="btn">
        <img src={logout} alt="logout" width="30" height="30" />
        {/* Выйти */}
      </button>
    </div>   
  )
}