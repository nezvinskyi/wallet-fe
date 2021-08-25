// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import authOperations from '../redux/auth/auth-operations';
import { Button, Container } from 'react-bootstrap';
import scss from './LoginPage.module.css';
import image from './images/login-image.png';
import imaje from './images/Ellipse1.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';

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
  '@media (min-width: 300px)': {
    primaryBtn: {
      width: 280,
      height: 50,
    },
  },

  secondaryBtn: {
    color: '#4A56E2',
    background: 'white',
    width: 300,
    height: 50,
    border: '1px solid #4A56E2',
    borderRadius: '20px',
  },
  '@media (min-width: 300px)': {
    secondaryBtn: {
      width: 280,
      height: 50,
    },
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();

    dispatch(userOperations.login({ email, password }));
  };

  return (
    <Container>
      <div className={scss.container}>
        <div className={scss.imageWrapper}>
          <img src={image} alt="pic of man" className={scss.loginPic} />
          <img src={imaje} alt="ellipse" className={scss.ellipsePic} />
          <h1 className={scss.title}>Finance App</h1>
        </div>

        <div className={scss.formWrapper}>
          <Container>
            <h1 className={scss.title}>Wallet</h1>
            <form className={scss.form} onSubmit={submitHandler} autoComplete="off">
              <input
                className={scss.inputItem}
                type="email"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

              <input
                className={scss.inputItem}
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />

              <div className={scss.btnGroup}>
                <Button variant="primary" type="submit" style={styles.primaryBtn}>
                  ВХОД
                </Button>

                <Button variant="primary" type="submit" style={styles.secondaryBtn}>
                  <Link to="/register">РЕГИСТРАЦИЯ</Link>
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
