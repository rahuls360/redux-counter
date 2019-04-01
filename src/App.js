import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  render() {
    return (
      <div className="box">
        <button onClick={this.increment}>+</button>
        {this.props.count}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
