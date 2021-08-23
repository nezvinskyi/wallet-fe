// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import authOperations from '../redux/auth/auth-operations';
import { Button, Container } from 'react-bootstrap';
import scss from './RegistrationPage.module.css';
import image from './images/registration-image.png';
import imaje from './images/Ellipse1.png';

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

const RegistrationPage = () => {
  return (
    <div className={scss.container}>
      <div className={scss.imageWrapper}>
        <img src={image} alt="pic of woman" className={scss.registrationPic} />
        <img src={imaje} alt="ellipse" className={scss.ellipsePic} />
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

            <input
              className={scss.inputItem}
              type="password"
              name="password"
              placeholder="Подтвердите пароль"
              // value={password}
              // onChange={event => setPassword(event.target.value)}
            />

            <input
              className={scss.inputItem}
              type="name"
              name="name"
              placeholder="Ваше имя"
              // value={password}
              // onChange={event => setPassword(event.target.value)}
            />

            <div className={scss.btnGroup}>
              <Button variant="primary" type="submit" style={styles.primaryBtn}>
                РЕГИСТРАЦИЯ{' '}
              </Button>
              <Button variant="primary" type="submit" style={styles.secondaryBtn}>
                ВХОД{' '}
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default RegistrationPage;
