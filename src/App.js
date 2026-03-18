import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import Slide from './comp/Slide';
import Profile from './comp/Profile';
import SignUp from './comp/SignUp';
import Contact from './comp/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h2>UI/UX Design</h2>
          <nav>
            <NavLink to="/slide">Slide</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/slide" element={<Slide/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
