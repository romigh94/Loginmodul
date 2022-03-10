import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {


    const [firstname, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validation, setValidation] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })


    const handleSubmit = (e) => {
      e.preventDefault();

      if (!firstname) {
        validation.firstname = "Alla fält är obligatoriska. Vänligen skriv in ditt namn"
      } else {
        validation.firstname = ""
      }

      if (!lastname) {
        validation.lastname = "Alla fält är obligatoriska. Vänligen skriv in ditt efternamn"
      } else {
        validation.lastname = ""
      }

      if (!email) {
        validation.email = "Alla fält är obligatoriska. Vänligen skriv in din email"
      } else {
        validation.email = ""
      }

      if (!password) {
        validation.password = "Alla fält är obligatoriska. Vänligen skriv in ditt lösenord"
      } else {
        validation.password = ""
      }

      return setValidation(validation)
  
    }
  
    return (

      <div>
        <h2>Skapa ditt konto</h2>

      <form className="loginform" onSubmit={handleSubmit}>
          
         <div className="inner-form">
  
             <label>Namn:</label>
             <div className="Name">
                  <input type="text" id="firstname" name="firstname" value={firstname} 
                  onChange={e => setfirstName(e.target.value)} />
             </div> 
             {validation.name && <p>{validation.firstname}</p>}

             <label>Efternamn:</label>
             <div className="Lastname">
                 <input type="text" id="Lastname" name="lastname" value={lastname}
                 onChange={e => setLastname(e.target.value)} />
            </div> 
            {validation.lastname && <p>{validation.lastname}</p>}

            <label>Användarnamn/E-mail:</label>
            <div className="email">
                <input type="text" id="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)} />
            </div> 
            {validation.email && <p>{validation.email}</p>}
  
             <label>Lösenord:</label>
             <div className="Password">
                 <input type="password" id="password" name="password" value={password} 
                 onChange={e => setPassword(e.target.value)} />
             </div> 
             {validation.password && <p>{validation.password}</p>}
             {validation.fName && console.log(validation)}


             <button onClick={handleSubmit}>SKAPA KONTO</button>


          </div> 
          Har du redan ett konto? <Link to="/">Logga in här</Link>
      </form>
  
      </div>
    )
}


