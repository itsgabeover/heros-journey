import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png"
import logoMovie from "../logoMovie.mp4"
import ReactPlayer from 'react-player'

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
    <>
        {user ? (
          <div className="sidebar">
            <ReactPlayer className='react-player'
                url={logoMovie}
                width='100%'
                height='200px'
                playing='true'
                volume='0'
                muted='true'
            /> 
            <a className="item" href="/">Home</a>
            <a className="item" href="/signup">Signup</a>
            <a className="item" href="/login">Login</a>
            <a className="item" href="/login">The Hero's Journey</a>
            <a className="item" href="/login">Jungian Archetypes</a>
            <a className="item" href="/login">Community</a>
            <a className="item" href="/">My Journal</a>
            <a className="item" href="/me">My Profile</a>
          </div>
        ) : (
          <div className="sidebar">
              <ReactPlayer className='react-player'
                url={logoMovie}
                width='100%'
                height='200px'
                playing='true'
                volume='0'
                muted='true'
              />    
              <a className="item" href="/">Home</a>
              <a className="item" href="/signup">Signup</a>
              <a className="item" href="/login">Login</a>
              <a className="item" href="/login">The Hero's Journey</a>
              <a className="item" href="/login">Jungian Archetypes</a>
              <a className="item" href="/login">Community</a>
              <a className="item" href="/login">Community</a>
              <a className="item" href="/login">Community</a>
              <a className="item" href="/login">Community</a> 
            </div>
        )}
    </>
  );
}

export default NavBar;