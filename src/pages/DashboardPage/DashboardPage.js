import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Header, OperationsTable } from '../../components';
import { dashBoardImg } from './img';
import style from './Style.module.css';

const inlineStyles = {
  contentWrapper: {
    position: 'relative',
  },
  addBtn: {
    // position: 'relative',
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
    <Container>
      <Header />
      <div style={inlineStyles.contentWrapper}>
        <div className={style.dashboardPage}>
          <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
          <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
        </div>
        <Button className={style.addBtnBg} style={inlineStyles.addBtn}>
          <img src={dashBoardImg.addBtnBg} alt="" />
        </Button>
        <OperationsTable />
      </div>
    </Container>
  );
};

export default DashboardPage;
