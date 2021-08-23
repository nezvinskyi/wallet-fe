import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, RegistrationPage, DashboardPage, TempView } from './pages/';
import { DiagramTab } from './components';
import { Container } from 'react-bootstrap';

import styles from './App.css';

function App() {
  return (
    <Container className={styles.container}>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={TempView} />
          <Route path={'/home'} exact component={DashboardPage} />
          <Route path={'/login'} exact component={LoginPage} />
          <Route path={'/register'} exact component={RegistrationPage} />
          <Route path={'/diagram-tab'} exact component={DiagramTab} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
