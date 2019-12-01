import React, { Component } from "react";
import NumberFormat from "react-number-format";
import axiosService from "../services/axiosService";

const apiEndpoint = "http://localhost:54192/api/filter";

class FlightsByDirection extends Component {
  state = {
    flightData: [],
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const postData = {
      ...this.props.match.params,
      departDate: "",
      returnDate: ""
    };

    const flightData = await axiosService.post(apiEndpoint, postData);

    this.setState({ flightData: flightData.data });
    this.setState({ isLoading: false });
  }

  render() {
    const { flightData, isLoading } = this.state;

    if (isLoading)
      return (
        <div className="div-loading">
          <div>
            <h3>Loading...</h3>
            <br />
            <img
              src="/plane_loading.gif"
              width={100}
              height={100}
              alt="flightLoader"
            ></img>
          </div>
        </div>
      );

    if (flightData.length === 0)
      return <h3>There is no flights in these conditions</h3>;

    return (
      <div className="ticket-results">
        <div className="result-header">
          <h1>Flight tickets</h1>
        </div>
        <div className="ticket-result-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>From</th>
                <th>Destination</th>
                <th>When</th>
                <th>Return Date</th>
                <th>Price (HUF)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {flightData.map(data => (
                <tr key={data.id}>
                  <td>{data.origin}</td>
                  <td>{data.destination}</td>
                  <td>{data.departDate}</td>
                  <td>{data.returnDate}</td>
                  <td>
                    <NumberFormat
                      value={data.value}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"Ft "}
                    />
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm">Buy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FlightsByDirection;
