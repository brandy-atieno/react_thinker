import React from 'react';

const SearchBar = ({filter,stock}) => {
  return (
    <form>
      <input type='text'  value={filter}placeholder='Search'/>
      <label>
      <input type='checkbox' value={stock}/>
{''}
        Only show products in stock</label>
    </form>
  )
}

export default SearchBar;