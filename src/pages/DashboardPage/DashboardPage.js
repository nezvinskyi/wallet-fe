import { useDispatch, useSelector } from 'react-redux';
import { financeOperations } from '../../redux/finance';
import { globalSelectors } from '../../redux/global';
import React, { useEffect, useState } from 'react';
import DiagramTab from '../../components/DiagramTab';
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
import { Container } from 'react-bootstrap';

import style from './Style.module.css';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [mainView, setMainView] = useState(true);
  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  return (
    <ContainerAppWrapper>
      <Header />
      <div className={style.dashboardPage}>
        {/* <div className={style.backdrop}> */}
        <Container className={style.backdrop}>
          <div className={style.leftContainer}>
            <div className={style.navAndBalanceContainer}>
              <Navigation viewChanger={setMainView} mainView={mainView} />
              <Balance />
            </div>
            <div className={style.currencyContainer}>
              <Currency />
            </div>
          </div>

          <div className={style.divider}></div>

          <div className={style.rightContainer}>
            {mainView ? <OperationsTable viewCondition={mainView} /> : <DiagramTab />}
          </div>
        </Container>
        {/* </div> */}
      </div>
      <AddTransactionBtn />
      {isModalOpen && (
        <Modal>
          <AddTransactionForm />
        </Modal>
      )}
    </ContainerAppWrapper>
  );
};

export default DashboardPage;
