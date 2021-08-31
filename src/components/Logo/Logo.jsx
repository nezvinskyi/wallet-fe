import logo from '../../assets/images/header/logo.svg';
import styles from './Logo.module.css';

export default function LogoWallet({ viewChanger }) {
  const handleClick = () => {
    console.log('clicked on logo');
    viewChanger('main');
  };
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" width="30" height="30" />
      <span className={styles.logoText} onClick={handleClick}>
        Wallet
      </span>
    </div>
  );
}
