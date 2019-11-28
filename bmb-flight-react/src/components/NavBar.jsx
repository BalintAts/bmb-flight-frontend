import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <h3>
          <span style={{ marginRight: 10 }} className="badge badge-secondary">
            BmB
          </span>
        </h3>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
