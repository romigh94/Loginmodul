import React from 'react'

const Logout = () => {

    const handleLogout = (e) => {
        e.preventDefault();

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