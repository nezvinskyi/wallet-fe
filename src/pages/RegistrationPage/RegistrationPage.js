import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';
import scss from './RegistrationPage.module.css';
import heroPic from '../../assets/images/registration-image.png';
// import imaje from './images/Ellipse1.png';
import { sessionOperations } from '../../redux/session';
import { userOperations } from '../../redux/user';

import 'react-toastify/dist/ReactToastify.css';

import Logo from '../../components/Logo';
import * as validate from '../../helpers/validate';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    try {
      e.preventDefault();

      if (password !== confirmPassword) {
        const errorMessage = 'Passwords no not match';
        dispatch(sessionOperations.setError(errorMessage));
        return;
      }

      await validate.registration({ name, email, password });

      dispatch(userOperations.register({ name, email, password }));
    } catch (error) {
      dispatch(sessionOperations.setError(error.toString()));
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.imageContainer}>
        <div className={scss.heroPicWrapper}>
          <img src={heroPic} alt="pic of woman" className={scss.heroPic} />
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
              required
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="" className={scss.inputLabelPassword}></label>
            <input
              className={scss.inputItem}
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor="" className={scss.inputLabelPassword}></label>
            <input
              className={scss.inputItem}
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <label htmlFor="" className={scss.inputLabelUser}></label>
            <input
              className={scss.inputItem}
              type="name"
              name="name"
              required
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <div className={scss.btnGroup}>
              <Button variant="primary" type="submit" style={styles.primaryBtn}>
                REGISTER
              </Button>

              <Button variant="primary" type="button" style={styles.secondaryBtn}>
                <Link to="/login">LOGIN</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
