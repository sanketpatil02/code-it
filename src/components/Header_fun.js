import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Header_fun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function loginUser() {
    loginWithRedirect();
  }
  function logoutUser() {
    logout({ returnTo: window.location.origin });
  }
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-links">
              <Link to="/">🚀codeIT🚀</Link>
            </div>

            <button type="button" className="nav-btn" onClick={handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/problems">Problems</Link>
            </li>
            <li>
              <Link to="/contest">Contest</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
          </ul>

          <div className="nav-links">
            {isAuthenticated && (
              <Link
                to="/profile"
                className=" btn-secondary"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "10px",
                  paddingBottom: "0px",
                }}
              >
                <h6 id="username">{user.email}</h6>
              </Link>
            )}

            {!isAuthenticated && (
              <button id="button_login" onClick={loginUser}>
                Login
              </button>
            )}

            {isAuthenticated && (
              <button
                id="button_login"
                onClick={logoutUser}
                style={{ borderRadius: "10px" }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header_fun;
