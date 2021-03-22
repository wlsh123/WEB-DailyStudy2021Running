import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types'
import './index.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp=(e)=>{
    const {keyCode, target} = e;
    // console.log(e.target.value);
    if (keyCode !== 13) return
    if (target.value.trim()==='') {
      alert('输入不能为空')
      return
    }
    // console.log(target.value);
    // console.log(nanoid())
    const todoObj = {id:nanoid(), name:target.value, done:false}
    this.props.addTodo(todoObj);

    target.value = '';
  }
  
  render() { 
    return ( 
      <div className="todo-header">
        <input type="text" placeholder="请输入内容，按回车键确认！" onKeyUp={this.handleKeyUp}/>
      </div>
     );
  }
}
 
export default Header;