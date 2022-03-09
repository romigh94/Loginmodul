import { useDispatch } from 'react-redux';
import React from 'react'
import { logout } from '../features/userSlice';

const Logout = () => {
const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <div className="logout">
        <h1>
            Welcome!
        </h1>
        <button className="logoutBtn" onClick={(e) => handleLogout(e)}>Logout</button>  
        </div>
    )
}

export default Logout;