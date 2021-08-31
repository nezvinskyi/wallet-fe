import { NonceProvider } from "react-select";

const inlineStyle = {
  table: {
    position: 'relative',
    zIndex: '2',
    borderBottomCollor: 'red',
    border: '0px solid white',
    borderCollapse: 'collapse',
  },

  thFirst: {
    backgroundColor: 'white',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    borderStyle: 'hidden',
    paddingLeft: '20px',
  },
  thSumm: {
    backgroundColor: 'white',
    borderStyle: 'hidden',
    textAlign: 'right',
    paddingRight: '15px',
  },
  thLast: {
    backgroundColor: 'white',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderStyle: 'hidden',
    textAlign: 'right',
    paddingRight: '15px',
  },
  // убирает шапку с колонки с кнопками
  thLastEdit:{
    borderStyle: 'hidden',
  },
  tableTr: {
    border: '0px solid inherit',
  },
  tableTypeTh: {
    backgroundColor: 'white',
    borderStyle: 'hidden',
    paddingLeft: '0px',
  },

  tableTh: {
    backgroundColor: 'white',
    borderStyle: 'hidden',
  },

  tableTd: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
  },
  // '@media screen and (max-width: 767px)': {
  //   tableDataTd: {
  //     paddingLeft: '0px',
  //   },
  //   tableTypeTd: {
  //     paddingLeft: '18px',
  //   },
  //   thFirst: {
  //     paddingLeft: '0px',
  //   },
  // },
  tableDataTd: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
        // paddingLeft: '20px',
  },

  tableTypeTd: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
   
  },

  income: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',

    paddingRight: '15px',
    color: '#24CCA7',
    textAlign: 'right',
      },
  expense: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingRight: '15px',
    color: '#FF6596',
    textAlign: 'right',
    
  },
  tdLast: {
    paddingRight: '15px',
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    textAlign: 'right',
    backgroundColor: 'inherit',
   
  },
  // убирает обводку с ячейки с кнопками
  tdLastEdit:{
    borderStyle: 'hidden',
  },
  
  tdFirst: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingRight: '15px',
    textAlign: 'left',
  },
  thead: {
    backgroundColor: 'white',
    height: '58px',
    lineHeight: '38px',
    borderStyle: 'hidden',
  },
};

export default inlineStyle;
