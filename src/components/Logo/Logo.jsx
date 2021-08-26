import logo from '../../image/header/logo.svg';
import styles from './Logo.module.css';

export default function LogoWallet() {


  return (
    <div className={styles.Logo}>        
      <img src={logo} alt="logo" width="30" height="30" />
      <span>Wallet</span>
    </div>   
  )
}