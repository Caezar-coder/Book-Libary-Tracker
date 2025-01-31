import React from 'react';
import { useWishlist } from './WishlistContext';
import './WishlistPage.css';
import images from '../../Components/Data/images'; 

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="WishlistPage">
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((book, index) => {
           
            

            return (
              <li key={index} className="wishlist-item">
                <div className="book-details">
                  <div className="book-img">
                  <img src={images} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <p>{book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Published: {book.publicationYear}</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromWishlist(book.id)} 
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p >No book has been selected</p>
      )}
    </div>
  );
}

export default WishlistPage;
