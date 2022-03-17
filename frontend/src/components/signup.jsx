import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {


    const [firstname, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');


    //Validation
    const [validation, setValidation] = useState({
      firstname: "", lastname: "", email: "", password: ""
    })
    let errors = {...validation}



    const handleSubmit = (e) => {
      e.preventDefault();

  
      if (!firstname) {
        errors.firstname = "Alla fält är obligatoriska. Vänligen skriv in ditt namn"
      } if (!lastname) {
        errors.lastname = "Alla fält är obligatoriska. Vänligen skriv in ditt efternamn"
      } if (!email) {
        errors.email = "Alla fält är obligatoriska. Vänligen skriv in din email"
      } if (!password) {
        errors.password = "Alla fält är obligatoriska. Vänligen skriv in ditt lösenord"
      } else {
        errors.firstname =""
        errors.lastname = ""
        errors.email = ""
        errors.password = ""
        setSuccess("Du är nu registrerad användare")

      }
      return setValidation(errors)

    }

      const handleClick = (e) => {
        e.preventDefault();

      const formdata = {
        username: email,
        password: password
      }

      fetch('http://localhost:8080/', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(formdata)
      })
      .then(console.log(formdata))
      .then(response => console.log(response))
      .catch(error => console.log(error))

}





    //Sign up form

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
             <p>{validation.firstname}</p>

             <label>Efternamn*</label>
             <div className="Lastname">
                 <input type="text" id="Lastname" name="lastname" value={lastname}
                 onChange={e => setLastname(e.target.value)} />
            </div> 
            <p>{validation.lastname}</p>

            <label>Användarnamn/E-mail*</label>
            <div className="email">
                <input type="email" id="email" name="email" value={email}
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


             <button onClick={handleClick}>SKAPA KONTO</button>


          </div> 
          Har du redan ett konto? <Link to="/">Logga in här</Link>
      </form>
  
      </div>
    
    ) 
  }