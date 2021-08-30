import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Container className={styles.header}>
        <Logo />
        <UserMenu />
      </Container>
    </header>
  );
};

export default Header;
