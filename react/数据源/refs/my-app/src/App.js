import React from "react";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isHot:true
    }
  }
  showData = ()=>{
    const {input1} = this;
    alert(input1.value);
  }
  showData2 = ()=>{
    const {input2} = this;
    alert(input2.value);
  }
  changeWeather=()=>{
    const {isHot} = this.state;
    this.setState({isHot:!isHot})
  }
  //将 ref 的回调函数定义成 class 的绑定函数的方式
  // saveInput = (c) => {
  //   this.input1 = c;
  //   console.log('###', c);
  // }
  render() {
    const { isHot } = this.state
    return(
      <div>
        <h1>天气很{isHot ? '炎热' : '凉爽'}</h1>
        <input ref = {c=>{this.input1 = c; console.log('###',c)}} type="text" placeholder="请输入" />
        {/* <input ref={this.saveInput} type="text" placeholder="请输入" /> */}
        <button onClick={this.showData}>点击</button>
        <button onClick={this.changeWeather}>切换天气</button>
        <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="请输入"/>
      </div>
    );
  }
}

export default App;
