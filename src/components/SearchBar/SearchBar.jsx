import React from 'react';

const SearchBar = () => (
    <div className="w-full mx-auto md:w-4/12 md:mt-4">
        <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-4 bg-white space-y-4 sm:p-4">
                    <label htmlFor="company_website" className="block text-2xl font-medium text-gray-700">
                        User Search
                    </label>
                    <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                        <input type="text" name="company_website" id="company_website" className="border-2 border-grey-500 rounded flex-1 sm:text-sm pl-4" placeholder="Search user..." />
                        <button type="submit" className="w-full md:w-40 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
);

export default SearchBar;