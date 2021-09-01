import UserMenu from './UserMenu';
import Logo from '../Logo';

import styles from './Header.module.css';
// import { Container } from 'react-bootstrap';
import { HeaderContainer } from '../Container'

const Header = ({ viewChanger }) => {
  return (
    <header className={styles.headerContainer}>
      <HeaderContainer className={styles.header}>
        <Logo viewChanger={viewChanger} />
        <UserMenu />
      </HeaderContainer>
    </header>
  );
};

export default Header;
