import React, { Component } from 'react';
import Header from './components/Header/index.jsx'
import List from './components/List'
import Footer from './components/Footer/index.jsx'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos:[
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '敲代码', done: false }
      ]
     }
  }
  addTodo=(todoObj)=>{
    const {todos} = this.state
    const newTodo = [todoObj, ...todos]
    this.setState({
      todos:newTodo
    })
  }

  updateTodo=(id, done)=>{
    const {todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({
      todos:newTodos
    })
  }
  deletTodo=(id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  checkAllTodo=(done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}//{...todoObj, done:done}
    })
    this.setState({
      todos:newTodos
    })
  }
  clearAllDone=()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({
      todos:newTodos
    })
  }
  render() { 
    const {todos} = this.state
    return ( 
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deletTodo={this.deletTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
     );
  }
}
export default App;