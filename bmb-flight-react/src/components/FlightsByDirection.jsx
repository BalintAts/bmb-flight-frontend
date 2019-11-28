import React, { Component } from "react";
import NumberFormat from "react-number-format";

class FlightsByDirection extends Component {
  render() {
    return (
      <div>
        {this.props.data.length === 0 ? (
          ""
        ) : (
          <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Flight tickets</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>When</th>
                  <th>Return</th>
                  <th>Price (HUF)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.data.map(flight => (
                  <tr key={flight.id}>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.departDate}</td>
                    <td>{flight.returnDate}</td>
                    <td>
                      <NumberFormat
                        value={flight.value}
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default FlightsByDirection;
