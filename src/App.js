import logo from './logo.svg';
import './App.css';
import NameList from './NameList';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
      </Routes>

    </div>
  </Router>
  </div>
  );
}

export default App;
