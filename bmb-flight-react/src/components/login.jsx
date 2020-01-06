import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
import axiosService from "../services/axiosService";
import config from "../config.json";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await axiosService.post(
        config.apiEndpointLogin,
        this.state.data
      );
      localStorage.setItem("token", response.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "Wrong email or password";
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1 className="result-header">Login</h1>
        <form className="register-form" onSubmit={this.handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
