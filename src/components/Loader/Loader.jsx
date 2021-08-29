import { createPortal } from 'react-dom';
import Loader from "react-loader-spinner";
import styles from './Spinner.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const modalRootRef = document.getElementById('modal-root');

const LoaderSpinner = () => {
    return createPortal (
        <div className={styles.LoaderBackdrop}>
            <div className={styles.LoaderContent}></div>
            <Loader
              type="BallTriangle"
              color="#24CCA7"
              height={150}
              width={150}
            />
        </div>,
        modalRootRef,
    );
};

export default LoaderSpinner;