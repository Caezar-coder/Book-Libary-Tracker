import React, { useState, useEffect } from 'react';
import './BookDetails.css';
import { useLocation, useParams } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import BorrowBookPopup from '../bookPopup/BorrowBookPopUp';

const BookDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [book, setBook] = useState(location.state?.book || null);
  const [image, setImage] = useState(location.state?.image || '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isReturnDateInputOpen, setIsReturnDateInputOpen] = useState(false);
  const [borrowedDate, setBorrowedDate] = useState(null);
  const [returnedDate, setReturnedDate] = useState('');
  const [returnInputDate, setReturnInputDate] = useState('');

  useEffect(() => {
    if (!book) {
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(`/api/books/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch book details');
          }
          const data = await response.json();
          setBook(data);
          setImage(data.image || '');
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchBookDetails();
    } else {
      setLoading(false);
    }
  }, [id, book]);

  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.floor(book?.rating) || 0;
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => <IoMdStar key={index} />)}
        {[...Array(emptyStars)].map((_, index) => <IoMdStar key={index + filledStars} />)}
      </>
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBorrow = (borrowedBook) => {
    if (!borrowedBooks.some((item) => item.id === borrowedBook.id)) {
      setBorrowedBooks([...borrowedBooks, borrowedBook]);
      setBorrowedDate(new Date().toLocaleDateString());
      alert(`You have successfully borrowed "${borrowedBook.title}".`);
    } else {
      alert('This book is already borrowed.');
    }
    setIsModalOpen(false);
  };

  const handleOpenReturnConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmReturn = (isConfirmed) => {
    setIsConfirmationOpen(false);
    if (isConfirmed) {
      setIsReturnDateInputOpen(true);
    }
  };

  const handleReturn = () => {
    if (!returnInputDate) {
      alert('Please specify the return date.');
      return;
    }

    setBorrowedBooks(borrowedBooks.filter((item) => item.id !== book.id));
    setReturnedDate(returnInputDate);
    alert(`You have successfully returned "${book.title}" on ${returnInputDate}.`);
    setIsReturnDateInputOpen(false);
  };

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Book details are not available.</p>;
  }

  const isBookBorrowed = borrowedBooks.some((item) => item.id === book.id);

  return (
    <div className='bookDetailBody'>
      <div className="bookDetailBodyWrapper">
        <div className="LeftImage">
          <div className="bookImg">
            {image && <img src={image} alt={book.title} />}
          </div>
        </div>
        <div className="bookTexts">
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <div className="rating">
            <p><strong>Rating:</strong></p>
            <div className="star">
              {renderStars()}
            </div>
          </div>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Description:</strong> {book.description || 'No description available.'}</p>
          {isBookBorrowed ? (
            <div>
              <p><strong>Borrowed Date:</strong> {borrowedDate}</p>
              {returnedDate && <p><strong>Returned Date:</strong> {returnedDate}</p>}
              <button className='borrow' onClick={handleOpenReturnConfirmation}>Return Book</button>
            </div>
          ) : (
            <button className='borrow' onClick={handleOpenModal}>Borrow this book</button>
          )}
        </div>
      </div>

      {/* BorrowBookPopup */}
      {isModalOpen && (
        <BorrowBookPopup
          book={book}
          onClose={handleCloseModal}
          onBorrow={handleBorrow}
        />
      )}

      {/* Confirmation Popup */}
      {isConfirmationOpen && (
        <div className="confirmationModal">
          <div className="confirmationModalContent">
            <p>Are you sure you want to return this book?</p>
            <div className="modalActions">
              <h4 className='yes' onClick={() => handleConfirmReturn(true)}>Yes</h4>
              <h4 className='no' onClick={() => handleConfirmReturn(false)}>No</h4>
            </div>
          </div>
        </div>
      )}

      {/* Return Date Input Modal */}
      {isReturnDateInputOpen && (
        <div className="returnModal">
          <div className="returnModalContent">
            <h2>Return Book</h2>
            <label>
              Return Date:
              <input
                type="date"
                value={returnInputDate}
                className='dateInput'
                onChange={(e) => setReturnInputDate(e.target.value)}
              />
            </label>
            <div className="returnModalButtons">
              <button className='confirmBtn' onClick={handleReturn}>Confirm</button>
              <button className='cancelBtn' onClick={() => setIsReturnDateInputOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
