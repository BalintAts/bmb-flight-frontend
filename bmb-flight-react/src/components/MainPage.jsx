import React, { Component } from "react";
import SearchForm from "./SearchForm";
import FlightsByDirection from "./FlightsByDirection";
import axiosService from "../services/axiosService";

const apiEndpoint = "http://localhost:54192/api/filter";

class MainPage extends Component {
  state = {
    data: []
  };

  handleSubmit = async (postData, e) => {
    e.preventDefault();
    const data = await axiosService.post(apiEndpoint, postData);
    this.setState({ data });
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Where do you want to fly?</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <SearchForm handleSubmit={this.handleSubmit} />
        </div>
        <React.Fragment>
          <FlightsByDirection data={this.state.data} />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default MainPage;
