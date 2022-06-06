import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../_global.scss";

let EditContact = ({User, editUser}) => {

    const [editDetails, setEditDetails] = useState({
        username: "",
        email: "",
        password: "",
      });

      const editSubmitHandler = (e) => {
        e.preventDefault();
        editUser(editDetails);
      };
  return (
    <React.Fragment>
      <section>
        <div className="grid-container">
          <div className="grid-item">
            <h2>Edit Contact</h2>
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
          <div className="styled-container">
          <form onSubmit={editSubmitHandler}>
      <div className="form-inner">
        <h2>Edit Contact</h2>
        <div className="form-group">
          <label htmlFor="first">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={User.username}
            required
            onChange={(e) =>
              setEditDetails({ ...editDetails, username: e.target.value })
            }
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder={User.email}
            onChange={(e) => setEditDetails({ ...editDetails, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={User.email}
            required
            onChange={(e) =>
              setEditDetails({ ...editDetails, password: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Submit" />
      </div>
    </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditContact;
