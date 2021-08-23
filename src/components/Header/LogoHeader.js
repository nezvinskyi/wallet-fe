import logoWallet from '../../image/header/logo.svg';

import styles from './Header.module.css';


export default function LogoWallet() {


  return (
    <div className={styles.LogoWallet}>        
      <img src={logoWallet} alt="logo" width="30" height="30" />
      <span>Wallet</span>
    </div>   
  )
}