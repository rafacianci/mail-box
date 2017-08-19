import React from 'react';
import { connect } from 'react-redux';
import './style.css';

const EmailContent = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className='emailContent'>
      <h2 className='messageSubject'>{ message.subject }</h2>
      <a className='excludeMessage'>X</a>
      <small className='messageSender'>{ message.sender }</small>
      <p className='messageContent'>{ message.message }</p>
    </div>
  );
};

const mapStateProps = ({ email }) => ({
  message: email.selectedMessage,
});

export default connect(mapStateProps)(EmailContent);
