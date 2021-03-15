//受控组件
import React from "react";

class Cpp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  inputChange = (e) => {
    this.setState({ value: e.target.value })
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.inputChange} />
      </div>
    )
  }
}
export default Cpp;