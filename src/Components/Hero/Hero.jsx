import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../Data/images'; 
import './Hero.css';

const Hero = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://librarytracker-rb8z.onrender.com/getallbook');
        if (!response.ok) {
          throw new Error(`Failed to fetch books: ${response.statusText}`);
        }
        const data = await response.json();

        if (data && Array.isArray(data.data)) {
          setBooks(data.data);
          setFilteredBooks(data.data); // Initialize filtered books
        } else {
          throw new Error('Expected an object with a "data" key holding an array.');
        }
      } catch (err) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter by genre
    const filtered = books.filter((book) =>
      book.genre?.toLowerCase().includes(term)
    );
    setFilteredBooks(filtered);
  };

  const handleViewBook = (book) => {
    console.log('Selected book:', book);
    // Add navigation logic here if needed
  };

  const handleGoBack = () => {
    navigate('/Landing-page');
  };

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="HeroBody">
      <div className="directory">
        <button onClick={handleGoBack} className='back'>Go back</button>
      
      {/* Search Bar */}
      
        <input
          type="text"
          placeholder="Search books by genre..."
          value={searchTerm}
          onChange={handleSearch}
          className="searchInput"
        />
      
      </div>
      {/* Book Cards */}
      <div className="CardHolder">
        {Array.isArray(filteredBooks) && filteredBooks.length > 0 ? (
          filteredBooks.map((book, id) => (
            <div
              key={book.id || id}
              className="Card"
              onClick={() => handleViewBook(book)}
            >
              <div className="CardImg">
                <img
                  src={images[id] || id} 
                  alt={book.genre || 'Unknown Genre'}
                  className="CardImage"
                />
              </div>
              <p className="booktitle">{book.title || 'Untitled Book'}</p>
              <p className="author">{book.author || 'Unknown Author'}</p>
              <p className="genre">{book.genre || 'Uncategorized'}</p>
            </div>
          ))
        ) : (
          <p>No books found for the selected genre.</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
