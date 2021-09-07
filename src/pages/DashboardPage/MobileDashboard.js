import { useDispatch } from 'react-redux';
import { financeOperations } from '../../redux/finance';
import React, { useEffect } from 'react';
import DiagramTab from '../../components/DiagramTab';
import {
  Navigation,
  Currency,
  Balance,
  OperationsTable,
} from '../../components';

import { DashboardContainer } from '../../components/Container'

import style from './Style.module.css';

const MobileDashboard = ({ viewChanger, mainView }) => {
    const dispatch = useDispatch();
  
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
                        <Navigation viewChanger={viewChanger} mainView={mainView} />
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
        </DashboardContainer>
    );
  };
  
  export default MobileDashboard;