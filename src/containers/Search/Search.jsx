import React from 'react';
import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
    return (
        <div className="m-8 space-y-12">
            <SearchBar title="Users"></SearchBar>
            <Results />
        </div>
    )
}

export default Search;