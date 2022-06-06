import React from 'react';
import { Link } from "react-router-dom";



let ViewContact = () => {

return (
<React.Fragment>
<section>
        <div className="grid-container">
          <div className="grid-item">
            <h2>View Contact</h2>
            <p> <i>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
           </i>
            </p>
            <button className="button button-warning">
          <Link to={"/contactList"} className="standard-button">Back</Link>
          </button>
          </div>
        </div>
        

      </section>
<div className="styled-container">
        <div className="styled-card">
          <img
           
            class="fit-picture"
            
            alt="Grapefruit slice atop a pile of other slices"
          ></img>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              First Name:
              <span>
                <b>Rajan</b>
              </span>
            </li>
            <li className="list-group-item list-group-item-action">
              Last Name:
              <span>
                <b>Rajan</b>
              </span>
            </li>
            <li className="list-group-item list-group-item-action">
              Company:
              <span>
                <b>Rajan</b>
              </span>
            </li>
            <li className="list-group-item list-group-item-action">
              Phone Number:
              <span>
                <b>Rajan</b>
              </span>
            </li>
          </ul>
       
          </div>
          
        
          </div>
         
       
       
</React.Fragment>

)
};

export default ViewContact;