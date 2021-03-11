import React from "react";

class App extends React.Component {
  show=()=>{
    const {input1} = this.refs
    alert(input1.value);
  }
  render(){
    return (
      <div>
          <input ref="input1" type="text" placeholder="请输入" />
          <button onClick={this.show}>点击</button>
          <input type="text" placeholder="请输入" />
      </div>
    );
  }
}

export default App;
