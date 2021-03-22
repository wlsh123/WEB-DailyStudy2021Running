import React, { Component } from 'react';
import './index.css'
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleCheckAll=(e)=>{
    this.props.checkAllTodo(e.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() { 
    const {todos} = this.props
    const doneCount = todos.reduce((pre, current)=>{
      return pre + (current.done ? 1 : 0)
    },0)
    const total = todos.length;
    // console.log(doneCount);
    return ( 
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span>/全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
     );
  }
}
 
export default Footer;