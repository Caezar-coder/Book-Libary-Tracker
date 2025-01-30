import React from 'react';
import { useWishlist } from './WishlistContext';
import './WishlistPage.css';

function WishlistPage() {
  const { wishlist } = useWishlist(); 
  return (
    <div className="WishlistPage">
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((book, index) => (
            <li key={index}>
              <p>{book.title}</p>
              <p>Author: {book.author}</p>
              <p>Published: {book.yearPublished}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default WishlistPage;
