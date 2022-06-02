import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

export default class Header extends Component {
  state = {
    isOpen: false,
    isLogged: false,
    userPofileLink: "/profile",
    userName: "nikhiljugale007@gmail.com",
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  loginUser = () => {
    alert("LOGIN");
  };

  render() {
    return (
      <nav className="navbar" style={{ fontSize: "2px" }}>
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-links">
              <Link to="/">🚀codeIT🚀"</Link>
            </div>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/problems">Problems</Link>
            </li>
            <li>
              <Link to="/contest">Contest</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
          <div className="nav-links">
            <Link
              to="/profile"
              className=" btn-secondary"
              style={{ padding: "10px" }}
            >
              <h4 id="username">{this.state.userName} </h4>
            </Link>
            <Link to="/login">
              <button id="button_login" onClick={this.loginUser()}>
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
