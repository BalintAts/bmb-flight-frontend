import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div className="search-form">
        <form onSubmit={e => this.props.handleSubmit(this.state.postData, e)}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label>Direction</label>
              <input
                id="origin"
                name="origin"
                value={this.state.postData.direction}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="col-auto">
              <label>Destination</label>
              <input
                id="destination"
                name="destination"
                value={this.state.postData.toDirection}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="col-auto">
              <label>Date</label>
              <input
                id="departDate"
                name="departDate"
                value={this.state.postData.whenDate}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="col-auto">
              <label>Return date</label>
              <input
                id="returnDate"
                name="returnDate"
                value={this.state.postData.returnDate}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div style={{ width: 216.3, height: 6 }}>
              <button className="btn btn-primary mb-2">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
