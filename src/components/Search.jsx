import React from 'react';
import "../App.css";

const Search = () => {
    return (
        <form className='searchBox'>
            <label>
            <input placeholder="Search NC News" type="text" />
            </label>
            <button>Search</button>
        </form>
    );
};

export default Search;