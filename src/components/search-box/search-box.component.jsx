import React from 'react';
import './search-box.styles.css';

// functional component is used to render html
// gets some props and returns html
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
