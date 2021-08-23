import UserMenu from './UserMenu';
import LogoWallet from './LogoWallet';

import './AppBar.css';

export default function AppBar() {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated || (
                <header className="header">
                    <LogoWallet />
                    <UserMenu />
                </header>
            )}
        </>
    )
    
}