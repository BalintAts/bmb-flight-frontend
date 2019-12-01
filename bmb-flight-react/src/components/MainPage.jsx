import React, { Component } from "react";
import SearchForm from "./SearchForm";

//const apiEndpoint = "http://localhost:54192/api/filter";

class MainPage extends Component {
  state = {
    data: []
  };

  /*componentDidMount() {
    all cities needed for inputs (api request)
  }*/

  render() {
    return (
      <div className="result-header">
        <h1>Where do you want to fly?</h1>
        <SearchForm parentProps={this.props} />
      </div>
    );
  }
}

export default MainPage;
