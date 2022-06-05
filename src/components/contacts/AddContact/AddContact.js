import React from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";

let AddContact = () => {
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
            <button className="button button-warning">
              <Link to={"/contactList"} className="standard-button">
                Cancel
              </Link>
            </button>
          </div>
          <div className="styled-container-add">
            <form>
              <input type="text" className="form-control" value="Photo" />
              <input type="text" className="form-control" value="Salutation" />
              <input type="text" className="form-control" value="First Name" required />
              <input type="text" className="form-control" value="Last Name" required />
              <input type="text" className="form-control" value="Company" />
              <input type="text" className="form-control" value="Phone Number" required />
              <div>
                <input type="submit" value="Update" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddContact;
