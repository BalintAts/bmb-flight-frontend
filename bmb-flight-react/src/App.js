import React, { Component } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import FlightsByDirection from "./components/FlightsByDirection";
import Register from "./components/Register";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route
              path="/flights/:origin/:destination"
              component={FlightsByDirection}
            />
            <Route path="/register" component={Register} />
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
