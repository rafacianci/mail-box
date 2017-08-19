import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/email';
import './style.css';

const EmailContent = ({ message, onDelete }) => {
  if (!message) {
    return null;
  }

  return (
    <div className='emailContent'>
      <h2 className='messageSubject'>{ message.subject }</h2>
      <a
        role='button'
        className='excludeMessage'
        onClick={() => onDelete(message.uid)}
        tabIndex={0}
      >
        X
      </a>
      <small className='messageSender'>{ message.sender }</small>
      <p className='messageContent'>{ message.message }</p>
    </div>
  );
};

const mapStateProps = ({ email }) => ({
  message: email.selectedMessage,
});

export default connect(mapStateProps, {
  onDelete: deleteMessage,
})(EmailContent);
