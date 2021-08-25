import React from 'react';
import { Button } from 'react-bootstrap';
import { ContainerAppWrapper } from '../../components';
import { BtnImg } from './img';

import style from './Style.module.css';

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
  return (
    <ContainerAppWrapper>
      <Button className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={BtnImg.addBtnBg} alt="" />
      </Button>
    </ContainerAppWrapper>
  );
};

export default AddTransactionBtn;
