import { useDispatch, useSelector } from 'react-redux';
import { financeOperations } from '../../redux/finance';
import { globalSelectors } from '../../redux/global';
import React, { useEffect, useState } from 'react';
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
  Modal,
  AddTransactionForm,
} from '../../components';
import { dashBoardImg } from './img';

import style from './Style.module.css';

const DashboardPage = ({ history }) => {
  const dispatch = useDispatch();
  const [mainView, setMainView] = useState(true);

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  return (
    <>
      <ContainerAppWrapper>
        <Header />
        <div className={style.dashboardPage}>
          <Navigation viewChanger={setMainView} />
          <Currency />
          <Balance />
          {mainView ? <OperationsTable viewCondition={mainView} /> : <DiagramTab />}
          <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
          <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />

          <AddTransactionBtn />
        </div>
        <img className={style.elipse_top} src={dashBoardImg.ellipseTop} alt="" />
        <img className={style.elipse_bottom} src={dashBoardImg.ellipseBottom} alt="" />
        <AddTransactionBtn />
        {isModalOpen && (
          <Modal>
            <AddTransactionForm />
          </Modal>
        )}
      </ContainerAppWrapper>
    </>
  );
};

export default DashboardPage;
