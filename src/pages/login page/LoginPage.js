import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import authOperations from '../redux/auth/auth-operations';
import { Button, Container } from 'react-bootstrap';
import scss from './LoginPage.module.css';

const styles = {
  primaryBtn: {
    color: '#4A56E2',
    background: '#24CCA7',
    width: 300,
    height: 50,
    marginTop: '20px',
    marginBottom: '20px',
    border: 'none',
    borderRadius: '20px',
  },
  secondaryBtn: {
    color: '#4A56E2',
    background: 'white',
    width: 300,
    height: 50,

    border: '1px solid #4A56E2',
    borderRadius: '20px',
  },
};

const LoginPage = () => {
  return (
    <Container>
      <div className={scss.container}>
        <div className={scss.imageWrapper}>
          <h1 className={scss.title}>Finance App</h1>
        </div>

        <div className={scss.formWrapper}>
          <Container>
            <h1 className={scss.title}>Wallet</h1>
            <form
              className={scss.form}
              // onSubmit={handleSubmit}

              autoComplete="off"
            >
              <input
                className={scss.inputItem}
                type="email"
                name="email"
                placeholder="E-mail"
                // value={email}
                // onChange={event => setEmail(event.target.value)}
              />

              <input
                className={scss.inputItem}
                type="password"
                name="password"
                placeholder="Пароль"
                // value={password}
                // onChange={event => setPassword(event.target.value)}
              />

              <div className={scss.btnGroup}>
                <Button variant="primary" type="submit" style={styles.primaryBtn}>
                  ВХОД{' '}
                </Button>

                <Button variant="primary" type="submit" style={styles.secondaryBtn}>
                  РЕГИСТРАЦИЯ{' '}
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
