/* import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'; */
/* import { getUserName, logout } from '../../redux/auth'; */

import './AppBar.css'


export default function UserMenu() {

  /* const dispatch = useDispatch(); */
    /* const name = useSelector(getUserName); */
    const name = "Имя";

    /* const onLogout = useCallback(() => dispatch(logout()), [dispatch]); */
    const onLogout = console.log("Выйти");

  return (
    <div className="UserMenu">  
        <span>{name}</span>
        <button type="button" onClick={onLogout} className="btn">Выйти</button>
    </div>   
  )
}