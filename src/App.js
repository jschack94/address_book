import React, { useState } from "react";
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import LoginForm from "./components/Login/LoginForm";

let App = () => {


  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
      
    if (details.email && details.password ) {
        setUser({
            username: details.username,
            email: details.email,
            password: details.email
        })
        console.log(user)
    } else {
        console.log("Try Again")
    }


  
  };
  
  return (
   <div>
      <NavBar User={user}/>
        <div className="App">
          {user.email != "" ? (
            <div className="welcome">
              <ContactList User={user}/>
            </div>
          ) : (
            <LoginForm Login={Login}/>
          )}
        </div>
        </div>
      );
    };
    
      


export default App;
