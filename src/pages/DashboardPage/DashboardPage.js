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

// const DashboardPage = () => {
//   const dispatch = useDispatch();
//   // const [mainView, setMainView] = useState(true);
//   const [mainView, setMainView] = useState('main');
//   const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

//   useEffect(() => {
//     dispatch(financeOperations.getTransactions());
//     dispatch(financeOperations.getCategories());
//     dispatch(financeOperations.getBalance());
//   }, [dispatch]);

//   return (
//     <ContainerAppWrapper>
//       <Header viewChanger={setMainView} />
//       <div className={style.dashboardPage}>
//         {/* <div className={style.backdrop}> */}
//         <Media queries={{
//           mobile: "(max-width: 767px)",
//           other: "(min-width: 768px)",
//           // desktop: "(min-width: 1280px)"
//         }}>
//           {matches => (
//             <Fragment>
//               {matches.mobile && 
//                 <DashboardContainer className={style.backdrop}>
//                   <div className={style.leftContainer}>
//                     <div className={style.navAndBalanceContainer}>
//                       <div className={style.navigationContainer}>
//                         <Navigation viewChanger={setMainView} mainView={mainView} />
//                       </div>
//                       {mainView === 'main' && (
//                         <div className={style.balanceContainer}>
//                             <Balance />
//                         </div>
//                       )}
//                     </div>
//                     {mainView === 'currency' && (
//                         <div className={style.currencyContainer}>
//                             <Currency />
//                         </div>
//                     )}    
//                   </div>
      
//                   <div className={style.divider}></div>
      
//                   <div className={style.rightContainer}>
//                     {mainView === 'main' && <OperationsTable viewCondition={mainView} />}
//                     {mainView === 'stats' && <DiagramTab />}
//                   </div>
//                   {/* {mainView !== 'currency' && mainView !=='stats'&& <AddTransactionBtn />} */}
//                 </DashboardContainer>
//               }
//               {matches.other && 
//                 <DashboardContainer className={style.backdrop}>
//                   <div className={style.leftContainer}>
//                     <div className={style.navAndBalanceContainer}>
//                       <div className={style.navigationContainer}>
//                           <Navigation viewChanger={setMainView} mainView={mainView} />
//                       </div>
//                       {mainView !== 'currency' && (
//                         <div className={style.balanceContainer}>
//                           <Balance />
//                         </div>
//                       )}
//                     </div>
//                     {mainView !== 'currency' && (
//                       <div className={style.currencyContainer}>
//                         <Currency />
//                       </div>
//                     )}    
//                   </div>
      
//                   <div className={style.divider}></div>
      
//                   <div className={style.rightContainer}>
//                     {mainView === 'main' && <OperationsTable viewCondition={mainView} />}
//                     {mainView === 'stats' && <DiagramTab />}
//                   </div>
//                   {/* {mainView !== 'currency' && mainView !=='stats'&& <AddTransactionBtn />} */}
//                 </DashboardContainer>
//               }
//             </Fragment>
//           )}
//         {/* <DashboardContainer className={style.backdrop}>
//           <div className={style.leftContainer}>
//             <div className={style.navAndBalanceContainer}>
//               <div className={style.navigationContainer}>
//                 <Navigation viewChanger={setMainView} mainView={mainView} />
//               </div>

//               {mainView === 'main' && (
//                 <div className={style.balanceContainer}>
//                   <Balance />
//                 </div>
//               )}
//               {mainView === 'currency' && (
//                 <div className={style.currencyContainer}>
//                   <Currency />
//                 </div>
//               )}
//             </div>
//             <div className={style.currencyContainerTD}>
//               <Currency />
//             </div>
//           </div>

//           <div className={style.divider}></div>

//           <div className={style.rightContainer}>
//             {mainView === 'main' && <OperationsTable viewCondition={mainView} />}
//             {mainView === 'stats' && <DiagramTab />}
//           </div>
//         </DashboardContainer> */}
//         </Media>
//         {/* </div> */}
//       </div>
//       {/* убрала кнопку со добавления со страницы статистики */}
//       {mainView !== 'currency' && mainView !=='stats'&& <AddTransactionBtn />}
//       {isModalOpen && (
//         <Modal>
//           <AddTransactionForm />
//         </Modal>
//       )}
//     </ContainerAppWrapper>
//   );
// };

const DashboardPage = () => {
  // const dispatch = useDispatch();
  const [mainView, setMainView] = useState('main');
  // const [setMainView] = useState('main');
  const isModalOpen = useSelector(globalSelectors.getIsModalAddTransactionOpen);

  return (
    <ContainerAppWrapper>
      <Header viewChanger={setMainView} />
      <div className={style.dashboardPage}>
        <Media queries={{
           mobile: "(max-width: 767px)",
           other: "(min-width: 768px)",
          //  desktop: "(min-width: 1280px)"
         }}>
          {matches => (
            <Fragment>
              {matches.mobile && <MobileDashboard viewChanger={setMainView} mainView={mainView}/>}
              {matches.other && <OtherDashboard viewChanger={setMainView} mainView={mainView}/>}
              {/* {matches.desktop && <OtherDashboard viewChanger={setMainView} mainView={mainView}/>} */}
            </Fragment>
          )}
        </Media>
      </div>
      {/* убрала кнопку со добавления со страницы статистики */}
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
