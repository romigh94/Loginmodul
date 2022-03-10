import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();




  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      error["email"] = "Skriv in din mail"
    } else if (!password) {
    setError("Skriv in ditt lösenord") 
    } else {
      navigate('/logout');   
    }

  }

  return (
    <div>
      <h2>Logga in på ditt konto</h2>
    <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        
       <div className="inner-form">

           <label>E-postadress*</label>
           <div className="Email">
                <input type="text" id="email" value={email} 
                onChange={e => setEmail(e.target.value)} />
           </div>

           <label>Lösenord*</label>
           <div className="Password">
               <input type="password" value={password} 
               onChange={e => setPassword(e.target.value)} />
           </div>

           <p>{error}</p>


           <button onClick={handleSubmit}>LOGGA IN</button>
        </div> 
        Har du inget konto?
        <Link to="/signup">Registrera dig här</Link>
    </form>

    </div>

  )
}

export default Login