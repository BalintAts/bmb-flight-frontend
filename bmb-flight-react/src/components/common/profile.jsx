import React, { Component } from "react";

class Profile extends Component {
  render() {
    return <h1>{this.props.match.params.firstName}'s profile</h1>;
  }
}

export default Profile;
