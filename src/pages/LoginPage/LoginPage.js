import { Button, Container } from 'react-bootstrap';
import scss from './LoginPage.module.css';
import Logo from '../../components/Logo';
import heroPic from './images/login-image.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';

const styles = {
  primaryBtn: {
    color: '#ffffff',
    background: '#24CCA7',
    width: 300,
    height: 50,
    marginTop: '20px',
    marginBottom: '20px',
    border: 'none',
    borderRadius: '20px',
  },
  '@media screen and max-width: 700px': {
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
  '@media screen and min-width: 300px': {
    secondaryBtn: {
      width: 280,
      height: 50,
    },
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('dima@mail.com');
  const [password, setPassword] = useState('uaua1234');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();

    dispatch(userOperations.login({ email, password }));
  };

  return (
    // <Container>
    <div className={scss.container}>
      <div className={scss.imageContainer}>
        <div className={scss.heroPicWrapper}>
          <img src={heroPic} alt="pic of man" className={scss.heroPic} />
        </div>
        <h1 className={scss.title}>Finance App</h1>
      </div>

      <div className={scss.formContainer}>
        <div className={scss.formWrapper}>
          <div className={scss.logo}>
            <Logo />
          </div>
          <form className={scss.form} onSubmit={submitHandler} autoComplete="off">
            <label htmlFor="" className={scss.inputLabelMail}></label>
            <input
              className={scss.inputItem}
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="" className={scss.inputLabelPassword}></label>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
