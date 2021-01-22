import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/user';

const UserDetails = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserDetails('devpato'));
    }, [])
    
    const usersDetails = useSelector(state => state.user);
    console.log('usersDetails', usersDetails)
    return(
        <div>
            user details
        </div>
    );
};

export default UserDetails;