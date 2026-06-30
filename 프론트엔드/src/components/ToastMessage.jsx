import React from 'react';

function ToastMessage({ message, isVisible }) {
  return (
    <div className={`toast ${isVisible ? 'toast-show' : ''}`}>
      {message}
    </div>
  );
}

export default ToastMessage;
