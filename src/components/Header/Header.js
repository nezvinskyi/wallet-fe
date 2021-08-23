import UserMenu from './UserMenu';
import LogoHeader from './LogoHeader';

import styles from './Header.module.css';

export default function AppBar() {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated || (
                <header className={styles.header}>
                    <LogoHeader />
                    <UserMenu />
                </header>
            )}
        </>
    )
    
}