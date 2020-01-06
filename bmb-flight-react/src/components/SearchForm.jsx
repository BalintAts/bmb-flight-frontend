import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    postData: {
      origin: "",
      destination: "",
      departDate: "",
      returnDate: ""
    }
  };

  handleChange = event => {
    const postData = { ...this.state.postData };
    postData[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ postData });
  };

  handleClick = () => {
    const { parentProps } = this.props;
    const { origin, destination, departDate, returnDate } = this.state.postData;

    parentProps.history.push(
      `/flights/${origin}/${destination}?departDate=${departDate}&returnDate=${returnDate}`
    );
  };

  checkDirectionsAreEmpty = () => {
    const { origin, destination } = this.state.postData;
    if (origin === "" || destination === "") return true;
    return false;
  };

  render() {
    const { origin, destination, departDate, returnDate } = this.state.postData;

    return (
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label htmlFor="origin">Direction</label>
          <input
            id="origin"
            name="origin"
            value={origin}
            onChange={this.handleChange}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="col-auto">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            name="destination"
            value={destination}
            onChange={this.handleChange}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="col-auto">
          <label htmlFor="departDate">Date</label>
          <input
            id="departDate"
            name="departDate"
            value={departDate}
            onChange={this.handleChange}
            type="date"
            className="form-control"
          ></input>
        </div>
        <div className="col-auto">
          <label htmlFor="returnDate">Return date</label>
          <input
            id="returnDate"
            name="returnDate"
            value={returnDate}
            onChange={this.handleChange}
            type="date"
            className="form-control"
          ></input>
        </div>
        <div style={{ width: 216.3, height: 6 }}>
          <button
            className="btn btn-primary mb-2"
            onClick={this.handleClick}
            disabled={this.checkDirectionsAreEmpty()}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
