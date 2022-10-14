import React from 'react'
import "./SearchField.css"

function SearchField({searchInput, }) {
  return (
    <div className='search-container'>
      <div>
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <input type="search" placeholder="Search Agent" className="searchField" onChange={searchInput} />
      </div>
    </div>
  )
}

export default SearchField