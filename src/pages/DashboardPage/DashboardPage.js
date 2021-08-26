import React, { useCallback, useEffect, useState } from 'react';
import { financeOperations } from '../../redux/finance';
import DiagramTab from '../../components/DiagramTab';
// import { Button } from 'react-bootstrap';
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
import { useDispatch, } from 'react-redux';

const DashboardPage = ({ history }) => {
  const dispatch = useDispatch();
  const [mainView, setMainView] = useState(true)
  
  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  return (
    <>
      <ContainerAppWrapper>
        <Header />
        <div className={style.dashboardPage}>
          <Navigation  viewChanger={setMainView}/>
          <Currency />
          <Balance />
          {mainView?
          (<OperationsTable viewCondition = {mainView}/>):
          <DiagramTab/> }
          <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
          <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
          
          <AddTransactionBtn />
        </div>
      </ContainerAppWrapper>
    </>
  );
};

export default DashboardPage;
