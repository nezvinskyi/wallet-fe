import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <UserMenu />
    </header>
  );
};

export default Header;
