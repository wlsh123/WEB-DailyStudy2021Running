import React, { Component } from 'react';
//引入store，用于获取状态
import store from '../../redux/store'
//引入actionCreater，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNumber
    this.props.add(value*1)
  }
  decrement = ()=>{
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }
  incrementIfOdd = ()=>{
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.add(value*1)
    }
  }
  incrementAsync = ()=>{
    const { value } = this.selectNumber
    this.props.addAsync(value*1, 500)
  }
  render() { 
    // console.log(this)
    console.log(this.props)
    return ( 
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
     );
  }
}
 
export default Count;