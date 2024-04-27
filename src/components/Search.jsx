import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
    class="search"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;
