import React, { Component } from "react";

console.log("api", process.env.REACT_APP_APEX_KEY);

export default class ApexWidget extends Component {
  constructor() {
    super();

    this.state = {
      apexData : ""
    };
  }

  render() {
    return (
      <div>
        <p>Apex.jsx</p>
      </div>
    );
  }
}
