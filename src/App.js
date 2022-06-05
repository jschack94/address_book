import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import LoginForm from "./components/Login/LoginForm";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";



let App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const Login = (details) => {
    if (details.email && details.password) {
      setUser({
        username: details.username,
        email: details.email,
        password: details.password,
      });
      console.log(user);
      
      
      navigate("/contactList");
    }
  };

  const editUser = (details) => {
    if (details.email && details.password) {
      setUser({
        username: details.username,
        email: details.email,
        password: details.password,
      });
      console.log(user);
      
     alert('Update Successful');
    }
  };

  

  return (
    <div>
      <NavBar User={user} />
      <Routes>
        <Route path="/contact/new" element={<AddContact />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/settings" element={<EditContact User={user} editUser={editUser} />} />
        <Route path="/contacts/view/:contactId" element={<ViewContact />} />

        

        <Route path="/" element={<LoginForm Login={Login} />} />
      </Routes>
    </div>
  );
};

export default App;
