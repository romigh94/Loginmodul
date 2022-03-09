
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Logout from './components/logout';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);

  <div>{user ? <Login /> : <Logout />}</div>;

  return (
    <div className="App">
<Router>
  <Link to="/">Home</Link>
  <Link to="/login">Login</Link>
  <Link to="/signup">Signup</Link>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
</Router>
    

    </div>


  );
}

export default App;
