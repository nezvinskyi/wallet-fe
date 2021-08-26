import React, { useEffect } from 'react';
import { financeOperations } from '../../redux/finance';
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
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  return (
    <ContainerAppWrapper>
      <Header />
      <div className={style.dashboardPage}>
        <div className={style.rightBarWrapper}>
          <div className={style.navigationWrapper}>
            <Navigation />
          </div>
          <div className={style.balanceWrapper}>
            <Balance />
          </div>

          <div className={style.currencyWrapper}>
            <Currency />
          </div>
        </div>
        <div className={style.operationsTable}>
          <OperationsTable />
        </div>
        <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
        <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
        <AddTransactionBtn />
      </div>
    </ContainerAppWrapper>
  );
};

export default DashboardPage;
