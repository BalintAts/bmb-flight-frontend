import React, { Component } from "react";
import SearchForm from "./SearchForm";
import regModal from "./RegisterModal";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import "./MainPage.css"
import axiosService from "../services/axiosService";
import config from "../config.json";


class MainPage extends Component {
  state = {
      mostPopularData: [],
        isLoading: false
  };

    async componentDidMount() {
        this.setState({ isLoading: true });
        let topFlightResponse = await axiosService.get(config.apiEndpointTop);
        this.setState({ mostPopularData: topFlightResponse.data, isLoading: false });
    }
  

    render() {
        const { mostPopularData, isLoading } = this.state;

        if (isLoading)
            return (
                <div className="div-loading">
                    <div>
                        <h3>Loading...</h3>
                        <br />
                        <img
                            src="/ezgif-1-454e00dff622.gif"
                            width={100}
                            height={100}
                            alt="flightLoader"
                        ></img>
                    </div>
                </div>
            );

    return (
          <div>
                <h1 className="result-header">Where do you want to fly?</h1>
            <SearchForm parentProps={this.props} />
            <div className="most-popular-results">
                <div className="most-popular-header">
                    <h1 align="center">Most Popular Flights</h1>
                    <table className= "table table-striped">
                        <thead>
                            <tr>
                                <th> City </th>
                                <th> Price </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mostPopularData.map(data => (
                                <tr key={data.cityName}>
                                <td>{data.cityName}</td>
                                <td>
                                    <NumberFormat
                                        value={data.price}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={"Ft "}
                                    />
                                </td> 
                            </tr>
                        ))}
                         </tbody>
                    </table>
                </div>
            </div>
          </div>
    );
  }
}

export default MainPage;
