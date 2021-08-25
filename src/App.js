import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, RegistrationPage, DashboardPage, TempView, StatisticPage } from './pages/';

import { ContainerAppWrapper, Navigation, Currency, PublicRoute, PrivatRoute } from './components';

function App() {
  return (
    <ContainerAppWrapper>
      <div className="App">
        <Switch>
          <PublicRoute
            restricted
            redirectTo="/home"
            path="/register"
            component={RegistrationPage}
          />
          <PublicRoute restricted redirectTo="/home" path="/login" component={LoginPage} />
          <Route path={'/'} exact component={TempView} />
          <PrivatRoute path="/home" component={DashboardPage} redirectTo="/login" />
          <Route path={'/statistic'} exact component={StatisticPage} />
          <Route path={'/currency'} exact component={Currency} />;
          <Route path={'/navigation'} exact component={Navigation} />;
        </Switch>
      </div>
    </ContainerAppWrapper>
  );
}

export default App;
