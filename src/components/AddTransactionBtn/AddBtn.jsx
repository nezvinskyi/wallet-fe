import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';
import { ContainerAppWrapper } from '../../components';
import { BtnImg } from './img';
import { globalOperations } from '../../redux/global';

import style from './Style.module.css';
import { useHistory } from 'react-router-dom';

const inlineStyles = {
  addBtn: {
    backgroundColor: '#24CCA7',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    padding: '0px',
    border: 'none',
  },
};

const AddTransactionBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(globalOperations.openModalAddTransaction());
    //TODO временно! подключить модалку!
    history.push('/add-tr-form');
  };
  return (
    <Button onClick={handleClick} className={style.addBtnBg} style={inlineStyles.addBtn}>
      <img src={BtnImg.addBtnBg} alt="" />
    </Button>
  );
};

export default AddTransactionBtn;
