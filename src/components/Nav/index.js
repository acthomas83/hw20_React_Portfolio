import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav id="nav-bar" class="navbar navbar-expand-sm navbar-dark fixed-top">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#section1" />
              <img
                id="mini-logo"
                // src="../src/images/aaron-thomas-logo-NO-WORDS.png"
                // alt="Profile Logo"
              ></img>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section3">
                Portfolio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                // href=""
                id="navbardrop"
                data-toggle="dropdown"
              >
                Contact
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#section41">
                  Reach Me
                </a>
                <a className="dropdown-item" href="#section42">
                  Social Media
                </a>
                <a className="dropdown-item" href="./resume.html">
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
