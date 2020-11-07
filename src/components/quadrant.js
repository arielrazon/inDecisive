import React, { Component } from "react";

export default class Quadrant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arr = this.props.items.map((el, i) => {
      return (
        <div className="listItem" key={i}>
          <li>{el}</li>
          <button className="xOut" onClick={this.props.onclick}>
            X
          </button>
        </div>
      );
    });
    return (
      <div className="quadrant" id={this.props.priority}>
        <h2>{this.props.heading}</h2>
        <ul>{arr}</ul>
      </div>
    );
  }
}
