import React, { useState } from 'react';
import './BorrowBookPopup.css';

const BorrowBookPopup = ({ book, onClose, onBorrow }) => {
  const [returnDate, setReturnDate] = useState('');

  const handleBorrow = () => {
    if (returnDate) {
      onBorrow({ ...book, returnDate });
      onClose();
    } else {
      alert('Please select a return date.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Take "{book.title}" <br />
        until:</h2>
        <div className="date-picker">
          <input
            type="date"
            value={returnDate}
             className='dateInput'
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button onClick={handleBorrow} className="ok-button">
            OK
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowBookPopup;
