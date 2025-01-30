import React, { useState } from 'react';
import './Header.css';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import logo from '../Data/Images/bookCover-removebg-preview.png';

const Header = ({ books, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchCategory, setSearchCategory] = useState(''); // State to hold the selected category
  const navigate = useNavigate();

  const handleNavigation = (path, state = {}) => {
    navigate(path, { state });
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSearchCategory(category);

    // Pass the filtered books back to the parent or handle locally
    if (category === '') {
      onSearch(books); // Show all books if no category is selected
    } else {
      const filteredBooks = books.filter((book) => book.category === category);
      onSearch(filteredBooks); // Pass filtered books back to the parent
    }
  };

  return (
    <div className="HeaderBody">
      <div className="headerWrapper">
        {/* Logo */}
        <div className="logo" onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Logo" className="imgLogo" />
        </div>

        {/* Center Navigation */}
        <div className="center">
          <p onClick={() => handleNavigation('./Home', { category: 'All Categories' })}>
            Category
          </p>
          <p onClick={() => handleNavigation('./wishList')}>Wishlists</p>
          <p onClick={() => handleNavigation('/my-books')}>My Books</p>
        </div>

        {/* Search */}
        <div className="search">
          {showSearch && (
            <div className="searchBar">
              <select
                className="searchDropdown"
                value={searchCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                <option value="Fiction">Fiction</option>
                <option value="Adventure">Adventure</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Romance">Romance</option>
                <option value="Fantasy">Fantasy</option>
                {/* Add more categories here */}
              </select>
            </div>
          )}
          <IoSearch className="searchIcon" onClick={toggleSearch} />
          <div className="profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
