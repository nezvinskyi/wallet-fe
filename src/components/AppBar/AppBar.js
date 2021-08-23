import UserMenu from './UserMenu';
import LogoWallet from './LogoWallet';

import './AppBar.css';

const AppBar = () => {
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
  );
};

export default AppBar;
