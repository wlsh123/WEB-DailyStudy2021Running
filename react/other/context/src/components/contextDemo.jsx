import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import './index.css'

const MyContext = React.createContext()

const { Provider, Consumer} = MyContext
console.log(MyContext);
export default class A extends Component {
  state={
    userName:'AComponent',
    userAge:18
  }
  render() { 
    const {userName, userAge} = this.state
    return ( 
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.userName}</h4>
        {/* <MyContext.Provider value={{userName, userAge}}>
          <B />
        </MyContext.Provider> */}
        <Provider value={{ userName, userAge }}>
          <B />
        </Provider>
      </div>
     );
  }
}
class B extends Component{
  render(){
    return(
      <div className="child">
        <h3>我是B组件</h3>
        <C />
        <D />
      </div>
    )
  }
}

class C extends Component{
  //声明接收
  static contextType = MyContext
  render(){
    console.log(this.context)
    return(
      <div className="grand1">
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名：{this.context.userName}</h4>
      </div>
    )
  }
}

//函数式组件
function D(){
  return(
    <div className="grand2">
      <h3>我是D组件</h3>
      <Consumer>
        {
          value => `${value.userName}, 年龄是${value.userAge}`
        }
      </Consumer>
    </div>
  )
}