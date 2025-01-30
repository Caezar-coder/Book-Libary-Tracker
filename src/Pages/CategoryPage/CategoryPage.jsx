import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import { useWishlist } from '../WishlistPage/WishlistContext';

const CategoryPage = () => {
  const location = useLocation();
  const categoryData = location.state; 
  const { addToWishlist } = useWishlist(); 
  const navigate = useNavigate();

  const handleAddToWishlist = (book) => {
    addToWishlist(book);
    navigate('../wishList'); 
  };

 
  if (!categoryData || !categoryData.books) {
    return <p className='error'>Error: No category data or books provided!</p>;
  }

  return (
    <div className="CategoryPage">
      <h1>{categoryData.category || 'Category'}</h1>
      <div className="Books">
        {categoryData.books.map((book) => (
          <div key={book.id || book.title} className="BookCard">
           
            {book.imageUrl && (
              <img src={book.imageUrl} alt={book.title} className="BookCover" />
            )}
            <p>{book.title}</p>
            <p>Author: {book.author}</p>
            <p>Published: {book.yearPublished}</p>
            <button onClick={() => handleAddToWishlist(book)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
