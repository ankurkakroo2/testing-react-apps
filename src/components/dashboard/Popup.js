import React, { useState } from "react";
import "./popup.css";

const Popup = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="popup">
      <button
        className="profile-icon"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
        id="dropdownMenuButton"
        aria-controls="dropdownMenu"
        tabIndex="0"
      ></button>
      {isOpen && (
        <div className="menu-bg" onClick={() => setIsOpen(false)}></div>
      )}
      {isOpen ? (
        <ul
          id="dropdownMenu"
          role="menu"
          className="popup-dropdown"
          aria-labelledby="dropdownMenuButton"
          tabIndex="-1"
        >
          <li>
            <button className="menu-button" role="menuitem" tabIndex="-1">
              Signed in As {user}
            </button>
          </li>
          <li>
            <button className="menu-button" role="menuitem" tabIndex="-1">
              Your Profile
            </button>
          </li>
          <li>
            <button className="menu-button" role="menuitem" tabIndex="-1">
              Settings
            </button>
          </li>
          <li>
            <button
              className="menu-button"
              role="menuitem"
              onClick={handleLogout}
              tabIndex="-1"
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};
export default Popup;
