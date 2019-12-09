import React, { Component } from "react";
import axiosService from "../services/axiosService";
import config from "../config.json";

class Register extends Component {
  state = {
    account: { firstName: "", lastName: "", username: "", password: "" }
  };

  handleChange = e => {
    let account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    //await axiosService.post(config.apiEndpointRegister, this.state.account);
    console.log(this.state.account);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            className="form-control"
            value={this.state.account.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            className="form-control"
            value={this.state.account.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={this.state.account.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={this.state.account.password}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Sign up
        </button>
      </div>
    );
  }
}

export default Register;
