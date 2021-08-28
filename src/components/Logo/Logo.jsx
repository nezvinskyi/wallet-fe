import logo from '../../assets/images/header/logo.svg';
import styles from './Logo.module.css';

export default function LogoWallet() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" width="30" height="30" />
      <span className={styles.logoText}>Wallet</span>
    </div>
  );
}
