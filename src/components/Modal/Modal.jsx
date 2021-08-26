import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';
import styles from './Modal.module.css';

const modalRootRef = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {});

  const onClose = () => {
    dispatch(globalOperations.closeModalAddTransaction());
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(globalOperations.closeModalAddTransaction());
    }
  };

  return createPortal(
    <div className={styles.Modal__backdrop} onClick={e => handleBackdropClick(e)}>
      <div className={styles.Modal__content}>
        <button className={styles.button_x} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

// onClose = () => {
//   useDispatch()
// };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

// handleBackdropClick = e => {
//   if (e.currentTarget === e.target) {
//     this.props.onClose();
//   }
// };

//   render() {
//     return createPortal(
//       <div className={styles.Modal__backdrop} onClick={this.handleBackdropClick}>
//         <div className={styles.Modal__content}>
//           <button className={styles.button_x} onClick={onClose}>
//             X
//           </button>
//           {this.props.children}
//         </div>
//       </div>,
//       modalRootRef,
//     );
//   }
// }
