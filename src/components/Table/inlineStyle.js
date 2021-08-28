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
    paddingLeft: '30px',
  },
  thLast: {
    backgroundColor: 'white',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderStyle: 'hidden',
    textAlign: 'right',
    paddingRight: '30px',
  },
  tr: {
    border: '0px solid inherit',
  },
  th: {
    backgroundColor: 'white',
    borderStyle: 'hidden',
  },

  td: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  income: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
    color: '#24CCA7',
    textAlign: 'right',
  },
  expense: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
    paddingRight: '15px',
    color: '#FF6596',
    textAlign: 'right',
  },
  tdLast: {
    paddingLeft: '15px',
    paddingRight: '15px',
    // borderBottom: 'none',
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    textAlign: 'right',
  },
  tdFirst: {
    borderBottomColor: 'rgba(220, 220, 223, 1)',
    backgroundColor: 'inherit',
    paddingLeft: '15px',
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
