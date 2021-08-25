import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import IconButton from './IconButton';
import AddTransactionForm from './AddTransactionForm';

import { ReactComponent as AddIcon } from './icons/add.svg';

class AddTransFormContainer extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <IconButton onClick={this.toggleModal} arial-label="Add contact">
          <h2>Add transaction</h2>
          <AddIcon width="40" height="40" fill="green" />
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <AddTransactionForm onCloseModal={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}
export default AddTransFormContainer;
