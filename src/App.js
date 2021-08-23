import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ContainerAppWrapper from './components/ContainerAppWrapper';
import { LoginPage, RegistrationPage, DashboardPage, TempView, StatisticPage } from './pages/';




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
      </Switch>

    </div>
    </ContainerAppWrapper>
  );
}

export default App;
