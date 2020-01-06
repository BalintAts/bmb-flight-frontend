import React, { Component } from "react";
import NumberFormat from "react-number-format";
import axiosService from "../services/axiosService";
import queryString from "query-string";
import config from "../config.json";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import "./FlightsByDirection.css";

class FlightsByDirection extends Component {
  state = {
    flightData: [],
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const qString = queryString.parse(this.props.location.search);
    const postData = {
      ...this.props.match.params,
      ...qString
    };

    const response = await axiosService.post(
      config.apiEndpointFilter,
      postData
    );

    this.setState({ flightData: response.data, isLoading: false });
  }

  handleAdd = flightData => {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      const postUrl = config.apiEndpointAddFlight + user.userName;
      toast.info("Ticket added to whislist", { autoClose: 4000 });
      console.log(postUrl);
    } catch (ex) {}
  };

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
                {localStorage.token && (
                  <React.Fragment>
                    <th></th>
                    <th></th>
                  </React.Fragment>
                )}
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
                  {localStorage.token && (
                    <React.Fragment>
                      <td>
                        <button className="btn btn-primary btn-sm">Buy</button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => this.handleAdd(data)}
                        >
                          Add to cart
                        </button>
                      </td>
                    </React.Fragment>
                  )}
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
