import Logo from '../Logo';

import styles from './Header.module.css';


export default function LogoWallet() {


  return (
    <div className={styles.LogoWallet}>        
      <Logo />
      <span>Wallet</span>
    </div>   
  )
}