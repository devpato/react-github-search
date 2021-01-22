import React from 'react';
import User from '../User/User';

const ResultsGrid = ({ users }) => {

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                users.map(user => <User key={user.id} {...user}></User>)
            }
        </div>
    );
};

export default ResultsGrid;