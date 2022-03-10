import React from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {

const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        
        navigate("/")

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