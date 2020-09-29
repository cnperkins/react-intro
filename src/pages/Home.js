import React, { Component } from "react";
import { Meter } from "../comps/Meter";

export class Home extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Meter number={this.state.count} />
        <h1>Hello from the home componenent</h1>
        <button onClick={() => this.handleClick()}>Increase</button>
        <button onClick={() => this.decreaseClick()}>Decrease</button>
      </div>
    );
  }
}
