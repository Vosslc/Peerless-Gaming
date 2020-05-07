import React, { Component } from "react";
const {REACT_APP_APEX_KEY} = process.env;

console.log("api", process.env.REACT_APP_APEX_KEY);

export default class ApexWidget extends Component {
  constructor() {
    super();

    this.state = {
      apexData: null,
    };
  }

  componentDidMount() {
    fetch("")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <p>Apex.jsx</p>
      </div>
    );
  }
}
