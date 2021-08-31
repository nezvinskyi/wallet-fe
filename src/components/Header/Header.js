import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';
import { Container } from 'react-bootstrap';

const Header = ({ viewChanger }) => {
  return (
    <header className={styles.headerContainer}>
      <Container className={styles.header}>
        <Logo viewChanger={viewChanger} />
        <UserMenu />
      </Container>
    </header>
  );
};

export default Header;
