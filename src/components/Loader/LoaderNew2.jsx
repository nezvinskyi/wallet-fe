import { createPortal } from 'react-dom';
// import Loader from "react-loader-spinner";
import styles from './SpinnerNew2.module.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const modalRootRef = document.getElementById('modal-root');

const LoaderSpinner = () => {
    return createPortal (
        <div className={styles.LoaderBackdrop}>
            <div className={styles.LoaderContent}>
            <div className={styles.loader}>Loading...</div>
            </div>
        </div>,
        modalRootRef,
    );
};

export default LoaderSpinner;