import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./RegisterModal";

const NavBar = ({ user }) => {
    return (
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
        BmB flight        
        </Link>
        <Link className="navbar-brand" to="/">
            <img    src="/output-onlinepngtools.png"
                    width={70}
                    height={50}
                    alt="flightLoader">
            </img>                        
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="nav navbar-nav ml-auto">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                              
                               <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>




              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <span className="navbar-text" style={{ color: "white" }}>
                Logged in as:
              </span>
              <NavLink
                className="nav-item nav-link"
                to={`/profile/${user.firstName}`}
              >
                {user.firstName}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
