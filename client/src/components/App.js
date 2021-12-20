import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Header from "./Header";

function App() {
  const [user, setUser] = useState("");
  const [myJournals, setJournals] = useState([]);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <> 
    
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} setJournals={setJournals} />
          <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/signup" element={<SignUp setUser={setUser}/>} />
            <Route path="/login" element={<Login setUser={setUser} myJournals={myJournals} setJournals={setJournals} />} />
            <Route path="/me" element={<UserProfile user={user} myJournals={myJournals} setJournals={setJournals}/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
