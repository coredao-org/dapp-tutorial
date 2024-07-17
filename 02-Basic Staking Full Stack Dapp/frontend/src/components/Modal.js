import React from 'react';

const Modal = ({ isOpen, onClose, onClaim, rewardAmount }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Claim Reward</h2>
        <p>Your reward amount is: {rewardAmount} REWARD</p>
        <button onClick={onClaim} className="btn-primary">
          Claim
        </button>
        <button onClick={onClose} className="btn-secondary">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
