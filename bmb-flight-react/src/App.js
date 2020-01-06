import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import FlightsByDirection from "./components/FlightsByDirection";
import Register from "./components/Register";
import Login from "./components/login";
import Logout from "./components/common/logout";
import Profile from "./components/common/profile";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <ToastContainer />
        <main className="content">
          <Switch>
            <Route
              path="/flights/:origin/:destination"
              component={FlightsByDirection}
            />
            <Route path="/profile/:firstName" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
