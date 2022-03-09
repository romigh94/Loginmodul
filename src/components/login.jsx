import React, { useState } from 'react'

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.useState)

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