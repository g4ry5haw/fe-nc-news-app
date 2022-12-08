import React from 'react';
import "../App.css";

const Search = () => {
    return (
        <form className='nav-header-searchBox'>
            <label>
            <input placeholder="Search NC News" type="text" />
            </label>
            <button>Search</button>
        </form>
    );
};

export default Search;