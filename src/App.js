
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';

function App() {
  return (
    <div className="App">
<Router>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
</Router>
    

    </div>
  );
}

export default App;
