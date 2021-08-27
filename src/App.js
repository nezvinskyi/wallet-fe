import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, RegistrationPage, DashboardPage, TempView, StatisticPage } from './pages/';

import { ContainerAppWrapper, Navigation, Currency, PublicRoute, PrivatRoute } from './components';
import { useDispatch } from 'react-redux';
import { userOperations } from './redux/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <ContainerAppWrapper>
      <div className="App">
        <Switch>
          <PublicRoute restricted redirectTo="/" path="/register" component={RegistrationPage} />
          <PublicRoute restricted redirectTo="/" path="/login" component={LoginPage} />
          <Route path={'/home'} exact component={TempView} />
          <PrivatRoute path="/" exact component={DashboardPage} redirectTo="/login" />
          <Route path={'/statistic'} exact component={StatisticPage} />
          <Route path={'/currency'} exact component={Currency} />;
          <Route path={'/navigation'} exact component={Navigation} />;
          {/* <Route path={'/add-tr-form'} exact component={AddTransFormContainer} />; */}
        </Switch>
      </div>
    </ContainerAppWrapper>
  );
}

export default App;
