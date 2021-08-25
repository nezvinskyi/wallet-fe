import React, { useEffect } from 'react';
import { financeOperations } from '../../redux/finance';
import { Button } from 'react-bootstrap';
import {
  Header,
  Navigation,
  Currency,
  Balance,
  OperationsTable,
  ContainerAppWrapper,
  AddTransactionBtn,
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
          <Balance />
          <OperationsTable />
          <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
          <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
          <AddTransactionBtn />
        </div>
      </ContainerAppWrapper>
      {/* //убрать? */}
      <Button onClick={handleClick} className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={dashBoardImg.addBtnBg} alt="" />
      </Button>
    </>
  );
};

export default DashboardPage;
