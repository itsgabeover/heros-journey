import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png"


function NavBar({ user, setUser, setJournals }) {
  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setJournals(null);
        navigate('/');
        window.location.reload()
      }
    });
  }

  return (
    <nav>
        {user ? (
          <nav className="web-nav">
            
            <ul className="menu">
              <li><Link to="/"><img className="logo" src={logo} alt="logo"/></Link></li>
              <li><Link to="/" className="item">Home</Link></li>
              <li><Link to="/" className="item">12 Stages of the Hero's Journey</Link></li>
              <li><Link to="/" className="item">Jungian Archetypes</Link></li>
              <li><Link to="/me" className="item">My Journal</Link></li>
              <li><Link to="/me" className="item">My Profile</Link></li>
              <li><Link to="/me" className="item">Community</Link></li>
              <li><button className="item" onClick={handleLogoutClick}>Logout</button></li>
            </ul>
          </nav>
        ) : (
          <nav className="webnav">
            <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">12 Stages of the Hero's Journey</Link></li>
              <li><Link to="/">Jungian Archetypes</Link></li>
              <li><Link to="/me">My Journal</Link></li>
              <li><Link to="/me">My Profile</Link></li>
              <li><Link to="/me">Community</Link></li>
            </ul>
          </nav>
        )}
    </nav>
  );
}

export default NavBar;