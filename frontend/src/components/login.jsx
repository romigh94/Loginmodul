import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    //let errors = {...validation}

    const formdata = {
      email: email,
      password: password
    }

    if (!email, !password) {
      setError("Alla fält är obligatoriska")
    
    } else {
    setError("")

    axios.post('http://localhost:8080/login', formdata)
    .then(res => setMessage(res.data.message))
    .catch(error => console.log(error))

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

         <p>{message}</p>  
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