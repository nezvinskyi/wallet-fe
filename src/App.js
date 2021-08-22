import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage, DashboardPage } from './pages/';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/home'} exact component={DashboardPage} />
        <LoginPage />
      </Switch>
    </div>
  );
}

export default App;
