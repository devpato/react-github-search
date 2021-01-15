import React from 'react';
import User from '../../components/User/User';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
    return (
        <>
            <SearchBar title="Users" url="api.github.com" path="search/users"></SearchBar>
        </>
    )
}

export default Search;