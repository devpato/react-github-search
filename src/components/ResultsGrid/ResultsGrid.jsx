import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User/User';

const ResultsGrid = () => {
    const users = useSelector(state => state.users);

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                users.items.map(user => <User {...user}></User>)
            }
        </div>
    );
};

export default ResultsGrid;