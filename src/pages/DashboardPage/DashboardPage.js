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

const DashboardPage = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
  }, [dispatch]);

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
    </>
  );
};

export default DashboardPage;
