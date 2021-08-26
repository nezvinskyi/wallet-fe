import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import { ContainerAppWrapper } from '../../components';
import { BtnImg } from './img';
import { globalOperations, globalSelectors } from '../../redux/global';

import style from './Style.module.css';

import Modal from '../Modal';
import AddTransactionForm from '../AddTransactionForm';

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

  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  const openModal = () => {
    dispatch(globalOperations.openModalAddTransaction());
  };

  return (
    <>
      <Button onClick={openModal} className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={BtnImg.addBtnBg} alt="" />
      </Button>

      {isModalOpen && (
        <Modal>
          <AddTransactionForm />
        </Modal>
      )}
    </>
  );
};

export default AddTransactionBtn;
