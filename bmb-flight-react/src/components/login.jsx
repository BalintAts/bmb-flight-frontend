import React, { Component } from "react";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
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
        <h1>Login</h1>
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={this.state.account.password}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Sign in
        </button>
      </div>
    );
  }
}

export default Login;
