import React from 'react';
const User = ({ login, avatar_url }) => (
    <div className="flex-col-reverse rounded-lg shadow-md m-8 w-2/6 border-1 border-gray-100">
        <div className="body flex flex-col items-center space-y-4 text-center p-4">
            <div>
                <img src={avatar_url} className="h-32 w-32 rounded-full mx-auto ring-2 ring-green-500 ring-opacity-50" alt="avatar" />
            </div>
            <span className="font-bold text-sm text-gray-600">{login}</span>
            <span className="w-2/6 rounded-full py-1 px-2 bg-purple-300 text-xs text-purple-800 font-bold">
                User
            </span>
        </div>
        <div className="footer flex w-full border-t border-1 border-gray-100 text-sm text-gray-500">
            <a href={`https://github.com/${login}`} className="w-3/6 text-center border-r border-1 border-gray-100 p-2">Github</a>
            <button className="w-3/6 p-2">Quick View</button>
        </div>
    </div>

);

export default User;