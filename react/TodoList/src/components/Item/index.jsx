import React, { Component } from 'react';
import './index.css'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mouse:false
     }
  }
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }
  handleCheck=(id)=>{
    return (e)=>{
      // console.log(e.target.checked);
      this.props.updateTodo(id, e.target.checked);
    }
  }
  handleDelete=(id)=>{
    // console.log('删除'+id)
    if (window.confirm('确定删除吗')) {
      this.props.deletTodo(id)
    }
  }
  render() { 
    const {id, name, done} = this.props
    const {mouse} = this.state
    return ( 
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id)}}>删除</button>
      </li>
     );
  }
}
 
export default Item;