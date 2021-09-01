import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';
import { closeIcon } from '../../assets/images/close-icon';
import styles from './Modal.module.css';

const modalRootRef = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClose = () => {
    dispatch(globalOperations.closeModalAddTransaction());
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(globalOperations.closeModalAddTransaction());
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={e => handleBackdropClick(e)}>
      <div className={styles.modal}>
        <div className={styles.closeBtnContainer} onClick={onClose}>
          <img src={closeIcon.close} alt="" />
        </div>
        {children}
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;
