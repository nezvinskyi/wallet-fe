import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, RegistrationPage, DashboardPage, TempView, StatisticPage } from './pages/';

import { ContainerAppWrapper, Navigation, Currency, AddTransFormContainer } from './components';

function App() {
  return (
    <ContainerAppWrapper>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={TempView} />
          <Route path={'/home'} exact component={DashboardPage} />
          <Route path={'/statistic'} exact component={StatisticPage} />
          <Route path={'/login'} exact component={LoginPage} />
          <Route path={'/register'} exact component={RegistrationPage} />
          <Route path={'/currency'} exact component={Currency} />;
          <Route path={'/navigation'} exact component={Navigation} />;
          <Route path={'/add-tr-form'} exact component={AddTransFormContainer} />;
        </Switch>
      </div>
    </ContainerAppWrapper>
  );
}

export default App;
