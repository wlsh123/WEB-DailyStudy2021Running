import React, { Component } from 'react';
//引入store，用于获取状态
import store from '../../redux/store'
//引入actionCreater，专门用于创建action对象
import { createIncrementAction, createDecrementAction} from '../../redux/count_action'
class Count extends Component {
  // state = {count:0}
  /*componentDidMount(){
    //监测redux中状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      // console.log('@@');
      this.setState({})
    })这个存在效率问题，放在入口文件中。只调用一次render
  }
  */
  increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = ()=>{
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd = ()=>{
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value*1))
    }
  }
  incrementAsync = ()=>{
    const { value } = this.selectNumber
    const count = this.state
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1))
    }, 500);
  }
  render() { 
    // console.log(this)
    return ( 
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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