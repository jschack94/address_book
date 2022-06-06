import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import LoginForm from "./components/Login/LoginForm";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";



let App = () => {

const [contacts, setContacts] = React.useState([
   
    {
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
      salutation: "Mr",
      firstName: "Patrick",
      lastName: "Star",
      company: "Apple",
      phone: "262-893-4343",
    },
    {
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png",
      salutation: "Mrs",
      firstName: "Sandy",
      lastName: "Cheeks",
      company: "Apple",
      phone: "253-545-5454",
    },
  ]);

  const [user, setUser] = useState({ username: "", email: "", password: "" });


  const navigate = useNavigate();


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

  const addContact = (contact) => {
		setContacts([ ...contacts, contact ])
	}

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
        <Route path="/contact/new" element={<AddContact addContact={addContact} />} />
        <Route path="/contactList" element={<ContactList Contacts={contacts} setContacts={setContacts} />} />
        <Route path="/settings" element={<EditContact User={user} editUser={editUser} />} />

        

        <Route path="/" element={<LoginForm Login={Login} />} />
      </Routes>
    </div>
  );
};

export default App;
