import logo from '../../image/header/logo.svg';
import styles from './Logo.module.css';
import React from 'react';
/* import {ReactComponent as ReactIcon} from '../../image/header/logo.svg'; */

export default function Logo() {

  return (
    <div className={styles.Logo}>
      {/* <div>
        <ReactIcon className="LogoSvg"/>
      </div> */}
      
      {/* <svg className="LogoSvg">
        <use xlinkHref="../../image/header/logo.svg" />
      </svg> */}
      <img src={logo} alt="logo" />
      <span>Wallet</span>
    </div>   
  )
}

