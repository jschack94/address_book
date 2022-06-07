import React, { useState } from "react";
import "./AddContact.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../../_global.scss";
import "../../../_globalForm.scss";

const Input = ({ handleInputChange, phoneIndex }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="anotherNumbers">Phone # {phoneIndex + 1}: </label>

        <input
          type="text"
          name="number"
          id={phoneIndex + 1}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="anotherNumbers">Type of Number: </label>

        <select name="type" id={phoneIndex + 1} onChange={handleInputChange}>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
    </>
  );
};

let AddContact = ({ addContact }) => {
  const initialFormState = {
    photo: "",
    salutation: "",
    firstname: "",
    lastname: "",
    company: "",
    numbers: [{ type: "Home", number: "", isPrimary: false }],
  };
  const [contact, setContact] = useState(initialFormState);
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, id } = event.target;

    if (id === "primaryNumber") {
      let numbers = [...contact.numbers];
      numbers[0][name] = value;
      numbers[0]["isPrimary"] = true;
      setContact({ ...contact, numbers });
    } else if (["type", "number"].includes(name)) {
      let numbers = [...contact.numbers];
      numbers[id][name] = value;
      setContact({ ...contact, numbers });
    } else {
      setContact({ ...contact, [name]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addContact(contact);
    setContact(initialFormState);

    navigate("/contactList");
  };

  const onAddBtnClick = (event) => {
    event.preventDefault();
    setContact({
      ...contact,
      numbers: [...contact.numbers, { type: "Home", number: "" }],
    });
    setInputList(
      inputList.concat(
        <Input
          handleInputChange={handleInputChange}
          phoneIndex={inputList.length}
          key={inputList.length}
        />
      )
    );
  };
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <section>
        <div className="grid-container-create">
          <div className="grid-item-create">
            <h2>Create Contact</h2>
            <p>
              {" "}
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </i>
            </p>
            <button className="button primary-button">
              <Link to={"/contactList"} className="remove-link">
                Cancel
              </Link>
            </button>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            class="icon"
            alt="Contact Photo"
          ></img>
          <div className="add-form">
            <form onSubmit={submitHandler} onChange={handleInputChange}>
              <div className="form-inner">
                <h2>Create Contact</h2>
                <div className="form-group">
                  <label htmlFor="photo">Photo:</label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    onChange={handleInputChange}
                    value={contact.photo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salutation">Salutation:</label>
                  <input
                    type="text"
                    name="salutation"
                    id="salutation"
                    onChange={handleInputChange}
                    value={contact.salutation}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleInputChange}
                    value={contact.firstname}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={handleInputChange}
                    value={contact.lastname}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    onChange={handleInputChange}
                    value={contact.company}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone (Primary): <FaStar color={"orange"} />
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="primaryNumber"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Type of Number:</label>
                  <select
                    name="type"
                    id="primaryNumber"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>
                {inputList}
                <button className="button add-button" onClick={onAddBtnClick}>
                  Add phone number <span>+</span>
                </button>

                <input type="submit" value="Add Contact" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddContact;
