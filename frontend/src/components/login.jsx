import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const [validation, setValidation] = useState({
    email: "",
    password: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {...validation}


      if (!email) {
      errors.email = "Alla fält är obligatoriska. Vänligen skriv in din email"
    } if (!password) {
      errors.password = "Alla fält är obligatoriska. Vänligen skriv in ditt lösenord."
    } else {
      navigate('/logout')

    }

    return setValidation(errors)

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
           <p>{validation.email}</p>

           <label>Lösenord*</label>
           <div className="Password">
               <input type="password" value={password} 
               onChange={e => setPassword(e.target.value)} />
           </div>
           <p>{validation.password}</p>


           <button onClick={handleSubmit}>LOGGA IN</button>
        </div> 
        Har du inget konto?
        <Link to="/signup">Registrera dig här</Link>
    </form>

    </div>

  )
}

export default Login