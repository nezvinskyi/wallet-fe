import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { LoginPage, RegistrationPage, DashboardPage } from './pages/';

import { PublicRoute, PrivatRoute, LoaderSpinner, LogoutModal } from './components';
import { useDispatch } from 'react-redux';
import { userOperations } from './redux/user';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { sessionSelectors } from './redux/session';
import { useSelector } from 'react-redux';

import { globalSelectors } from './redux/global';

function App() {
  const error = useSelector(sessionSelectors.getError);

  useEffect(() => {
    toast(error);
  }, [error]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);
  const logoutModalIsOpen = useSelector(globalSelectors.getIsLogoutModalOpen);
  const showLoader = useSelector(globalSelectors.getShowLoader);

  return (
    <>
      <Switch>
        <PublicRoute restricted redirectTo="/" path="/register" component={RegistrationPage} />
        <PublicRoute restricted redirectTo="/" path="/login" component={LoginPage} />
        <PrivatRoute path="/" exact component={DashboardPage} redirectTo="/login" />
      </Switch>
      {showLoader && <LoaderSpinner />}
      {logoutModalIsOpen && <LogoutModal />}
      <ToastContainer />
    </>
  );
}

export default App;
