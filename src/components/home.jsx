import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login'
import Signup from './signup'


function Home() {
  return (
    <div>

      <Router>
        <nav>
          <ul>
            <Link to="/">Home</Link>
             <Link to="/login">Login</Link>
             <Link to="/signup">Signup</Link>
          </ul>
        </nav>

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>

      </Router>

    </div>
  )
}

export default Home