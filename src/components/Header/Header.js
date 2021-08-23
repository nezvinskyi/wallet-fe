import UserMenu from './UserMenu';
import LogoHeader from './LogoHeader';

import styles from './Header.module.css';

export default function Header() {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated && (
        <header className={styles.header}>
          <LogoHeader />
          <UserMenu />
        </header>
      )}
    </>
  );
}
