import { useEffect } from 'react';
import { financeOperations } from '../../redux/finance';
import { useDispatch } from 'react-redux';
import { Currency, Header, Navigation } from '../../components';
import DiagramTab from '../../components/DiagramTab';

// import styles from './StatisticPage.module.css';

export default function StatisticPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(financeOperations.getTransactions());
    dispatch(financeOperations.getCategories());
    dispatch(financeOperations.getBalance());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <Currency />
      <DiagramTab />
    </>
  );
}
