import { createPortal } from 'react-dom';
import styles from './SpinnerNew4.module.css';

const modalRootRef = document.getElementById('modal-root');

const LoaderSpinner = () => {
    return createPortal (
        <div className={styles.LoaderBackdrop}>
            <div className={styles.LoaderContent}>
                <div className={styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div className={styles.loading}>loading</div> */}
            </div>
        </div>,
        modalRootRef,
    );
};

export default LoaderSpinner;