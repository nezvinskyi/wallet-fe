import { useDispatch } from 'react-redux';
import { financeOperations } from '../../redux/finance';
import React, { useEffect, useState } from 'react';
import DiagramTab from '../../components/DiagramTab';
import {
  Navigation,
  Currency,
  Balance,
  OperationsTable,
  AddTransactionBtn,
} from '../../components';

import { DashboardContainer } from '../../components/Container'

import style from './Style.module.css';

const MobileDashboard = () => {
    const dispatch = useDispatch();
    // const [mainView, setMainView] = useState(true);
    const [mainView, setMainView] = useState('main');
  
    useEffect(() => {
      dispatch(financeOperations.getTransactions());
      dispatch(financeOperations.getCategories());
      dispatch(financeOperations.getBalance());
    }, [dispatch]);
  
    return (
        <DashboardContainer className={style.backdrop}>
            <div className={style.leftContainer}>
                <div className={style.navAndBalanceContainer}>
                    <div className={style.navigationContainer}>
                        <Navigation viewChanger={setMainView} mainView={mainView} />
                    </div>
                    {mainView === 'main' && (
                        <div className={style.balanceContainer}>
                            <Balance />
                        </div>
                    )}
                </div>
                {mainView === 'currency' && (
                    <div className={style.currencyContainer}>
                        <Currency />
                    </div>
                )}    
            </div>
  
            <div className={style.divider}></div>
  
            <div className={style.rightContainer}>
              {mainView === 'main' && <OperationsTable viewCondition={mainView} />}
              {mainView === 'stats' && <DiagramTab />}
            </div>
            {mainView !== 'currency' && mainView !=='stats'&& <AddTransactionBtn />}
        </DashboardContainer>
    );
  };
  
  export default MobileDashboard;