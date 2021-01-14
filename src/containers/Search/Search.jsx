import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
    return (
        <SearchBar title="Users" url="api.github.com" path="search/users"></SearchBar>
    )
}

export default Search;