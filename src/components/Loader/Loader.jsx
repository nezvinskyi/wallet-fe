import { createPortal } from 'react-dom';
import styles from './Spinner.module.css'

const modalRootRef = document.getElementById('modal-root');

const Loader = () => {
  return (
    <div className={styles.gooey}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.loading}>loading</div>
    </div>
  )
}

export const LoaderCurrency = () => {
  return (
    <div className={styles.LoaderCurrencyInner}>
      <Loader/>
    </div>
  );
};

export const LoaderSpinner = () => {
    return createPortal (
        <div className={styles.LoaderBackdrop}>
            <div className={styles.LoaderContent}></div>
            <Loader/>
        </div>,
        modalRootRef,
    );
};