import React from "react";
import Form from "./common/form";
import Input from "./common/input";
import axiosService from "../services/axiosService";
import config from "../config.json";
import Joi from "joi-browser";
import "./Register.css";

class Register extends Form {
  state = {
    data: { firstName: "", lastName: "", username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    firstName: Joi.string()
      .required()
      .label("First name"),
    lastName: Joi.string()
      .required()
      .label("Last name"),
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await axiosService.post(
        config.apiEndpointRegister,
        this.state.data
      );
      localStorage.setItem("token", response.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "User already registered";
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <h1 className="result-header">Register</h1>
        <div className="register-form">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="firstName"
              value={data.firstName}
              label="First name"
              onChange={this.handleChange}
              error={errors.firstName}
            />
            <Input
              name="lastName"
              value={data.lastName}
              label="Last name"
              onChange={this.handleChange}
              error={errors.lastName}
            />
            <Input
              name="username"
              value={data.username}
              label="Username"
              onChange={this.handleChange}
              error={errors.username}
            />
            <Input
              name="password"
              value={data.password}
              label="Password"
              inputType="password"
              onChange={this.handleChange}
              error={errors.password}
            />
            <button disabled={this.validate()} className="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
