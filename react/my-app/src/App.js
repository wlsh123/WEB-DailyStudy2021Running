import React from "react";
import ReactDOM from "react-dom";

class App extends components {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
  }
  handleChange = (event) => {
    let val = event.target.value;
    this.setState({
      val: val,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
