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
          <>
          <ul>
            <li><img className="logo" src={logo} alt="logo"/> </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/me">MyProfile</Link></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
          </ul>

            
          </>
        ) : (

          <ul>
            <li><img className="logo" src={logo} alt="logo"/> </li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
          </ul>

        )}
    </nav>
  );
}

export default NavBar;