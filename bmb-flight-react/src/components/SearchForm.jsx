import React, { Component } from "react";

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
      <React.Fragment>
        <form
          style={{ marginRight: 50, marginLeft: 50, marginBottom: 50 }}
          onSubmit={e => this.props.handleSubmit(this.state.postData, e)}
        >
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label>Direction</label>
              <input
                id="fromInput"
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
                id="toInput"
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
                id="whenInput"
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
                id="returnInput"
                name="returnDate"
                value={this.state.postData.returnDate}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div style={{ width: 216.3, height: 6 }}>
              <button className="btn btn-primary mb-2">Search</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;
