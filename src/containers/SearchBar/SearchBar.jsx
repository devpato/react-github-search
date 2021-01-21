import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { useDispatch } from "react-redux";
import { fetchUsers } from '../../store/users';
import { getUserDetails } from '../../store/user';

const SearchBar = ({ title, url, path }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchUsers(searchTerm));
        dispatch(getUserDetails(searchTerm));
        setSearchTerm('');
    };

    return (
        <div className="w-full mx-auto md:w-4/12">
            <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-4 bg-white space-y-4 sm:p-4">
                        <label htmlFor="search_user" className="block text-2xl font-medium text-gray-700">
                            Search Github - {title}
                        </label>
                        <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                            <input type="text" value={searchTerm} onChange={handleChange} name="search_user" id="search_user" className="border-2 border-grey-500 rounded flex-1 sm:text-sm pl-4" placeholder={`Search ${title}...`} />
                            <Button value="Search" color="green" width="40" />
                        </div>
                    </div>
                </div>
            </form>
        </div>);
};

export default SearchBar;