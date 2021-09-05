import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';
// import { Container } from 'react-bootstrap';
import { HeaderContainer } from '../Container'

const Header = ({ viewChanger }) => {
  return (
    <HeaderContainer className={styles.headerContainer}>
      <header className={styles.header}>
        <Logo viewChanger={viewChanger} />
        <UserMenu />
      </header>
    </HeaderContainer>
  );
};

export default Header;
