import React from 'react';
import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';
import SearchBar from '../SearchBar/SearchBar';

const Search = () => {
    return (
        <div className="m-8 space-y-12">
            <SearchBar title="Users" url="api.github.com" path="search/users"></SearchBar>
            <ResultsGrid />
        </div>
    )
}

export default Search;