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

import style from './Style.module.css';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [mainView, setMainView] = useState(true);

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  return (
    <ContainerAppWrapper>
      <Header />
      <div className={style.dashboardPage}>
        <div className={style.backdrop}>
          <div className={style.leftContainer}>
            <div className={style.navAndBalanceContainer}>
              <Navigation viewChanger={setMainView} />
              <Balance />
            </div>
            <div className={style.currencyContainer}>
              <Currency />
            </div>
          </div>
          <div className={style.rightContainer}>
            {mainView ? <OperationsTable viewCondition={mainView} /> : <DiagramTab />}
          </div>
        </div>
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
