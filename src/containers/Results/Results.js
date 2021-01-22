import React from 'react';
import { useSelector } from 'react-redux';
import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';
import UserDetails from '../UserDetails/UserDetails';

const Results = () => {
    const users = useSelector(state => state.users);
    return(
        <div>
            <ResultsGrid users={users.items}/>
            <UserDetails/>
        </div>
    );
}

export default Results;