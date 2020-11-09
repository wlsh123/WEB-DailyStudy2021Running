import React from "react";
import {connect} from 'react-redux';
class App extends React.Component{
  constructor({r,g,b}){
    console.log("我是APP的构造函数");
    super();
 
  }
  render(){
    return(
      <div>
        <div className="box" style={{ "backgroundColor":`rgb(${this.props.r},${this.props.g},${this.props.b})`}}>
          {this.props.r}
          {this.props.g}
          {this.props.b}
        </div>
        <button onClick={this.props.changeR}>更改r值</button>
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return{
      "r": state.r,
      "g":state.g ,
      "b":state.b
    }
  },
  (dispatch)=>{
    return{
      "changeR": function(){
        console.log("改变R");
        dispatch({"type":"CHANGER"});
      }
    }
  }
)(App);
