import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <Logo />
        <UserMenu />
      </header>
    </Container>
  );
};

export default Header;
