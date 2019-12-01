import React, { Component } from "react";
import SearchForm from "./SearchForm";
import FlightsByDirection from "./FlightsByDirection";
import axiosService from "../services/axiosService";

const apiEndpoint = "http://localhost:54192/api/filter";

class MainPage extends Component {
  state = {
    data: []
  };

  /*componentDidMount() {
    all cities needed for inputs (api request)
  }*/

  handleSubmit = async (postData, e) => {
    e.preventDefault();
    const data = await axiosService.post(apiEndpoint, postData);
    this.setState({ data });
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Where do you want to fly?</h1>
        <SearchForm handleSubmit={this.handleSubmit} />
        <React.Fragment>
          <FlightsByDirection data={data} isLoading={isLoading} />
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default MainPage;
