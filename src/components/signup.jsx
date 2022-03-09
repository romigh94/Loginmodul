import React, { useState } from 'react'


const Signup = () => {


    const [firstName, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

  
    const handleSubmit = (e) => {
      alert("success");
      console.log(e.target.value);
    }
  
    return (
      <div>
        <h2>Skapa ditt konto</h2>
      <form className="loginform" onSubmit={handleSubmit}>
          
         <div className="inner-form">
  
             <label>Namn:</label>
             <div className="Name">
                  <input type="text" id="Name" value={firstName} 
                  onChange={e => setfirstName(e.target.value)} required />
             </div>

             <label>Efternamn:</label>
             <div className="Lastname">
                 <input type="text" id="Lastname" value={lastname}
                 onChange={e => setLastname(e.target.value)} required />
            </div>

            <label>Användarnamn/E-mail:</label>
            <div className="Username">
                <input type="text" id="Username" value={username}
                onChange={e => setUsername(e.target.value)} required />

            </div>
  
             <label>Lösenord:</label>
             <div className="Password">
                 <input type="password" value={password} 
                 onChange={e => setPassword(e.target.value)} required />
             </div>
             
          </div> 
      </form>
  
      </div>
    )
}



export default Signup;