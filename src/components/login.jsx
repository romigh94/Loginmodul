import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Login({
      username: email,
      password: password,
      loggedIn: true
    }));
  }

  return (
    <div>
      <h2>Logga in på ditt konto</h2>
    <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
        
       <div className="inner-form">

           <label>E-postadress*</label>
           <div className="Email">
                <input type="email" id="email" value={email} 
                onChange={e => setEmail(e.target.value)} required />
           </div>

           <label>Lösenord*</label>
           <div className="Password">
               <input type="password" value={password} 
               onChange={e => setPassword(e.target.value)} required />
           </div>
           <button>Login</button>
        </div> 
    </form>

    </div>

  )
}

export default Login