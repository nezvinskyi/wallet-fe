import React from 'react';
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

const DashboardPage = () => {
  return (
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
  );
};

export default DashboardPage;
