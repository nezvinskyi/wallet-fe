import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage, RegistrationPage, DashboardPage, TempView } from './pages/';

import { Header, Navigation, Currency } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />

      <Switch>
        <Route path={'/'} exact component={TempView} />
        <Route path={'/home'} exact component={DashboardPage} />
        <Route path={'/currency'} exact component={Currency} />
        <Route path={'/login'} exact component={LoginPage} />
        <Route path={'/register'} exact component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
