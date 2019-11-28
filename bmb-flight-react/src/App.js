import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FlightsByDirection from "./components/FlightsByDirection";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route
              path="/flights/:from/:to"
              component={FlightsByDirection}
            ></Route>
            <Route path="/" exact component={MainPage}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
