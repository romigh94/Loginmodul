import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {

    const [firstname, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const [validation, setValidation] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })

    const handleSubmit = (e) => {
      e.preventDefault();

      let errors = {...validation}

      if (!firstname) {
        errors.firstname = "Alla fält är obligatoriska. Vänligen skriv in ditt namn"
      } if (!lastname) {
        errors.lastname = "Alla fält är obligatoriska. Vänligen skriv in ditt efternamn"
      } if (!email) {
        errors.email = "Alla fält är obligatoriska. Vänligen skriv in din email"
      } if (!password) {
        errors.password = "Alla fält är obligatoriska. Vänligen skriv in ditt lösenord"
      } if (password.length < 6) {
        errors.password = "Lösenordet måste vara minst 6 tecken"
      } else {
        errors.firstname = ""
        errors.lastname = ""
        errors.email = ""
        errors.password = ""
        setSuccess("Du är nu registrerad användare")

      }
      return setValidation(errors)
  
    }
  
    return (

      <div>
        <h2>Skapa ditt konto</h2>

      <form className="loginform" onSubmit={handleSubmit}>
          
         <div className="inner-form">
  
             <label>Namn*</label>
             <div className="Name">
                  <input type="text" id="firstname" name="firstname" value={firstname} 
                  onChange={e => setfirstName(e.target.value)} />
             </div> 
             <p>{validation.firstname}</p>

             <label>Efternamn*</label>
             <div className="Lastname">
                 <input type="text" id="Lastname" name="lastname" value={lastname}
                 onChange={e => setLastname(e.target.value)} />
            </div> 
            <p>{validation.lastname}</p>

            <label>Användarnamn/E-mail*</label>
            <div className="email">
                <input type="text" id="email" name="email" value={email}
                onChange={e => setEmail(e.target.value)} />
            </div> 
            <p>{validation.email}</p>
  
             <label>Lösenord*</label>
             <div className="Password">
                 <input type="password" id="password" name="password" value={password} 
                 onChange={e => setPassword(e.target.value)} />
             </div> 
            <p>{validation.password}</p>

             <p>{success}</p>


             <button>SKAPA KONTO</button>


          </div> 
          Har du redan ett konto? <Link to="/">Logga in här</Link>
      </form>
  
      </div>
    )
}


