import { Button } from 'react-bootstrap';
import { BtnImg } from './img';
import style from './Style.module.css';

import { useDispatch } from 'react-redux';
import { globalOperations } from '../../redux/global';

const inlineStyles = {
  addBtn: {
    backgroundColor: '#24CCA7',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    padding: '0px',
    border: 'none',
    position: 'fixed',
    bottom: '2em',
    right: '2em',
  },
};

const AddTransactionBtn = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(globalOperations.openModalAddTransaction());
  };

  return (
    <>
      <Button onClick={openModal} className={style.addBtnBg} style={inlineStyles.addBtn}>
        <img src={BtnImg.addBtnBg} alt="" />
      </Button>
    </>
  );
};

export default AddTransactionBtn;
