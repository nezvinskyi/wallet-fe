import React from 'react';
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

const DashboardPage = () => {
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
      <Button className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={dashBoardImg.addBtnBg} alt="" />
      </Button>
    </>
  );
};

export default DashboardPage;
