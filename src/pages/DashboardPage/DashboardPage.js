import { /* useDispatch, */ useSelector } from 'react-redux';
// import { financeOperations } from '../../redux/finance';
import { globalSelectors } from '../../redux/global';
import React, { /* useEffect, */ useState, Fragment } from 'react';
import Media from 'react-media';
// import DiagramTab from '../../components/DiagramTab';
import {
  Header,
  // Navigation,
  // Currency,
  // Balance,
  // OperationsTable,
  ContainerAppWrapper,
  AddTransactionBtn,
  Modal,
  AddTransactionForm,
} from '../../components';
// import { Container } from 'react-bootstrap';
// import { DashboardContainer } from '../../components/Container'
import MobileDashboard from './MobileDashboard';
import OtherDashboard from './OtherDashboard';

import style from './Style.module.css';

const DashboardPage = () => {
  const [mainView, setMainView] = useState('main');
  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  return (
    <ContainerAppWrapper>
      <Header viewChanger={setMainView} />
      <div className={style.dashboardPage}>
        <Media queries={{
           mobile: "(max-width: 767px)",
           other: "(min-width: 768px)",
          }}>
          {matches => (
            <Fragment>
              {matches.mobile && <MobileDashboard viewChanger={setMainView} mainView={mainView}/>}
              {matches.other && <OtherDashboard viewChanger={setMainView} mainView={mainView}/>}
            </Fragment>
          )}
        </Media>
      </div>
      {/* убирает кнопку добавления транзакции со страницы статистики */}
      {mainView !== 'currency' && mainView !=='stats'&& <AddTransactionBtn />}
      {isModalOpen && (
        <Modal>
           <AddTransactionForm />
        </Modal>
      )}
    </ContainerAppWrapper>
  );
}

export default DashboardPage;
