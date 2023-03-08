import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    <p className="Text">{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
