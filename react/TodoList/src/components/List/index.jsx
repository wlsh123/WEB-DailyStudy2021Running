import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deletTodo: PropTypes.func.isRequired
  }
  render() { 
    const {todos} = this.props
    const { updateTodo, deletTodo } = this.props
    return ( 
      <ul className="todo-main">
        {todos.map((todo)=>{
          return <Item key={todo.id} {...todo} updateTodo= {updateTodo} deletTodo={deletTodo}/>
          //<Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
        })}
      </ul>
     );
  }
}
 
export default List;