import React from 'react';
import './search-box.styles.css';

//Search Box component - takes in a placeholder and function that is executed on change (when the user types)
export const SearchBox = ({placeholder, handleChange}) => {
  return(
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
