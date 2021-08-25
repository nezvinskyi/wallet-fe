import React, { useEffect } from 'react';
import { financeOperations } from '../../redux/finance';
import { Button, Container } from 'react-bootstrap';
import {
  Header,
  Navigation,
  Currency,
  OperationsTable,
  ContainerAppWrapper,
} from '../../components';
import { dashBoardImg } from './img';

import style from './Style.module.css';
import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';

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

const DashboardPage = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(globalOperations.openModalAddTransaction());
    //TODO временно! подключить модалку!
    history.push('/add-tr-form');
  };

  return (
    <>
      <ContainerAppWrapper>
        <Header />
        <div className={style.dashboardPage}>
          <Navigation />
          <Currency />
          <OperationsTable />
          <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
          <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
        </div>
      </ContainerAppWrapper>
      <Button onClick={handleClick} className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={dashBoardImg.addBtnBg} alt="" />
      </Button>
    </>
  );
};

export default DashboardPage;
