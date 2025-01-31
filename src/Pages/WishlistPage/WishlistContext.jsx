import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  const addToWishlist = (book) => {
    const updatedWishlist = [...wishlist, book];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter((book) => book.id !== bookId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
