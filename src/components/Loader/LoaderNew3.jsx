// import { createPortal } from 'react-dom';
import styles from './SpinnerNew3.module.css';

// const modalRootRef = document.getElementById('modal-root');

const LoaderSpinner = () => {
    return /* createPortal */ (
        <div className={styles.LoaderBackdrop}>
            <div className={styles.LoaderContent}>
                <div className={styles.gooey}>
                    <span className={styles.dot}></span>
                    <div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                <div className={styles.loading}>loading</div>
                </div>
            </div>
        </div>
        // modalRootRef,
    );
};

export default LoaderSpinner;