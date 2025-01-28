import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const location = useLocation(); 
  const categoryId = new URLSearchParams(location.search).get('categoryId'); 
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [myBook, setMyBook] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }
        const data = await response.json();
        setCategoryData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategoryData();
    } else {
      setError('No categoryId found in the URL');
    }
  }, [categoryId]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const addToMyBook = (product) => {
    setMyBook((prevMyBook) => [...prevMyBook, product]);
  };

  if (loading) {
    return <p>Loading category data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!categoryData) {
    return <p>Category not found!</p>;
  }

  return (
    <div className="CategoryPage">
      <h1>{categoryData.name}</h1>
      <img src={categoryData.image} alt={categoryData.name} className="CategoryImage" />
      <p>{categoryData.description}</p>
      {/* Display Products */}
      <div className="Products">
        {categoryData.products?.map((product) => (
          <div key={product.id} className="ProductCard">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            <button onClick={() => addToMyBook(product)}>Add to My Book</button>
          </div>
        ))}
      </div>

      {/* Wishlist */}
      <div className="Wishlist">
        <h2>Wishlist</h2>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </div>

      {/* My Book */}
      <div className="MyBook">
        <h2>My Book</h2>
        {myBook.length > 0 ? (
          <ul>
            {myBook.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items in your book.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
