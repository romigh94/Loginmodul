import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Signup() {


    const [firstname, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
      e.preventDefault();

      const formdata = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }

      if (!firstname) {
        setError("Alla fält är obligatoriska")
      } else if (!lastname) {
        setError("Alla fält är obligatoriska")
      } else if (!email) {
        setError("Alla fält är obligatoriska")
      } else if (!password) {
        setError("Alla fält är obligatoriska")
      } else {
        setError("")

        axios.post('http://localhost:8080/register', formdata)
        .then(res => setMessage(res.data.message))
        .catch(error => console.log(error))
      }

    }

    return (

      <div>
        <h2>Skapa ditt konto</h2>

      <form className="signupform" onSubmit={handleSubmit}>
          
         <div className="inner-form">
  
             <label>Namn*</label>
             <div className="Name">
                  <input type="text" id="firstname" name="firstname" value={firstname} 
                  onChange={e => setfirstName(e.target.value)} />
             </div> 

             <label>Efternamn*</label>
             <div className="Lastname">
                 <input type="text" id="Lastname" name="lastname" value={lastname}
                 onChange={e => setLastname(e.target.value)} />
            </div> 

            <label>Användarnamn/E-mail*</label>
            <div className="email">
                <input type="email" id="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)} />
            </div> 

             <label>Lösenord*</label>
             <div className="Password">
                 <input type="password" id="password" name="password" value={password} 
                 onChange={e => setPassword(e.target.value)} />
             </div>
                    
              <p>{message}</p>
              <p>{error}</p> 

             <button>SKAPA KONTO</button>


          </div> 
          Har du redan ett konto? <Link to="/">Logga in här</Link>
      </form>
  
      </div>
    
    ) 
  }